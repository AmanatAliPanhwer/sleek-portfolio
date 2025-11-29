import { OpenAIEmbeddings } from '@langchain/openai';
import { Document } from '@langchain/core/documents';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { MemoryVectorStore } from '@langchain/classic/vectorstores/memory';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Singleton to hold the vector store
let vectorStore: MemoryVectorStore | null = null;

export class RAGStore {
  private static instance: RAGStore;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): RAGStore {
    if (!RAGStore.instance) {
      RAGStore.instance = new RAGStore();
    }
    return RAGStore.instance;
  }

  public async initialize() {
    if (this.isInitialized && vectorStore) {
      return;
    }

    console.log('Initializing RAG Store...');

    try {
      const docs = await this.loadDocuments();
      const splitDocs = await this.splitDocuments(docs);

      const embeddings = new OpenAIEmbeddings({
        modelName: 'sentence-transformers/all-minilm-l6-v2',
        openAIApiKey: process.env.OPENROUTER_API_KEY,
        configuration: {
          baseURL: 'https://openrouter.ai/api/v1',
        },
      });

      vectorStore = await MemoryVectorStore.fromDocuments(
        splitDocs,
        embeddings,
      );

      this.isInitialized = true;
      console.log('RAG Store initialized successfully.');
    } catch (error) {
      console.error('Failed to initialize RAG Store:', error);
      throw error;
    }
  }

  private async loadDocuments(): Promise<Document[]> {
    const documents: Document[] = [];
    const contentDirs = [
      path.join(process.cwd(), 'src', 'data', 'blog'),
      path.join(process.cwd(), 'src', 'data', 'projects'),
    ];

    for (const dir of contentDirs) {
      if (!fs.existsSync(dir)) continue;

      const files = fs.readdirSync(dir);
      for (const file of files) {
        if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue;

        const filePath = path.join(dir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        // Create a document for each file
        documents.push(
          new Document({
            pageContent: content,
            metadata: {
              source: filePath,
              type: dir.includes('blog') ? 'blog' : 'project',
              ...data,
            },
          }),
        );
      }
    }

    return documents;
  }

  private async splitDocuments(docs: Document[]): Promise<Document[]> {
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    return await splitter.splitDocuments(docs);
  }

  public async retrieve(query: string, k = 4): Promise<string> {
    if (!this.isInitialized || !vectorStore) {
      await this.initialize();
    }
 
    if (!vectorStore) {
      throw new Error('Vector store not initialized');
    }

    const results = await vectorStore.similaritySearch(query, k);

    return results
      .map((doc) => {
        const metadata = doc.metadata;
        const title = metadata.title ? `Title: ${metadata.title}\n` : '';
        const type = metadata.type ? `Type: ${metadata.type}\n` : '';
        return `---
${title}${type}Content:
${doc.pageContent}
---`;
      })
      .join('\n\n');
  }
}
