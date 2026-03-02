'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Award, Zap } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/button';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
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
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI-powered applications solving real-world problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projectsData.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 overflow-hidden">
                {project.id === 'bird-feather' && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">
                      <Award className="w-3 h-3" />
                      Flagship Project
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === 'AI'
                        ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                        : project.category === 'Design'
                        ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400'
                        : 'bg-green-500/10 border border-green-500/30 text-green-400'
                    }`}>
                      {project.category === 'AI' && <Zap className="w-3 h-3" />}
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {project.metrics && (
                    <div className="mb-4 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                      <p className="text-blue-400 text-sm font-semibold">
                        {project.metrics}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-800/50 border border-blue-500/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-500/30 bg-transparent text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-500/30 bg-transparent text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projectsData.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm rounded-xl border border-blue-500/10 hover:border-purple-500/30 transition-all duration-300 p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded bg-slate-800/50 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.demo && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
