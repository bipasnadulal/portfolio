'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on AI projects or discuss opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:bipasna@example.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      bipasna@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-500/10">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Open to AI/ML opportunities, research collaborations, and
                  innovative projects. Available for freelance work and full-time
                  positions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="bg-slate-800/50 border-blue-500/20 focus:border-blue-500/50 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-slate-800/50 border-blue-500/20 focus:border-blue-500/50 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="bg-slate-800/50 border-blue-500/20 focus:border-blue-500/50 text-white placeholder:text-gray-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
