'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              AI Engineer & Full-Stack Developer
            </span>
          </motion.div> */}



          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 leading-tight text-white"
          >
            Bipasna Dulal
            <br />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Computer Science undergraduate interested in machine learning,
            deep learning, and user-centered design. I build practical AI-powered
            applications while continuously learning and experimenting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Link href="#projects">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 transition-colors duration-200 px-6"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <a
              href="/BipasnaDulal.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
              >
                Download Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 justify-center"
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


