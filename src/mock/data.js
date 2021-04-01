import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'John Wang',
  subtitle: `I'm an Intermediate Developer.`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Tango Land',
    info: `Tango Land is a simple flashcard web application that test users on common Japanese expressions. This app lets users select which words they would like to study and how they want to study them. Users have the option to answer with the expression, kana, or romaji. It also shows additional information like pronunciation and definition as well as the score so that users can keep track of their progress.`,
    info2: '',
    url: 'https://tangoland.herokuapp.com',
    repo: 'https://github.com/jwang0110/tangoland', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'ZTM Gatsby + Netlify CMS Starter',
    info: `ZTM Gatsby + Netlify CMS Starter is a new up to date starter kit for a Gatsby.js blog. It connects to Netlify CMS to make it easier for users to create blog posts. On top of that, it has been built with Tailwind.css, a modern CSS framework that makes it easy for users to theme and customize their project. With the help of this starter kit, anyone can build their own personalized blog.`,
    info2: '',
    url: '',
    repo: 'https://github.com/jwang0110/ztm-gatsby-netlify-cms-blog-starter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Fabflix',
    info: `Fabflix is a fullstack web application that displays a list of movies from The Movie Database API. It offers features like searching and browsing to help users find movies they would be interested in. Users have the option of creating an account and bookmarking movies for future references.`,
    info2: '',
    url: 'https://fabflix.herokuapp.com',
    repo: 'https://github.com/jwang0110/fabflix', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'johnw7@uci.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jwang0110',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
