'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-lg border-b border-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Bipasna Dulal
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-blue-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-blue-500/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-full border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
