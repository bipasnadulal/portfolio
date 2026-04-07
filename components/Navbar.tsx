'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


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
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${scrolled
        ? 'bg-slate-950 backdrop-blur-md border-b border-black/20'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-center relative">


        <div className="hidden md:flex items-center gap-6 text-base">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition"
            >
              {item.name}
            </a>
          ))}

        </div>


        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 px-5 py-4 space-y-3 text-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}