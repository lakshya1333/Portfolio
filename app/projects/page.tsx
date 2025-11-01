"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";

const projects = [
  {
    title: "Club Management System",
    subtitle: "Student Council Dev Team",
    description:
      "A comprehensive system to help college administration monitor and manage club events effectively.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Git"],
    features: [
      "Built secure REST APIs for user authentication, event tracking, and club data management",
      "Designed responsive frontend interfaces for club profile pages and dashboards",
      "Contributed to database schema design and system architecture for scalable performance",
      "Collaborated on GitHub with a 6-member team using version control and code reviews",
    ],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Multithreaded Proxy Web Server",
    subtitle: "Intermediate Systems Programming",
    description:
      "High-performance proxy server in C with full HTTP support and intelligent caching.",
    tech: ["C", "POSIX", "TCP/IP", "Threads", "System Calls"],
    features: [
      "Engineered using low-level POSIX system calls with HTTP GET/POST request support",
      "Integrated socket programming (TCP/IP) for concurrent client-server communication",
      "Implemented LRU cache with time-based eviction for performance optimization",
      "Used mutexes and semaphores for synchronized access preventing race conditions",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Chat Application with Video Calling",
    subtitle: "Full-Stack Real-time Application",
    description:
      "Modern chat platform with video calling, custom themes, and responsive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TanStack Query", "Tailwind CSS"],
    features: [
      "Built full-stack real-time chat with video calling and custom themes",
      "Developed friend system, live chat, and video calls for personalized experience",
      "Used custom React hooks and TanStack Query for efficient data handling",
      "Deployed and tested backend APIs for reliability using Postman",
    ],
    gradient: "from-green-500 to-teal-500",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-400">
            Real-world applications and systems I've built
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glareBorderRadius="20px"
              >
                <div className="bg-white/5 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/60 transition-all">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div
                        className={`h-48 rounded-lg bg-linear-to-br ${project.gradient} flex items-center justify-center mb-4`}
                      >
                        <div className="text-white text-6xl font-bold opacity-20">
                          {project.title.charAt(0)}
                        </div>
                      </div>

                      <div className="flex gap-3 mb-4">
                        <button className="flex-1 px-4 py-2 bg-black border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                          <FaGithub /> Code
                        </button>
                        <button className="flex-1 px-4 py-2 bg-black border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                          <FaExternalLinkAlt /> Demo
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs border border-purple-500/30 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h3 className="text-3xl font-bold text-white mb-2 glow-text">
                        {project.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-cyan-400 mt-1.5">▹</span>
                            <span className="text-gray-300 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
