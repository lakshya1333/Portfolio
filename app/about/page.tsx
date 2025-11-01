"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            About Me
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-cyan-400 flex items-center gap-3">
              <FaGraduationCap className="text-4xl" />
              Education
            </h2>
            <div className="bg-white/5 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">
                Manipal Institute of Technology, Manipal
              </h3>
              <p className="text-cyan-400 font-semibold mb-2">
                B.Tech in Computer and Communication Engineering
              </p>
              <div className="flex justify-between text-gray-400 mb-4">
                <span>Expected Graduation: 2027</span>
                <span className="text-green-400 font-bold">CGPA: 8.68/10</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-300 font-semibold">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "OOP",
                    "Computer Networks",
                    "DBMS",
                    "Operating Systems",
                    "Software Design",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs border border-cyan-500/20"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-cyan-400 flex items-center gap-3">
              <FaCode className="text-4xl" />
              Technologies
            </h2>
            <div className="bg-white/5 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-all space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["C++", "C", "Java", "Python", "JavaScript"].map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-md text-sm border border-purple-500/30 font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "MongoDB",
                    "PostgreSQL",
                    "Tailwind CSS",
                    "Bootstrap",
                    "Pandas",
                    "NumPy",
                    "Postman",
                    "Ubuntu",
                    "Git",
                    "GitHub",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-md text-sm border border-cyan-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-8">
            <FaLaptopCode className="text-6xl text-cyan-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300 max-w-2xl">
              Passionate about building scalable web applications and solving complex problems.
              Always eager to learn new technologies and contribute to impactful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
