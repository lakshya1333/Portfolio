"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight, FaCode, FaLaptopCode, FaRocket, FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-50 w-full px-8 py-6 flex justify-between items-center backdrop-blur-sm"
      >
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition"></div>
            <div className="relative px-4 py-2 bg-black rounded-lg border border-cyan-500/50">
              <span className="text-xl font-bold gradient-text">{"<LJ />"}</span>
            </div>
          </div>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/about"
            className="relative text-gray-300 hover:text-cyan-400 transition-colors font-medium group"
          >
            <span>About</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/experience"
            className="relative text-gray-300 hover:text-cyan-400 transition-colors font-medium group"
          >
            <span>Experience</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/projects"
            className="relative text-gray-300 hover:text-cyan-400 transition-colors font-medium group"
          >
            <span>Projects</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition"></div>
            <div className="relative px-6 py-2 bg-black rounded-lg border border-cyan-500 text-cyan-400 font-medium group-hover:border-purple-500 transition-all">
              Contact
            </div>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 text-sm font-medium">Incoming Summer Intern @Microsoft</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Lakshya</span>
              </h1>
              
              <div className="text-3xl md:text-4xl font-bold text-white mb-6 h-16">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer 💻",
                    2000,
                    "Backend Specialist ⚡",
                    2000,
                    "Problem Solver 🧩",
                    2000,
                    "Tech Enthusiast 🚀",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              Computer and Communication Engineering student at <span className="text-cyan-400 font-semibold">MIT Manipal</span>, 
              building scalable web applications and turning complex problems into elegant solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <Link
                href="/projects"
                className="group relative px-8 py-4 font-bold overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 transition-transform group-hover:scale-105"></div>
                <span className="relative flex items-center gap-2 text-black">
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a
                href="/Lakshya_Jain_CV.pdf"
                download
                className="group px-8 py-4 font-bold border-2 border-purple-500/50 text-purple-400 rounded-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all flex items-center gap-2"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </a>
              
              <Link
                href="/contact"
                className="group px-8 py-4 font-bold border-2 border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all flex items-center gap-2"
              >
                Let's Talk
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/lakshyajain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all group"
              >
                <FaGithub className="text-xl text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/lakshyajain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all group"
              >
                <FaLinkedin className="text-xl text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:lakshyajain906@gmail.com"
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all group"
              >
                <FaEnvelope className="text-xl text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="tel:8905550030"
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all group"
              >
                <FaPhone className="text-xl text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full"></div>
              </motion.div>

              {/* Second Ring */}
              <motion.div
                className="absolute inset-8 border-2 border-purple-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full"></div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
              </motion.div>

              {/* Profile Image */}
              <div className="absolute inset-16 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/lakshya.jpg"
                  alt="Lakshya Jain"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -bottom-4 right-1/4 p-4 bg-black/80 backdrop-blur-sm border border-purple-500/50 rounded-xl shadow-lg"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaRocket className="text-3xl text-purple-400" />
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-8 p-3 bg-black/80 backdrop-blur-sm border border-green-500/50 rounded-xl shadow-lg"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaLaptopCode className="text-3xl text-green-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
