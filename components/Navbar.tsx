'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-center relative">


        {/* <a href="#" className="text-lg font-semibold text-white">
          Bipasna Dulal
        </a> */}


        <div className="hidden md:flex items-center gap-6 text-sm">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition"
            >
              {item.name}
            </a>
          ))}


          {/* <a
            href="/BipasnaDulal.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </a> */}

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