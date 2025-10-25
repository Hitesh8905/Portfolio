import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Send, ArrowDown, MessageCircleCodeIcon } from 'lucide-react';
import Avtar from '../data/Avtar.webp';
import { useEffect,useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const words = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingEffect = setInterval(() => {
        if (!isDeleting) {
            if (charIndex < words[wordIndex].length) {
                setText((prevText) => prevText + words[wordIndex][charIndex]);
                setCharIndex((prevIndex) => prevIndex + 1);
                setShowCursor(false);
            } else {
                setIsDeleting(true);
            }
        } else {
            if (charIndex > 0) {
                setText((prevText) => prevText.slice(0, -1));
                setCharIndex((prevIndex) => prevIndex - 1);
            } else {
                setIsDeleting(false);
                // Move to the next word and reset character index
                setCharIndex(0);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        }
    }, 200); // Adjust the typing speed as needed

    return () => {
        clearInterval(typingEffect);
    };
}, [charIndex, wordIndex, isDeleting]);

useEffect(() => {
  const cursorBlink = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
  }, 200); // Adjust the blinking speed as needed

  return () => {
      clearInterval(cursorBlink);
  };
}, []);
  return (
    <section id="home" className="min-h-screen mx-8 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-12 px-4 py-20 ">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-xl md:text-5xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600">Hitesh</span>
            </h1>
            <h2 className="text-2xl font-bold md:text-3xl text-gray-600 mb-8"> 
            &nbsp;
              <span >{text}</span>
                        {showCursor && <span className="cursor">|</span>}
            </h2>
            <p className="text-gray-600 mb-8 text-sm md:text-lg">
              I am a B.Tech CSE student, is a skilled full-stack developer passionate about building efficient,
              user-focused digital solutions.
              If you have any projects that require my skills, don't hesitate to contact me.
            </p>
            <SocialLinks />
          </motion.div>
          <motion.div
            key={`frontend`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative ml-1 md:ml-16"
          >
            <div className="w-fit md:h-[500px] md:mt-4 rounded-2xl overflow-hidden ">
              <img
                src={Avtar}
                alt="Developer workspace"
                className="w-full h-full object-fit"
              />
            </div>
          </motion.div>
        </div>
        <div className='flex justify-center mt-6'>
          <ScrollButton />

        </div>
      </div>
    </section>
  );
};

const SocialLinks = () => (
  <div className="flex items-center space-x-6">

    <motion.a
      href="https://www.linkedin.com/in/hiteshh-yadav/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="text-gray-600 hover:text-gray-900"
    >
      <Linkedin size={24} />
    </motion.a>
    <motion.a
      href="https://github.com/Hitesh8905"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="text-gray-600 hover:text-gray-900"
    >
      <Github size={24} />
    </motion.a>

    
    <motion.a
      href="https://api.whatsapp.com/send?phone=918950520581"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="text-gray-600 hover:text-gray-900"
    >
      <MessageCircleCodeIcon size={24} />
    </motion.a>
    <motion.a
      href="https://www.instagram.com/hitesh_.1502/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="text-gray-600 hover:text-gray-900"
    >
      <Instagram size={24} />
    </motion.a>

    <motion.a
      href="mailto:hiteshyadav1502@gmail.com"
      whileHover={{ scale: 1.1 }}
      className="text-gray-600 hover:text-gray-900"
    >
      <Mail size={24} />
    </motion.a>
  </div>
);

const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });

  };

  return (
    <motion.button
      onClick={handleScroll}
      whileHover={{ scale: 1.1 }}
      className="mx-auto mt-4"
      animate={{
        y: [0, -5, 0]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >


      <ArrowDown size={28} />
    </motion.button>
  );
};


export default Home;