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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combining AI engineering with user-centered design
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <Briefcase className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-purple-400 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-blue-400 font-semibold">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm leading-relaxed">
                          {highlight}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-purple-500/20">
            <p className="text-gray-400">
              <span className="text-purple-400 font-semibold">Expertise:</span> AI Engineer who understands system design, user experience, and real-world implementation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
