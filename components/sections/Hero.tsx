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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              AI Engineer & Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Building Intelligent Systems
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              with AI & Data
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            AI-focused Computer Science student building scalable ML-powered
            applications. Specializing in deep learning, computer vision, and
            intelligent web systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Link href='#projects'>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/30 bg-transparent text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50"
            >
              Download Resume
            </Button>
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
                target={social.target} // ← add this
                rel={social.target === '_blank' ? 'noopener noreferrer' : undefined} // ← add this for security
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-slate-800/50 border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200"
              >
                <social.icon className="w-5 h-5 text-gray-400 hover:text-blue-400" />
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
              className="w-1.5 h-1.5 bg-blue-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
