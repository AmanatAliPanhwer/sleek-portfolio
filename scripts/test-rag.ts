import { RAGStore } from '../src/lib/rag-store';
import dotenv from 'dotenv';

dotenv.config();

async function testRAG() {
  console.log('Testing RAG Store...');
  const store = RAGStore.getInstance();

  try {
    await store.initialize();

    const queries = [
      'What projects have you built?',
      'Tell me about better frontend',
      'Do you know React?',
    ];

    for (const query of queries) {
      console.log(`\nQuery: "${query}"`);
      const result = await store.retrieve(query, 2);
      console.log('Result:', result);
    }
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testRAG();
