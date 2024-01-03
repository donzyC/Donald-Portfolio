import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    cc,
    danaair,
    shopify,
    gymbuddy,
    jobit,
    chatbot,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Co Lab",
      icon: cc,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Current",
      points: [
        "Developing and maintaining web applications using html, css and other related technologies.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality projects.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other aspiring developers.",
      ],
    },
    {
      title: "Aerospace Engineer",
      company_name: "Dana Air",
      icon: danaair,
      iconBg: "#383E56",
      date: "Apr 2017 - Jul 2017",
      points: [
        "Assisted in aircraft maintenance, identifying and solving issues to uphold operational integrity.",
        "Contributed to CAD-based design and analysis of aircraft components, ensuring adherence to safety and performance standards.",
        "Planned and executed tests for aircraft component performance, encompassing both laboratory and field testing",
        "Produced detailed technical documentation, ensuring compliance with aviation regulations and safety standards.",
      ],
    },
    /*{
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Donald proved me wrong.",
      name: "Emmanuella Nwachukwu",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Donald does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Donald optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "IBK Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Gym Buddy",
      description:
        "Web-based platform that allows users to search and connect with other gym enthusiats solving the problem of gym users feeling demotivated and lonely during workouts.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gymbuddy,
      source_code_link: "https://github.com/donzyC/GymBuddy-Project",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Chat Bot",
      description:
        "An application made to comprehend user queries and provide effective responses through the processing and analysis of input data.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: chatbot,
      source_code_link: "https://github.com/donzyC/chatbot-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };