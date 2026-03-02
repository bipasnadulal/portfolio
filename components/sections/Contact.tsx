// 'use client';

// import { motion } from 'framer-motion';
// import { Mail, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';

// export default function Contact() {
//   return (
//     <section id="contact" className="py-24 bg-slate-950">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
//             Get In Touch
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">

//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >

//             <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 space-y-6">
//               <h3 className="text-2xl font-semibold text-white">Contact Information</h3>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-4">
//                   <div className="p-2 rounded-full bg-slate-800/30">
//                     <Mail className="w-5 h-5 text-gray-400" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400 mb-1">Email</p>
//                     <a
//                       href="mailto:bipasna.dulal75@gmail.com"
//                       className="text-white hover:text-gray-200 transition-colors"
//                     >
//                       bipasnadulal1@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-2 rounded-full bg-slate-800/30">
//                     <MapPin className="w-5 h-5 text-gray-400" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400 mb-1">Location</p>
//                     <p className="text-white">Kathmandu, Nepal</p>
//                   </div>
//                 </div>
//               </div>

//               <p className="text-gray-400 text-sm mt-4">
//                 Open to AI/ML opportunities, research collaborations, and innovative projects. Available for freelance and full-time roles.
//               </p>
//             </div>


//             <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 space-y-4">
//               <h3 className="text-2xl font-semibold text-white">Connect With Me</h3>
//               <p className="text-gray-400 text-sm">
//                 Feel free to connect with me on social platforms:
//               </p>
//               <div className="flex items-center gap-4 mt-2">
//                 <a
//                   href="https://www.linkedin.com/in/bipasna-dulal-0110bd/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-full hover:bg-slate-800/30 transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
//                 </a>
//                 <a
//                   href="https://github.com/bipasnadulal"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-full hover:bg-slate-800/30 transition-colors"
//                 >
//                   <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
//                 </a>
//                 <a
//                   href="https://www.instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-full hover:bg-slate-800/30 transition-colors"
//                 >
//                   <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
//               <form className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
//                   <Input
//                     type="text"
//                     placeholder="Your name"
//                     className="bg-slate-800 border border-slate-700 focus:border-gray-400 text-white placeholder:text-gray-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
//                   <Input
//                     type="email"
//                     placeholder="abcd@email.com"
//                     className="bg-slate-800 border border-slate-700 focus:border-gray-400 text-white placeholder:text-gray-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
//                   <Textarea
//                     rows={5}
//                     placeholder="Tell me about your project or opportunity..."
//                     className="bg-slate-800 border border-slate-700 focus:border-gray-400 text-white placeholder:text-gray-500 resize-none"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-transparent hover:bg-slate-800/20 text-white border border-gray-600 flex items-center justify-center gap-2"
//                 >
//                   Send Message
//                   <Send className="w-4 h-4" />
//                 </Button>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          setSuccess('Message sent successfully!');
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          setSuccess('Failed to send message. Try again.');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 space-y-6">
              <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:bipasna.dulal75@gmail.com" className="text-white hover:text-blue-400">
                      bipasna.dulal75@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Open to AI/ML opportunities, research collaborations, and innovative projects.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 space-y-4 mt-4">
              <h3 className="text-2xl font-semibold text-white">Connect With Me</h3>
              <p className="text-gray-400 text-sm">
                Feel free to connect with me on social platforms:
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/bipasna-dulal-0110bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-slate-800/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://github.com/bipasnadulal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-slate-800/30 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-slate-800/30 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <Input type="text" name="user_name" placeholder="Your name" className="bg-slate-800 border border-slate-700 focus:border-blue-400 text-white placeholder:text-gray-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <Input type="email" name="user_email" placeholder="your.email@example.com" className="bg-slate-800 border border-slate-700 focus:border-blue-400 text-white placeholder:text-gray-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <Textarea name="message" rows={5} placeholder="Tell me about your project or opportunity..." className="bg-slate-800 border border-slate-700 focus:border-blue-400 text-white placeholder:text-gray-500 resize-none" />
                </div>

                <Button type="submit" disabled={loading} className="w-full bg-transparent hover:bg-slate-800/20 text-white border border-gray-600 flex items-center justify-center gap-2">
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </Button>

                {success && <p className="text-sm text-gray-500">{success}</p>}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}