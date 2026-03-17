'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';


export default function Hero() {
  const text = "Hey, It's me";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const restart = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000)

      return () => clearTimeout(restart);
    }
  }, [index]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950" />

      <div className="flex flex-col-reverse md:flex-row items-center gap-10 text-center md:text-left">
        <div>
          <Image
            src="me.JPG"
            alt="Profile Picture"
            width={300}
            height={400}

          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 leading-tight text-white text-left"
          >
            {displayedText}
            <span className="ml-1">{showCursor ? "|" : " "}</span>
            <br />
            Bipasna Dulal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed text-left"
          >
            Computer Science undergraduate interested in machine learning,
            deep learning, and user-centered design. I build practical AI-powered
            applications while continuously learning and experimenting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="/BipasnaDulal.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-black hover:bg-gray-200 transition-colors duration-200 px-6"
              >
                Download Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/bipasnadulal', target: '_blank', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/bipasna-dulal-0110bd/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto: bipasna.dulal75@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.target}
                rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-slate-800/40 border border-slate-700 hover:bg-slate-700/40 hover:border-slate-600 transition-all duration-200"
              >
                <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-blue-500/30 flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


