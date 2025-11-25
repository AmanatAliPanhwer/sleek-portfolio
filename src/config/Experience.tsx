import Streamlit from '@/components/technologies/Streamlit';
import Python from '@/components/technologies/Python';
import Playwright from '@/components/technologies/Playwright';
import Selenium from '@/components/technologies/Selenium';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Shah Abdul Latif Higher Secondary School',
    position: 'Freelance',
    location: 'Mirpur Khas, Sindh, Pakistan (On-Site)',
    image: '/company/SALHS.png',
    description: [
      'Built an automation system for EMIS using Streamlit and Playwright to eliminate repetitive manual form filling.',
      'Developed a reliable browser-controlled workflow that reads structured Excel files and auto-populates EMIS web forms.',
      'Created a clean UI in Streamlit for uploading templates, validating data, and executing automation seamlessly.',
      'Ensured stability and accuracy by integrating Playwright Chromium automation with robust error-handling.',
      'Improved workflow efficiency for school and administrative data teams by transforming slow manual processes into one-click automation.',
    ],
    startDate: 'February 2025',
    endDate: 'February 2025',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'Streamlit',
        href: 'https://streamlit.io/',
        icon: <Streamlit />,
      },
      {
        name: 'Playwright',
        href: 'https://playwright.dev/',
        icon: <Playwright />,
      },
      {
        name: 'Selenium',
        href: 'https://selenium.dev/',
        icon: <Selenium />,
      },
    ],
    website: 'https://salhighschool.vercel.app/',
  }
];
