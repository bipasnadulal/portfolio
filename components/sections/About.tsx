'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Palette, Award } from 'lucide-react';
import { educationData } from '@/data/experience';


export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'CNN-based image classification with 99.5% accuracy',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'ML model integration in production systems',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design for AI applications',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'AI-powered handwritten recognition systems',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI Engineer focused on building intelligent systems that solve real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm Bipasna Dulal, an AI-focused Computer Science student from Kathmandu, Nepal,
              specializing in deep learning and intelligent systems. My work focuses on bridging
              the gap between cutting-edge machine learning research and practical,
              scalable applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With expertise in CNN-based image classification, natural language processing,
              and full-stack development, I build AI-powered solutions that integrate seamlessly
              into real-world systems. My projects combine technical depth with user-centered design,
              ensuring both accuracy and usability.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-slate-900/50 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-blue-400 mb-2" />
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education & Timeline</h3>

            <div className="relative border-l-2 border-blue-500/30 pl-8 space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950" />

                  <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <span className="text-sm text-blue-400 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mb-2">{edu.location}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950" />

                <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">UI/UX Design Intern</h4>
                    <span className="text-sm text-purple-400 font-medium">2025</span>
                  </div>
                  <p className="text-blue-400 font-medium mb-2">Fusemachines</p>
                  <p className="text-sm text-gray-500 mb-2">Kathmandu, Nepal</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Designing AI-powered HR systems and workflow interfaces, focusing on
                    user experience and system efficiency.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
