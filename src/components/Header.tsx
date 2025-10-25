import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            Hitesh
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center items-center space-x-8">
            <NavLinks />
            {/* <SocialLinks />  will add links furhter */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className=" flex lg:hidden  justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-4">
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = () => (
  <>
  {['Home', 'Education', 'Work Experience', 'Skills', 'Projects', 'Contact'].map((item) => {
    const href =`#${item.replace('Work ', '').toLowerCase()}` ;
    return (
      <motion.a
        key={item}
        href={href}
        whileHover={{ scale: 1.1 }}
        className="text-gray-600 hover:text-gray-900"
      >
        {item}
      </motion.a>
    );
  })}
</>
);

export default Header;