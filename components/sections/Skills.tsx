'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';

export default function Skills() {
  const categories = Object.entries(skillsData);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise across AI/ML, full-stack development, and design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 text-sm rounded-full bg-slate-800/50 border border-blue-500/20 text-gray-300 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-blue-500/20">
            <p className="text-gray-400 text-sm">
              <span className="text-blue-400 font-semibold">Always learning:</span> Exploring MLOps, LLMs, and advanced computer vision techniques
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
