'use client';

import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experienceData } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-full">
                      <Briefcase className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-white font-medium mb-1">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm font-medium text-gray-200">
                    <span>{exp.period}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{exp.description}</p>

                <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
}
