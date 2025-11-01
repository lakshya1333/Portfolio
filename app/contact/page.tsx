"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPaperPlane, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <a
                  href="mailto:lakshyajain906@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/5 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 transition-all group"
                >
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg group-hover:bg-cyan-500/20 transition-all">
                    <FaEnvelope className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">lakshyajain906@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:8905550030"
                  className="flex items-center gap-4 p-4 bg-white/5 border border-purple-500/30 rounded-lg hover:border-purple-500/60 transition-all group"
                >
                  <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg group-hover:bg-purple-500/20 transition-all">
                    <FaPhone className="text-2xl text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-semibold">+91 8905550030</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/lakshya1333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all"
                >
                  <FaGithub className="text-3xl text-cyan-400" />
                </a>
                <a
                  href="https://linkedin.com/in/lakshya-jain-490ab9211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all"
                >
                  <FaLinkedin className="text-3xl text-cyan-400" />
                </a>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg">
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/60 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-cyan-400 mb-2 font-semibold text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-all placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-cyan-400 mb-2 font-semibold text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-all placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-cyan-400 mb-2 font-semibold text-sm">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-all resize-none placeholder:text-gray-600"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FaPaperPlane /> SEND MESSAGE
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
