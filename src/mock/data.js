import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'John Wang | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My Portfoliio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'John Wang',
  subtitle: `I'm a Full Stack Developer.`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi. I'm John, a full stack developer based in the Bay Area. I graduated from the University of California, Irvine in Summer of 2020 and have been working hard on sharpening my coding skills. When it comes to coding, I enjoy manipulating data from APIs and building clean, responsive web applications.`,
  paragraphTwo: `In my free time, I like working on myself and pushing myself to being the best that I can be. This includes working out, learning Japanese, and working on personal projects. I enjoy learning things from the ground up and watching myself improve along the way.`,
  resume: 'https://drive.google.com/file/d/13mHY26mUABi8iMMr4dOpqyuTqwQxLzzf/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fabflix.png',
    title: 'Fabflix',
    info: `Fabflix is a fullstack web application that displays a list of movies from The Movie Database API. It offers features like searching and browsing to help users find movies they would be interested in. Users have the option of creating an account and bookmarking movies for future references.`,
    info2: '',
    url: 'https://fabflix.herokuapp.com',
    repo: 'https://github.com/jwang4059/fabflix', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tangoland.png',
    title: 'Tango Land',
    info: `Tango Land is a simple flashcard web application that test users on common Japanese expressions. This app lets users select which words they would like to study and how they want to study them. Users have the option to answer with the expression, kana, or romaji. It also shows additional information like pronunciation and definition as well as the score so that users can keep track of their progress.`,
    info2: '',
    url: 'https://tangoland.herokuapp.com',
    repo: 'https://github.com/jwang4059/tangoland', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gatsbyblog.png',
    title: 'ZTM Gatsby + Netlify CMS Starter',
    info: `ZTM Gatsby + Netlify CMS Starter is a new up to date starter kit for a Gatsby.js blog. It connects to Netlify CMS to make it easier for users to create blog posts. On top of that, it has been built with Tailwind.css, a modern CSS framework that makes it easy for users to theme and customize their project. With the help of this starter kit, anyone can build their own personalized blog.`,
    info2: '',
    url: '',
    repo: 'https://github.com/jwang4059/ztm-gatsby-netlify-cms-blog-starter', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jwang4059@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jwang4059/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jwang4059',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
