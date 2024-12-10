import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillData from '../data/skills';


const Skills = ({ }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels in various technologies
            that I've worked with throughout my career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {SkillData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg  px-auto flex justify-center flex-col"
            >
             
                <div className='mx-auto'>
                  <img src={skill.image}
                  alt={skill.name}
                  className="w-12 h-12 ml-2  rounded-lg "
                  />
                 
                </div>
                <div className="flex justify-between mb-2 ">
                  <span className="font-medium mx-auto">{skill.name}</span>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;