'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Palette, Award } from 'lucide-react';
import { educationData } from '@/data/experience';

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Deep Learning',
      description: 'Hands-on projects using CNNs and classical ML models',
    },
    {
      icon: Code,
      title: 'Full-Stack Projects',
      description: 'Built AI-supported web applications using modern frameworks',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing clean, user-focused interfaces for real systems',
    },
    {
      icon: Award,
      title: 'Academic Work',
      description: 'Final-year and personal projects combining AI and software',
    },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-white">
            About Me
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Professional Summary
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I’m Bipasna Dulal, a final-year Computer Science undergraduate based in Kathmandu, Nepal.
              I’m currently exploring artificial intelligence through academic and personal projects,
              with a focus on building practical and understandable systems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My experience includes developing deep learning models for image classification,
              experimenting with machine learning techniques, and creating full-stack applications
              where AI supports real functionality. Alongside this, my UI/UX design internship has
              strengthened my understanding of usability, clarity, and user-centered design.
            </p>


            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-md border border-slate-800 bg-slate-900/40"
                >
                  <item.icon className="w-6 h-6 text-gray-300 mb-2" />
                  <h4 className="text-sm font-medium text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Education
            </h3>

            <div className="relative border-l border-slate-700 pl-6 space-y-8">

              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[9px] top-2 w-2 h-2 rounded-full bg-slate-400" />

                  <div className="p-4 rounded-md border border-slate-800 bg-slate-900/40">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-base font-medium text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs text-gray-400">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-sm text-gray-300">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                      {edu.location}
                    </p>


                  </div>
                </motion.div>
              ))}
            </div>

            {/* <h3 className="text-2xl font-semibold text-white">
              Experience
            </h3>
          
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -left-[9px] top-2 w-2 h-2 rounded-full bg-slate-400" />

              <div className="p-4 rounded-md border border-slate-800 bg-slate-900/40">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-base font-medium text-white">
                    UI/UX Design Intern
                  </h4>
                  <span className="text-xs text-gray-400">
                    2025
                  </span>
                </div>

                <p className="text-sm text-gray-300">
                  Fusemachines
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  Kathmandu, Nepal
                </p>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Worked on designing workflows and interfaces for an internal HR system,
                  focusing on usability, clarity, and consistent user experience.
                </p>
              </div>
            </motion.div> */}

          </motion.div>
        </div>
      </div>
    </section>
  );
}