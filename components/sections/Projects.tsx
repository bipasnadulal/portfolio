'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of academic and personal projects I’ve worked on
          </p>
        </motion.div>


        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projectsData
            .filter((project) => project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-md border border-slate-800 bg-slate-900/40 overflow-hidden flex flex-col"
              >

                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={300}
                    className="w-full h-50 object-cover"
                    priority
                  />
                )}

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-gray-500 mb-2">{project.category}</p>

                  <h3 className="text-xl font-medium text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {project.longDescription}
                  </p>

                  {project.metrics && (
                    <p className="text-sm text-gray-300 mb-4">
                      <span className="text-gray-500">Details:</span> {project.metrics}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md border border-slate-700 bg-slate-800/40 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>


                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="p-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="p-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>


        <div className="grid lg:grid-cols-2 gap-6">
          {projectsData
            .filter((project) => !project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-md border border-slate-800 bg-slate-900/30 flex flex-col overflow-hidden"
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={300}
                    className="w-full h-40 object-cover"
                  />
                )}

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-gray-500 mb-1">{project.category}</p>

                  <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>

                  <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded border border-slate-700 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="p-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="p-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}