/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
// Technology Components
import Python from '@/components/technologies/Python';
import Rust from '@/components/technologies/Rust';
import C from '@/components/technologies/C';
import Cpp from '@/components/technologies/Cpp';
import JavaScript from '@/components/technologies/JavaScript';
import Sindlish from '@/components/technologies/Sindlish';

// Component mapping for skills
export const skillComponents = {
  Python: Python,
  Rust: Rust,
  C: C,
  Cpp: Cpp,
  JavaScript: JavaScript,
  Sindlish: Sindlish,
};

export const heroConfig = {
  // Personal Information
  name: 'Amanat Ali',
  title: 'Python & Systems Developer.',
  avatar: '/assets/logo.jpg',

  // Skills Configuration
  skills: [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'Rust',
      href: 'https://www.rust-lang.org/',
      component: 'Rust',
    },
    {
      name: 'C',
      href: 'https://en.wikipedia.org/wiki/C_(programming_language)',
      component: 'C',
    },
    {
      name: 'C++',
      href: 'https://isocpp.org/',
      component: 'Cpp',
    },
    {
      name: 'Sindlish',
      href: 'https://sindlish.vercel.app/',
      component: 'Sindlish',
    }
  ],

  // Description Configuration
  description: {
    template:
      'I engineer intelligent systems using {skills:0}, {skills:1}, {skills:2}, and {skills:3}\nMy work blends automation, machine learning, and high-performance system design building tools that think fast, react precisely, and scale with real-world complexity. I am also creator of {skills:4}, a programming language for Sindhi speakers.',
    },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/AmanatAliPanhwer',
    icon: <Github />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amanatalipanhwer',
    icon: <LinkedIn />,
  },
  {
    name: 'Email',
    href: 'mailto:amanatapanhwer@gmail.com',
    icon: <Mail />,
  },
  {
    name: 'X',
    href: 'https://x.com/alph702',
    icon: <X />,
  },
];
