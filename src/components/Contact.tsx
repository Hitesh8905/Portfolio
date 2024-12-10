import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, MessageCircleCode } from 'lucide-react';
import { MouseEvent, useEffect, useState } from 'react';
interface FormData {
  message: string,
  name: string,
  email: string
}
const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState('Message is sending');
  const [isSending, setIsSending] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showsuceess, setShowSuccess] = useState(false);
  const [Messagebg, setMessagebg] = useState('blue');

  const sendMessage = async (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const formData: FormData = {
      message: message,
      name: name,
      email: email
    }
    setIsSending(true);  // Start sending the message

    try {
      // Simulating the message sending process
      const response = await fetch('https://messaging-service-qbfy.onrender.com/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        setShowError(true);
        setIsSending(false);
        setTimeout(() => {
          setShowError(false);
        }, 2000)

      }
      if (response.ok) {
        setShowSuccess(true);
        setIsSending(false);
        setTimeout(() => {
          setShowSuccess(false);
        }, 2000)
        


    } 

  }
  catch (error) {
    console.log('error message ', error)
  }
  // Stop after a few seconds

  // try {
  //   const response = await fetch('https://xyx-d8d1.onrender.com/mail', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   if (!response.ok) {
  //     throw new Error('Error sending email');

  //   }
  //   console.log('response ', response)
  //   if (response.ok) { 
  //     setMessageStatus('Message sent successfully');
  //     setMessagebg('green');
  //     setTimeout(()=>{
  //       setIsSending(false);
  //     },2000)
  //    }
  // } 
  // catch (error) {
  //   console.log('error message ', error)
  // }

}

return (
  <section id="contact" className="py-20 bg-white">
    {isSending &&
      <motion.div className='fixed top-20 w-[100vw] left-20  text-white'
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 20, x: 0 }}
        transition={{ duration: 0.5 }}>
        <p className={`py-4 px-8  w-[400px] mx-auto  rounded-md bg-blue-500`}>
          {messageStatus}
        </p>
      </motion.div>
    }
     {showError &&
      <motion.div className='fixed top-20 w-[100vw] left-20  text-white'
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 20, x: 0 }}
        transition={{ duration: 0.5 }}>
        <p className={`py-4 px-8  w-[400px] mx-auto  rounded-md bg-red-500`}>
          Can't send message
        </p>
      </motion.div>
    }
     {showsuceess &&
      <motion.div className='fixed top-20 w-[100vw] left-20  text-white'
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 20, x: 0 }}
        transition={{ duration: 0.5 }}>
        <p className={`py-4 px-8  w-[400px] mx-auto  rounded-md bg-green-500`}>
          Message sent successfully
        </p>
      </motion.div>
    }
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" />
              <span>hs991009@mail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" />
              <span>+91 70827-11224</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" />
              <span>Gurugram, Haryna, India</span>
            </div>
            <div className="flex items-center space-x-6 py-6">
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                href='https://www.linkedin.com/in/ihimanshusharma33/'
              >
                <Linkedin className='text-blue-600 hover:text-blue-400' />
              </motion.a>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.github.com/ihimanshusharma33'
                whileHover={{ scale: 1.1 }}
              >
                <Github className='text-blue-600 hover:text-blue-400' />

              </motion.a>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.instagram.com/himansh.sharma.98'
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className='text-blue-600 hover:text-blue-400' />
              </motion.a>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href='https://t.me/ihimanshusharma33'
                whileHover={{ scale: 1.1 }}

              >
                <Send className='text-blue-600 hover:text-blue-400' />
              </motion.a>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href='https://wa.me/917082711224'
                whileHover={{ scale: 1.1 }}
              >
                <MessageCircleCode className='text-blue-600 hover:text-blue-400' />
              </motion.a>
              <motion.a
                target="_blank"
                href='mailto:hs991009@gmail.com'
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className='text-blue-600 hover:text-blue-400' />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={(e) => sendMessage(e)}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  </section>
);
};

export default Contact;