"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";

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
    title: "M# Hackathon Website",
    subtitle: "Hackathon Platform (M#)",
    description:
      "A high-traffic hackathon platform built to host thousands of teams, manage registrations, and provide a flawless contest experience.",
    tech: ["React", "Node.js", "AWS", "S3", "Docker"],
    features: [
      "Successfully handled 10,000+ site visits and 5,000+ registrations with zero downtime",
      "Deployed on AWS with auto-scaling and health-checked services to ensure high availability",
      "Used Amazon S3 for secure file uploads (submissions, assets) and fast content delivery",
      "Implemented robust registration workflows, team management, and live event feeds",
      "Designed monitoring and alerting for traffic spikes and system health",
    ],
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "Simpfuscator - Simple Binary Obfuscator",
    subtitle: "Security & Binary Analysis Tool",
    description:
      "Advanced ELF binary obfuscation tool with multiple encryption methods, digital signatures, and a modern React-based dashboard for secure file processing.",
    tech: ["React", "TypeScript", "Node.js", "Python", "Docker", "Tailwind CSS", "RSA-PSS"],
    features: [
      "ELF Binary Support: Works exclusively with ELF (Executable and Linkable Format) files",
      "Multiple Encryption: XOR encryption (fast, lightweight) and RSA encryption with configurable key sizes",
      "Digital Signatures: RSA-PSS (2048-bit) signature verification for file integrity and authenticity",
      "Modern Dark-themed UI: Built with React, TypeScript, and Tailwind CSS for seamless UX",
      "Real-time Progress: Live obfuscation progress tracking with detailed debug information and logs",
      "Secure Upload: File validation, signature verification, and sandboxed processing before obfuscation",
    ],
    gradient: "from-red-500 to-rose-500",
  },
  {
    title: "Chatty - Anonymous Group Chat",
    subtitle: "Real-Time Communication Platform",
    description:
      "A privacy-focused anonymous group chat application where users can create room IDs and communicate securely with only those who have access to the room code.",
    tech: ["React", "TypeScript", "WebSocket", "Node.js", "Express", "Tailwind CSS"],
    features: [
      "Room-based anonymous messaging: Create unique room IDs for private group conversations",
      "Real-time communication powered by WebSocket for instant message delivery",
      "Built with TypeScript for type-safe, maintainable, and scalable codebase",
      "Privacy-first design: No personal information required, messages tied only to room IDs",
      "Modern UI with Tailwind CSS: Clean, responsive interface for seamless chatting experience",
      "Upcoming features: Image/video sharing, GIF support, and peer-to-peer money transfers",
    ],
    gradient: "from-blue-500 to-indigo-500",
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
  {
    title: "Progress Tracker",
    subtitle: "GitHub to LaTeX Resume Generator",
    description:
      "Automated resume builder that integrates with GitHub to fetch your contributions, projects, and stats, then converts them into professional LaTeX-formatted resumes for interviews.",
    tech: ["React", "Node.js", "GitHub API", "LaTeX", "Express", "OAuth"],
    features: [
      "Integrated GitHub OAuth for secure account authentication and data fetching",
      "Automatically extracts repository stats, commit history, languages, and project descriptions",
      "Generates professionally formatted LaTeX resumes with customizable templates",
      "Real-time preview of generated resume with one-click PDF export functionality",
      "Built REST APIs to process GitHub data and compile LaTeX documents on the server",
    ],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Stock Analytics Dashboard",
    subtitle: "Data Science & Financial Analysis",
    description:
      "Comprehensive stock market analysis tool built with Python and Jupyter Notebook, featuring advanced data visualization, trend analysis, and predictive insights for investment decisions.",
    tech: ["Python", "Jupyter", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
    features: [
      "Real-time stock data analysis with historical trend visualization and pattern recognition",
      "Interactive visualizations: Candlestick charts, moving averages, volume analysis, and correlation heatmaps",
      "Statistical analysis: Calculate volatility, RSI, MACD, Bollinger Bands, and other technical indicators",
      "Comparative portfolio analysis: Compare multiple stocks and analyze risk-return profiles",
      "Data-driven insights: Generate automated findings and recommendations based on statistical patterns",
      "Built with Pandas for data manipulation and Plotly/Seaborn for professional-grade visualizations",
    ],
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Mental Health & Wellness Platform",
    subtitle: "Full-Stack Wellbeing Application",
    description:
      "A comprehensive mental health platform with mood tracking, anonymous peer support, interactive games, and personalized wellness dashboards to help users manage their mental wellbeing.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Chart.js"],
    features: [
      "Secure user authentication with JWT tokens and encrypted password storage",
      "Interactive mood tracking dashboard with beautiful charts showing emotional patterns over time",
      "Anonymous chat rooms: Connect with peers for support without revealing personal identity",
      "Mental wellness games: Brain-training puzzles, mindfulness exercises, and stress-relief activities",
      "Personalized insights: AI-driven mood analysis and suggestions based on user data patterns",
      "Real-time notifications and reminders for self-care activities and wellness check-ins",
    ],
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "MyBrain - Content Management Hub",
    subtitle: "Full-Stack Content Organization Platform",
    description:
      "A personal knowledge management system where users can save, organize, and access important YouTube videos and Twitter tweets in one centralized platform.",
    tech: ["TypeScript", "React", "Tailwind CSS", "MongoDB", "Express", "JWT", "Zod", "Render"],
    features: [
      "Save and organize YouTube videos and Twitter tweets with tags and categories",
      "Secure authentication with JWT tokens and custom middleware for protected routes",
      "Input validation using Zod schemas to ensure data integrity and type safety",
      "MongoDB database for efficient storage and retrieval of bookmarked content",
      "Clean, intuitive UI built with React and Tailwind CSS for seamless content browsing",
      "Deployed on Render with optimized performance and reliable uptime for production use",
    ],
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <Navbar />
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-400">
            Real-world applications and systems I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glareBorderRadius="20px"
                className="h-full"
              >
                <div className="h-full bg-white/5 border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col">
                  {/* Header with gradient */}
                  <div
                    className={`relative h-48 bg-linear-to-br ${project.gradient} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-white text-7xl font-bold opacity-30">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    {/* Decorative pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/20 rounded-full blur-xl"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1 gradient-text">
                        {project.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-sm">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-4 flex-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <span className="text-cyan-400 mt-0.5 flex-shrink-0">▹</span>
                          <span className="text-gray-400 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs border border-purple-500/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <button className="flex-1 px-4 py-2.5 bg-cyan-500/10 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold">
                        <FaGithub /> Code
                      </button>
                      <button className="flex-1 px-4 py-2.5 bg-pink-500/10 border border-pink-500 text-pink-400 rounded-lg hover:bg-pink-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold">
                        <FaExternalLinkAlt /> Live
                      </button>
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
