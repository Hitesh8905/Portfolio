import Project1Img from './Project.png';
import Project2Img from './Project1.png';
const Projects = [
  {
    title:'Video Chat Application',
    description: [
      'A video chat application that allows users to create and join video calls.',
      'Implemented features for users to share screens and send messages during calls.',
      'Used WebRTC for real-time communication and Socket.IO for signaling.',
      'The application is built with React, Node.js, and Socket.IO.',
      'clean and responsive UI design with Material-UI components.'
    ],
    image:Project2Img,
    github:'https://github.com/ihimanshusharma33/videoCall-forntend',
    live:'https://video-call-forntend.vercel.app/',
    tags:['React','Node.js','Socket.IO','WebRTC']

  },
  {
    title: 'Werev E-biks',
    description: [
      'Werev is an e-bike-selling startup',
      ' The web application is built with MERN technology.',
      'Nearly 2000–3000 users interact with the application monthly.',
      'Used the Nodemailer package to send emails to users'
    ],
    image: Project1Img,
    github: 'https://github.com/ihimanshusharma33/werev',
    live: 'https://werev.co.in/',
    tags: ['React', 'Node.js', 'Socket.IO', 'NodeMailer']
  },
  {
    title: 'E-commerce Platform',
    description: [
      ' An e-commerce platform for online shopping and order management.',
      'Supports user registration, product listing, and secure transactions.',
      'Implemented features for sellers to add, edit, and manage product details.',
      'Provided an intuitive interface with search and filter options for product discovery.',
      'Enabled order tracking and management for both customers and sellers.',

    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    github: 'https://github.com/ihimanshusharma33/e-commerce',
    live: 'https://immiscible-marble.000webhostapp.com/',
      tags: ['PHP', 'BootStarp', 'Javascript','HTML','CSS']
  }

];

export default Projects;