import chatFlix from '../assets/img/projects/chatflix.png';
import wartung from '../assets/img/projects/wartung.png';
import itQuiz from '../assets/img/projects/it-quiz.png';
import maske from '../assets/img/projects/maske.png';
import antiReels from '../assets/img/projects/antireels.png';
// import placeholderPc from '../assets/img/placeholder-pc.png';
// import placeholderPhone from '../assets/img/placehoder-phone.png';

const projects = [
  {
    title: 'E-COMMERCE APPLICATION',
    name: 'Maske.rs',
    desktopImgUrl: maske,
    description:
      'Online store for selling mobile devices equipment, especially for covers.',
    url: 'https://maske.rs/',
    techs: ['react', 'next', 'tailwind', 'graphql'],
  },
  {
    title: 'CONTENT MANAGEMENT SYSTEM',
    name: 'ASM Wartung',
    desktopImgUrl: wartung,
    description:
      'Wartung is a comprehensive CMS tailored for businesses, offering seamless content creation, editing, and management capabilities. ',
    url: 'https://app.asm-wartung.de/',
    techs: ['react', 'tailwind'],
  },
  {
    title: 'CHAT APPLICATION',
    name: 'ChatFlix',
    desktopImgUrl: chatFlix,
    description:
      'ChatFilx is an IT-focused chat application that fosters collaborative discussions and knowledge sharing among professionals in a user-friendly environment.',
    url: 'https://mxmxmarexmxm.github.io/ChatFlix/',
    github: 'https://github.com/mxmxmarexmxm/ChatFlix',
    techs: ['react', 'css', 'firebase'],
  },
  {
    title: 'SHORT CONTENT BLOCKER',
    name: 'AntiReels',
    desktopImgUrl: antiReels,
    description:
      'AntiReels is a simple extension for Firefox and Chrome that helps you stay focused and productive by blocking short content from Facebook, Instagram, TikTok and YouTube. ',
    github: 'https://github.com/mxmxmarexmxm/AntiReels',
    techs: ['html', 'css', 'js'],
  },
  {
    title: 'QUIZ APPLICATION',
    name: 'IT Quiz',
    desktopImgUrl: itQuiz,
    description:
      'IT Quiz is a simple quiz application. It provides a collection of IT-related questions and allows users to test their knowledge in various IT domains.',
    url: 'https://mxmxmarexmxm.github.io/it-quiz/',
    github: 'https://github.com/mxmxmarexmxm/it-quiz',
    techs: ['react', 'css'],
  },
];

export default projects;
