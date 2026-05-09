import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Python from '@/components/technologies/Python';
import Supabase from '@/components/technologies/Supabase';
import Html from '@/components/technologies/Html';
import CSS from '@/components/technologies/CSS';
import JavaScript from '@/components/technologies/JavaScript';
import Flask from '@/components/technologies/Flask';
import Streamlit from '@/components/technologies/Streamlit';
import { Project } from '@/types/project';
import OpenCV from '@/components/technologies/OpenCV';

export const projects: Project[] = [
  {
    title: 'Sindlish',
    description: 'A high-level programming lang. designed for the Sindhi-speaking communities.',
    image: '/project/sindlish.png',
    link: 'https://sindlish.vercel.app/',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
    ],
    github: 'https://github.com/AmanatAliPanhwer/Sindlish',
    live: 'https://sindlish.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/sindlish',
    isWorking: true,
  },
  {
    title: 'Bhariyo',
    description: "A modern digital implementation of the ancient Sindhi board game Bhariyo.",
    image: '/project/bhariyo.png',
    link: 'https://github.com/AmanatAliPanhwer/Bhariyo',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'Supabase', icon: <Supabase key="supabase" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
    ],
    github: 'https://github.com/AmanatAliPanhwer/Bhariyo',
    live: 'https://bhariyo.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/bhariyo',
    isWorking: true,
  },
  {
    title: 'ATLAS',
    description: 'A multimodal desktop AI assistant, built with Electron and Python.',
    image: '/project/atlas.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
    ],
    github: 'https://github.com/AmanatAliPanhwer/ATLAS',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/atlas',
    isWorking: true,
  },
  {
    title: 'Smart Attendance System',
    description: 'A web-based smart attendance system using face recognition.',
    image: '/project/smart_face.png',
    link: '',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Flask', icon: <Flask key="flask" /> },
      { name: 'OpenCV', icon: <OpenCV key="opencv" /> },
      {name: "SQLite", icon: <PostgreSQL key="sqlite" />},
    ],
    github: 'https://github.com/AmanatAliPanhwer/SmartAttendanceSystem',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/smart-face',
    isWorking: true,
  },
  {
    title: 'MyBlog',
    description:
      'A personal blogging platform to share my thoughts and experiences.',
    image: '/project/blog.png',
    link: 'https://amanatalipanhwer.vercel.app/',
    technologies: [
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'JavaScript', icon: <JavaScript key="JavaSctipt" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Supabase', icon: <Supabase key="supabase" /> },
      { name: 'Flask', icon: <Flask key="flask" /> },
    ],
    github: 'https://github.com/Alph702/Blog',
    live: 'https://amanatalipanhwer.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/MyBlog',
    isWorking: true,
  },
  {
    title: 'CallBell',
    description: 'A doorbell but in computer.',
    image: '/project/call_bell.png',
    link: 'https://callbell.pythonanywhere.com/',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Flask', icon: <Flask key="flask" /> },
    ],
    github: 'https://github.com/AmanatAliPanhwer/CallBell',
    live: 'https://callbell.pythonanywhere.com/',
    details: true,
    projectDetailsPageSlug: '/projects/call-bell',
    isWorking: true,
  },
  {
    title: 'Passport Image Creator',
    description: 'A website that converts images into passport-style photos.',
    image: '/project/passport_image_creater.png',
    link: 'https://passportimagecreator.streamlit.app/',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Streamlit', icon: <Streamlit key="streamlit" /> },
    ],
    github: 'https://github.com/AmanatAliPanhwer/PassportImageCreator',
    live: 'https://passportimagecreator.streamlit.app/',
    details: true,
    projectDetailsPageSlug: '/projects/passport-image-creator',
    isWorking: true,
  },
  {
    title: 'Md2Anki',
    description: 'A website that converts Markdown notes into Anki decks.',
    image: '/project/md_2_anki.png',
    link: '',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Flask', icon: <Flask key="flask" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/AmanatAliPanhwer/Md2anki',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/md2anki',
    isWorking: true,
  },
  {
    title: 'StudyTube',
    description: 'A website that allows only educational videos directly from YouTube.',
    image: '/project/study_tube.png',
    link: '',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Flask', icon: <Flask key="flask" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/AmanatAliPanhwer/StudyTube',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/study-tube',
    isWorking: true,
  },
];
