export const Bio = {
  name: 'Anurag Rathour',
  roles: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Coder',],
  description:
    'Results-driven Software Engineer with 2+ years of experience building and scaling high-performance web applications at production scale. Proven track record of owning critical modules end-to-end, leading cross-functional teams, and delivering measurable impact — from frontend architecture and AI integration to full-stack development. Experienced in performance optimization, cloud-based API development, and mentoring engineers from onboarding to production-ready code.',
  github: 'https://github.com/anuragrathour132002',
  resume: 'https://drive.google.com/file/d/1X_p08Ccpko3JhzMv85X4pE0Ou0a-jLH1/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/anurag-rathour07/',
  twitter: 'https://twitter.com/AnuragR46498191',
  insta: 'https://www.instagram.com/anuragrathour.in?igsh=MWZ3NHV6NG8zbDRkcg%3D%3D',
};

export const skills = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'SCSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React Js' },
      { name: 'Next Js' },
      { name: 'Tailwind CSS' },
      { name: 'Material UI' },
      { name: 'React Native' },
      { name: 'Redux' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node Js' },
      { name: 'Express Js' },
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Prisma ORM' },
      { name: 'AWS' },
      { name: 'Microsoft Azure' },
      { name: 'Firebase' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Netlify' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'Docker' },
      { name: 'Jira' },
      { name: 'Agile Methodology' },
    ],
  },
];

export const experiences = [

  {
    id: 2,
    img: 'https://i.ibb.co/sp8MZL41/aertripsmall.jpg',
    role: 'Software Engineer',
    company: 'Aertrip India Limited',
    date: 'Aug. 2025 – Present',
    desc: 'Optimized the Flight Search module with Redux, code splitting, and lazy loading, enabling stable rendering of 500+ results simultaneously with minimal latency and improved search reliability, load times, and user experience at scale. Led a team of four engineers to migrate and own Profile V2 end-to-end, transforming legacy HTML, CSS, and JavaScript into a modern React application with optimized Webpack chunking and improved build performance. Leveraged developer tools and Lighthouse audits to analyze and optimize module performance, improving Core Web Vitals and reducing load times. Integrated custom event-based monitoring with Sentry and Zipy in production for proactive issue detection and fewer post-release bugs. Architected and led Aerin AI, a GPT-4 powered agent built in Node.js handling end-to-end user flows from flight search to booking and hotel reservations conversationally across the site. Onboarded and mentored new engineers through KT sessions, code reviews, and guidance on first production contributions to maintain code quality standards.',
    skills: ['React', 'Redux', 'Node.js', 'Webpack', 'JavaScript', 'TypeScript', 'Sentry'],
    doc: '',
  },

  {
    id: 0,
    img: 'https://i.ibb.co/Xs7JR8N/vdoit.png',
    role: 'Information Technology Associate',
    company: 'VDOIT Technologies Ltd.',
    date: 'Sept. 2024 - July. 2025',
    desc: 'Engaged directly with US-based clients and cross-functional teams, leading discussions and delivering high-impact features that align with business objectives and enhance user experience. Implemented Next.js with SSR, on-demand ISR (Incremental Static Regeneration), and related optimizations, reducing deployment costs by 80%, serverless function executions by 98%, and bandwidth usage significantly. Integrated complex features including speech-to-text (Microsoft Azure), Stripe payments, and Trolley Payouts, enhancing accessibility, speech recognition, and transaction security. Developed scalable RESTful APIs using Node.js, Express, and Prisma ORM, enabling efficient backend communication and robust data handling with PostgreSQL. Led a structured code review process, resolving an average of 5 critical issues per sprint, resulting in a 70% reduction in post-release bugs and fostering a culture of code quality.',
    skills: ['TypeScript', 'NextJS', 'AWS', 'Serverless Architecture', 'Microsoft Azure'],
    doc: '',
  },

  {
    id: 1,
    img: 'https://i.ibb.co/Xs7JR8N/vdoit.png',
    role: 'Frontend Developer Intern',
    company: 'VDOIT Technologies Ltd.',
    date: 'Feb. 2024 - Aug. 2024',
    desc: 'Designed and developed responsive UIs with ReactJS, NextJS, Tailwind CSS, and Material UI, improving usability and boosting user engagement. Developed and utilized custom hooks (like useMutation, useQuery) for efficient API integration and dynamic state management, data fetching and updates, and improving data synchronization.',
    skills: ['JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'Tailwind CSS', 'Material UI'],
    doc: '',
  },

];


export const projects = [

  {
    id: 7,
    title: 'Incantio',
    date: 'Aug 2024 - Present',
    description:
      'Incantio is a full-stack music licensing marketplace that connects independent musicians with filmmakers, editors, and creators—helping artists surface sync-ready tracks, set pricing, and get paid directly. Built with Next.js on the frontend for fast, responsive experiences at scale. Integrated a serverless backend on AWS with SST, AWS Cognito for secure authentication, and APIs tuned for performance (including roughly 35% faster API responses in key flows). Implemented Stripe and Trolley Payouts for automated payouts and trustworthy artist payments. The platform emphasizes transparent licensing, global discovery, and a polished creator workflow from search through checkout.',
    image: 'https://i.ibb.co/27bZmp6m/Whats-App-Image-2026-04-18-at-10-55-07.jpg',
    tags: [
      'Next.js',
      'SST',
      'AWS Cognito',
      'Serverless',
      'Stripe',
      'Trolley Payouts',
      'AWS',
    ],
    category: 'Full Stack',
    github: '',
    webapp: 'https://www.incantio.com/',
  },

  {
    id: 8,
    title: 'Twin Protocol',
    date: 'Feb 2024 - Aug 2024',
    description:
      'Twin Protocol is a digital twin product that lets creators build AI-powered twins—personal data can be anchored with blockchain-backed design for security and ownership. This prototype combined LLMs with rich user data (voice, video, and documents) to personalize AI avatars and interactions. Implemented live voice streaming and AI-driven avatars for real-time, engaging virtual experiences. The frontend was built with React, TypeScript, Tailwind CSS, MUI, shadcn/ui, and Redux for scalable state and a polished UI.',
    image: 'https://i.ibb.co/CKRtQpXB/Whats-App-Image-2026-04-18-at-10-55-59.jpg',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'MUI',
      'shadcn/ui',
      'Redux',
      'LLM',
      'Blockchain',
    ],
    category: 'Full Stack',
    github: '',
    webapp: 'https://twinprotocol.com/',
  },

  {
    id: 0,
    title: 'NPM package unwashed words',
    date: 'Sept 2024 - Present',
    description: "This package is a powerful tool that filters out toxic words across multiple languages, including English, Spanish, French, and Arabic. Whether building a global app or ensuring a clean and safe online environment, unwashed words have covered you.",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAB41BMVEX///////3WAADYAAD8//8AAAD//v/AAADUAQH///zCAADMAADPAADk/OQsqjbz///94+D13ODvzdD3///baWgbbCTwx8crtDZub2/dAADe3d7VYmLwx8bv///FMzLhlpf/7/TUe3nem5rxwb//9fHj//7epKfv7+8PRRWtra3CwsL13d7SY2Pj//zvurl5dniV2tUnljDA6euKiorAEBfe+P8AZsGw7dgAw20AsJQAn5Nl2qR90MgltzEusjg/sKs1rUFQtcLz/fMAjJsgZia06+gAnqUAtX8RRBxapMbDS02hoaFbW1s7kMuo3eJKSkoAiaY5OTmSxeAaGhqH3L7P+euL48or0XxDw40Aw3duya9l0qa58NM81JMA2HFj5KAAyGcAmnhlv60Av39NzqSZ6NWe48VhwqOsAACL2sE85ZsAp5Vdyp1W2qJqu7lcvqgArWfWSUvB6sCByo9Lr0zH5808yLcSs4e1/Pjc7N+LwI2Y6eJgo2eRwJs/l0JftGxxv3Sg0aV/vX6C09WszLbQ6s4/h0JWqF0YlySm3agboLkAjJgAkY253ediu8kMng2Q2Im1Ix3S988AgKZfvmQaLhcAHwAAdrYYdx6AtNEAdMJSotqEsttQnNhRp8PhioQAea6rudhsAAAQlklEQVR4nO2djX/TxhnHT/ZZsfJi0WrFEBAUhnBx62KctlkCcRwHJ7CEhJeal6ZjjKRQljUMZsigBRIg471shY6u3Tr+1D3PnWzL1pvtKMHb7vchsnR3kk/fPPfccy9pCRESEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEnIQJRLBf0JuklOfFolEiUw0TZaIkv/08zddpfZV8VcniSJpGqVUpURJndr/pmvUXlJ1ap5JnJV6+rSqXDjTTyS1WHyjVWs7fbaYMs8kKXUaCOkzM6ry+W/6CUmd2U+o583/Z0pf1M0zSVE0QEM1PEIbJKmzvxWsuCRKZculTLVif0VFTaZFwaostb8Ax0K/Wr7+dHb2zJlfgc6dO3d2RpVT5/5PWEm+4ZHxu/NwPD9gEG5eJ2fnvmA6efLkV2dPzajqhc/bjJXcSH3qXpyB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",
    tags: [
      'JavaScript', 'NPM Package', 'Toxic Words'
    ],
    category: 'Frontend',
    github: 'https://github.com/anuragrathour132002/unwashed-words',
    webapp: 'https://www.npmjs.com/package/unwashed-words',
  },

  {
    id: 1,
    title: 'Articles-Summarize-with-OpenAI-GPT-4',
    date: 'Jul 2023 - Aug 2023',
    description:
      'This is a web application that leverages the power of artificial intelligence to simplify the process of summarizing lengthy articles. The goal of enhancing reading efficiency and comprehension, this project provides users with concise and coherent summaries of complex texts',

    image: 'https://i.ibb.co/G36GQBC/article-suu.png',
    tags: [
      'React Js',
      'Redux',
      'Open-AI',
      'API'
    ],
    category: 'Frontend',
    github: 'https://github.com/anuragrathour132002/Articles-Summarize-with-OpenAI-GPT-4',
    webapp: 'https://summarizearticleswithopenaigpt.netlify.app/',
  },
  {
    id: 2,
    title: 'E-commerce website',
    date: 'Nov 2023 - Jan 2024',
    description: 'A dynamic full-stack e-commerce platform designed to streamline online shopping experiences for users. Users can register, log in securely through JWT authentication, and enjoy a smooth shopping experience with an intuitive cart system. Admin functionality includes effortless product management and seamless integration of secure card payment processing. Secure card payment processing has been integrated, guaranteeing a safe and reliable transaction experience for users. For state management, used Redux that stores dynamic data updates of various components',
    image: 'https://i.ibb.co/MMxFLg4/e-commerce.png',
    tags: ['React Js', 'MongoDb', 'Node Js', 'Express Js', 'Redux', 'Redux Dev-Tool', 'JWT Auth', 'REST Ful API'],
    category: 'Full Stack',
    github: 'https://github.com/anuragrathour132002/E-commerce-',
    webapp: '',
  },
  {
    id: 3,
    title: 'Real-Time Chat Application',
    date: 'June 2023 - Aug 2023',
    description:
      'A platform where users can send and receive messages in real- time Users should be able to create chat rooms, join existing ones, and exchange messages with other users in the same room. The backend services will be hosted on Firebase, and users will authenticate with their email accounts',
    image: 'https://i.ibb.co/71tdN3G/chat-app.png',
    tags: ['React', 'Node.js', 'Socket.io', 'Firebase-Auth', 'Firebase-database', 'Email-Auth'],
    category: 'Full Stack',
    github: 'https://github.com/anuragrathour132002/Chat-app-',
    webapp: 'https://sastachatbyanurag.netlify.app/',
  },
  // {
  //   id: 4,
  //   title: 'Todo App',
  //   date: 'Jun 2023 - July 2023',
  //   description:
  //     'Todo is a user-friendly single-page application developed to streamline task management using the React Js. By seamlessly integrating this technology, I designed a cohesive platform that allows users to efficiently organize, update, and monitor their tasks.',
  //   image: 'https://i.ibb.co/WKwRnb4/todo.png',
  //   tags: ['React Js', 'Node.js', 'Express.js', 'MongoDB', 'Redux'],
  //   category: 'Full Stack',
  //   github: 'https://github.com/anuragrathour132002/Todo-list',
  //   webapp: '',
  // },
  // {
  //   id: 5,
  //   title: 'Portfolio Website',
  //   date: 'Apr 2023 - May 2023',
  //   description:
  //     'Designed and developed a fully responsive web application that serves as a dynamic representation of my professional experience and skills. Incorporated a user-friendly contact form utilizing the getForm API to facilitate seamless communication. The application is built on the foundation of React.js, enriched with Styled Components for aesthetics, and integrated with the getForm library for effective form management. The final product is deployed and hosted on Netlify, ensuring accessibility and a smooth user experience. This portfolio website demonstrates my ability to create engaging digital platforms that effectively communicate my expertise and engage with visitors.',
  //   image: 'https://i.ibb.co/wJx3WNZ/portfolio.png',
  //   tags: [ 'React','JavaScript','Styled Components','getFrom Library','Netlify'],
  //   category: 'Frontend',
  //   github: 'https://github.com/anuragrathour132002/Portfolio-',
  //   webapp: '',
  // },
  // {
  //   id: 6,
  //   title: 'News Mint',
  //   date: 'Apr 2023 - May 2023',
  //   description: 'News Mint is a web application that provides users with the latest news from around the world. The app utilizes the NewsAPI to gather news articles. key features of News Mint are its advanced filtering options and infinite scrolling functionality, which enables users to seamlessly browse through a virtually endless stream of news articles.',
  //   image: 'https://i.ibb.co/rt74vy5/news-mint.png',
  //   tags: ['React', 'News API', 'JavaScript'],
  //   category: 'Frontend',
  //   github: 'https://github.com/anuragrathour132002/News-Mint',
  //   webapp: 'https://news-mint.netlify.app/',
  // },
];


