"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaFilter } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";

const projects = [
  // Top 6 Flagship Projects
  {
    title: "Event Judge Platform",
    subtitle: "TechTatva ’25 & Revels ’26",
    badge: "Flagship Production System",
    category: "flagship",
    description:
      "A high-concurrency judging and live-results platform that ran scoring for 200+ fest events, with 100+ judges scoring simultaneously from mobile phones and tablets across multi-round competitions.",
    tech: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "Docker",
      "JWT",
      "AWS",
    ],
    features: [
      "Ran scoring for 200+ fest events with 100+ judges scoring from phones and tablets across multi-round competitions",
      "Designed for zero score loss and no tampering: atomic DB transactions, 4-tier RBAC with object-level access control, and audit logs",
      "Blind moderation architecture that hid raw scores from organizers to prevent evaluation bias",
      "Implemented weighted scoring, judge normalization, and tie-breaking, with a live leaderboard for 1,000+ spectators",
    ],
    gradient: "from-cyan-500 to-blue-600",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "Fest Food Coupon System",
    subtitle: "Revels ’26",
    badge: "Role-Based Fintech Engine",
    category: "flagship",
    description:
      "Digitized festival food voucher platform functioning as a role-based wallet for 500+ concurrent users, featuring a 3-level budget allocation engine and automated midnight resets.",
    tech: [
      "Next.js",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Docker",
      "JWT",
      "HMAC-SHA256",
      "AWS",
    ],
    features: [
      "Digitized the fest’s food coupons as a role-based wallet for 500+ concurrent users with a 3-level budget allocation engine (Admin → HFS → OC/CC/Volunteer)",
      "Automated midnight wallet reset engine and comprehensive transaction tracking",
      "Prevented double-spending and race conditions with row-level locking in ACID atomic transactions",
      "Secured QR payments with 30-second one-time HMAC-signed codes and immutable audit logs",
    ],
    gradient: "from-purple-500 to-pink-600",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "Fest Entry Scanner",
    subtitle: "Revels ’26",
    badge: "Air-Gapped Offline-First",
    category: "flagship",
    description:
      "An offline-first QR entry and gate pass verification system deployed on an air-gapped local area network (LAN) with no internet, scanning 10,000+ attendees across multiple gates with sub-100ms verification.",
    tech: [
      "Next.js",
      "Django REST Framework",
      "MongoDB",
      "Gunicorn",
      "Redis",
      "Docker",
      "JWT",
    ],
    features: [
      "Developed an offline-first QR entry system on a LAN with no internet, scanning 10,000+ attendees across multiple scanners with sub-100ms verification",
      "Eliminated duplicate entries with atomic database writes and encrypted QR verification",
      "Role-based access control for security admins and gate scanners, with multi-ticket QR support",
      "Bulk Excel attendee import and real-time crowd occupancy tracking",
    ],
    gradient: "from-emerald-500 to-teal-600",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "OM Portal — Outstation Management",
    subtitle: "Outstation Management Portal · TechTatva",
    badge: "Contingent Logistics System",
    category: "flagship",
    description:
      "A full-stack management platform for handling outstation teams participating in college fests, built from scratch for TechTatva by the Student Council Development Team.",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "Git",
    ],
    features: [
      "Managed 200+ teams from 20+ colleges, covering their registration, arrival, accommodation, and checkout workflows",
      "Implemented dynamic room allocation based on constraints such as team size, gender, and room availability, reducing manual work",
      "Used atomic database transactions to handle simultaneous admin actions and prevent double-booking rooms during concurrent allocations",
      "Built features including universal search, detailed checkout, data export, activity logs, historical data version control, rollback, and bulk team checkout",
    ],
    gradient: "from-amber-500 to-orange-600",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "Perm Portal — Campus Verification",
    subtitle: "Campus Permission & Verification System",
    badge: "Security & Operations Platform",
    category: "flagship",
    description:
      "A full-stack digital permission and verification platform designed to replace paper-based permission lists during high-traffic campus events and late-hour movement windows.",
    tech: [
      "Next.js",
      "Django REST Framework",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Built a role-based permission management system for Security Staff, Ops/HRD, Student Council, Caretakers, and Admins",
      "Implemented authentication, permission workflows, approvals, and real-time verification using Django REST Framework and PostgreSQL",
      "Developed frontend with Next.js App Router, providing dedicated interfaces for different user roles",
      "Implemented barcode-based verification so security staff could quickly verify whether a student had an approved permission, with complete audit trails",
    ],
    gradient: "from-blue-500 to-indigo-600",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "SW Vista — Venue Booking System",
    subtitle: "Venue Booking Platform · Student Council",
    badge: "Governance & Reservation Engine",
    category: "flagship",
    description:
      "A full-stack venue booking and approval platform built for the MIT Manipal Student Council to manage campus venue reservations across different student bodies and approval authorities.",
    tech: [
      "Django",
      "Django REST Framework",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Gunicorn",
      "Nginx",
    ],
    features: [
      "Built backend using Django/DRF and frontend using Next.js, TypeScript, and Tailwind CSS with PostgreSQL in production",
      "Implemented role-based access control and multi-stage approval workflows involving Faculty Advisor, Student Council, Student Welfare, and Security",
      "Implemented priority-based conflict resolution: higher-priority requests are retained while lower-priority overlapping bookings are automatically rejected",
      "Built and tested system with 187 automated tests across 6 apps; designed production architecture with Gunicorn, Nginx/Caddy, and CSRF protection",
    ],
    gradient: "from-violet-500 to-fuchsia-600",
    githubUrl: "https://github.com/lakshya1333",
  },

  // Systems, Network & Low-Level Projects
  {
    title: "Multithreaded Proxy Web Server",
    subtitle: "Intermediate Systems Programming",
    badge: "Low-Level Sockets & Concurrency",
    category: "systems",
    description:
      "High-performance proxy server in C with full HTTP support and intelligent caching, engineered using low-level POSIX socket programming and synchronized LRU caching.",
    tech: ["C", "POSIX", "TCP/IP", "Sockets", "Pthreads", "LRU Cache", "Semaphores"],
    features: [
      "Engineered using low-level POSIX system calls with HTTP GET/POST request support",
      "Integrated socket programming (TCP/IP) for concurrent client-server communication",
      "Implemented LRU cache with time-based eviction for performance optimization",
      "Used mutexes and semaphores for synchronized access preventing race conditions",
    ],
    gradient: "from-purple-500 to-pink-500",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "Simpfuscator — Binary Obfuscator",
    subtitle: "Security & Binary Analysis Tool",
    badge: "Reverse-Engineering Defense",
    category: "systems",
    description:
      "Advanced ELF binary obfuscation tool with multiple encryption methods, digital signatures, and a modern React-based dashboard for secure file processing.",
    tech: ["React", "TypeScript", "Python", "Docker", "Tailwind CSS", "RSA-PSS"],
    features: [
      "ELF Binary Support: Works exclusively with ELF (Executable and Linkable Format) files",
      "Multiple Encryption: XOR encryption (fast, lightweight) and RSA encryption with configurable key sizes",
      "Digital Signatures: RSA-PSS (2048-bit) signature verification for file integrity and authenticity",
      "Secure Upload & Live Obfuscation: Sandboxed processing with detailed real-time progress logs",
    ],
    gradient: "from-red-500 to-rose-500",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "M# Hackathon Website",
    subtitle: "Hackathon Platform (M#)",
    badge: "10k+ Traffic · 0 Downtime",
    category: "web",
    description:
      "A high-traffic hackathon platform built to host thousands of teams, manage registrations, and provide a flawless contest experience with auto-scaling infrastructure.",
    tech: ["React", "Node.js", "AWS", "S3", "Docker", "Tailwind CSS"],
    features: [
      "Successfully handled 10,000+ site visits and 5,000+ registrations with zero downtime",
      "Deployed on AWS with auto-scaling and health-checked services to ensure high availability",
      "Amazon S3 integration for secure file uploads and fast content delivery",
      "Robust registration workflows, team management, and live event announcements",
    ],
    gradient: "from-indigo-500 to-violet-500",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "Club Management System",
    subtitle: "Student Council Dev Team",
    badge: "Campus Administration",
    category: "web",
    description:
      "A comprehensive system to help college administration monitor and manage club events effectively across MIT Manipal.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Git"],
    features: [
      "Built secure REST APIs for user authentication, event tracking, and club data management",
      "Designed responsive frontend interfaces for club profile pages and dashboards",
      "Contributed to database schema design and system architecture for scalable performance",
      "Collaborated on GitHub with a 6-member team using version control and code reviews",
    ],
    gradient: "from-cyan-500 to-blue-500",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "Chatty — Anonymous Group Chat",
    subtitle: "Real-Time Communication Platform",
    badge: "WebSocket Architecture",
    category: "web",
    description:
      "A privacy-focused anonymous group chat application where users can create room IDs and communicate securely with only those who have access to the room code.",
    tech: ["React", "TypeScript", "WebSocket", "Node.js", "Express", "Tailwind CSS"],
    features: [
      "Room-based anonymous messaging: create unique room IDs for private group conversations",
      "Real-time communication powered by WebSocket for instant message delivery",
      "Built with TypeScript for type-safe, maintainable, and scalable codebase",
      "Privacy-first design: no personal data required, messages tied only to active sessions",
    ],
    gradient: "from-blue-500 to-indigo-500",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "Chat Application with Video Calling",
    subtitle: "Full-Stack Real-time Application",
    badge: "WebRTC & WebSockets",
    category: "web",
    description:
      "Modern full-stack chat platform featuring peer-to-peer video calling, custom theme personalization, and a responsive glassmorphic UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TanStack Query", "Tailwind CSS"],
    features: [
      "Built full-stack real-time chat with video calling and custom themes",
      "Developed friend system, live chat, and video calls for personalized experience",
      "Used custom React hooks and TanStack Query for efficient data handling",
      "Deployed and tested backend APIs for reliability using Postman",
    ],
    gradient: "from-green-500 to-teal-500",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "Progress Tracker",
    subtitle: "GitHub to LaTeX Resume Generator",
    badge: "Developer Tool",
    category: "web",
    description:
      "Automated resume builder that integrates with GitHub to fetch your contributions, projects, and stats, then converts them into professional LaTeX-formatted resumes for interviews.",
    tech: ["React", "Node.js", "GitHub API", "LaTeX", "Express", "OAuth"],
    features: [
      "Integrated GitHub OAuth for secure account authentication and data fetching",
      "Automatically extracts repository stats, commit history, languages, and project descriptions",
      "Generates professionally formatted LaTeX resumes with customizable templates",
      "Real-time preview of generated resume with one-click PDF export functionality",
    ],
    gradient: "from-amber-500 to-orange-500",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "Stock Analytics Dashboard",
    subtitle: "Data Science & Financial Analysis",
    badge: "Quantitative Analytics",
    category: "data",
    description:
      "Comprehensive stock market analysis tool built with Python and Jupyter Notebook, featuring advanced data visualization, trend analysis, and predictive insights for investment decisions.",
    tech: ["Python", "Jupyter", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
    features: [
      "Real-time stock data analysis with historical trend visualization and pattern recognition",
      "Interactive visualizations: Candlestick charts, moving averages, volume analysis, and correlation heatmaps",
      "Statistical analysis: Calculate volatility, RSI, MACD, Bollinger Bands, and other technical indicators",
      "Comparative portfolio analysis: Compare multiple stocks and analyze risk-return profiles",
    ],
    gradient: "from-emerald-500 to-cyan-500",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "Mental Health & Wellness Platform",
    subtitle: "Full-Stack Wellbeing Application",
    badge: "Full-Stack App",
    category: "web",
    description:
      "A comprehensive mental health platform with mood tracking, anonymous peer support, interactive games, and personalized wellness dashboards to help users manage their mental wellbeing.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Chart.js"],
    features: [
      "Secure user authentication with JWT tokens and encrypted password storage",
      "Interactive mood tracking dashboard with charts showing emotional patterns over time",
      "Anonymous chat rooms: Connect with peers for support without revealing personal identity",
      "Mental wellness games: Brain-training puzzles, mindfulness exercises, and stress-relief activities",
    ],
    gradient: "from-pink-500 to-purple-500",
    githubUrl: "https://github.com/lakshya1333",
  },
  {
    title: "MyBrain — Content Management Hub",
    subtitle: "Full-Stack Content Organization",
    badge: "Knowledge Management",
    category: "web",
    description:
      "A personal knowledge management system where users can save, organize, and access important YouTube videos and Twitter tweets in one centralized platform.",
    tech: ["TypeScript", "React", "Tailwind CSS", "MongoDB", "Express", "JWT", "Zod"],
    features: [
      "Save and organize YouTube videos and Twitter tweets with tags and categories",
      "Secure authentication with JWT tokens and custom middleware for protected routes",
      "Input validation using Zod schemas to ensure data integrity and type safety",
      "MongoDB database for efficient storage and retrieval of bookmarked content",
    ],
    gradient: "from-violet-500 to-fuchsia-500",
    githubUrl: "https://github.com/lakshya1333",
  },
];

const categories = [
  { id: "all", label: "All Projects", count: 16 },
  { id: "flagship", label: "Flagship Systems", count: 6 },
  { id: "systems", label: "Systems & Security", count: 2 },
  { id: "web", label: "Web & Full-Stack", count: 7 },
  { id: "data", label: "Data Science", count: 1 },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      <Navbar />

      <div className="max-w-7xl mx-auto relative z-10 px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <FaLaptopCode className="text-sm" />
            <span>16 Featured Engineering Projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
            Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            High-availability event platforms, campus enterprise systems, low-level POSIX architectures, and full-stack applications.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2.5 mt-8 items-center">
            <span className="text-xs text-gray-400 font-mono flex items-center gap-1.5 mr-1">
              <FaFilter className="text-[10px]" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30"
                    : "bg-white/[0.04] text-gray-300 border border-white/10 hover:border-cyan-500/40 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.id
                      ? "bg-black/20 text-black"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="h-full flex flex-col"
            >
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glareBorderRadius="16px"
                className="h-full flex flex-col"
              >
                <div className="h-full bg-white/[0.04] border border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/15 flex flex-col backdrop-blur-sm group">
                  {/* Header Banner with gradient */}
                  <div
                    className={`relative h-36 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden shrink-0`}
                  >
                    <div className="absolute inset-0 bg-black/25"></div>
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-white/15 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-28 h-28 bg-black/30 rounded-full blur-xl"></div>

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono font-medium text-white/90 border border-white/20">
                        {project.badge}
                      </span>
                      <span className="text-white/40 text-3xl font-extrabold font-mono">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white drop-shadow-md">
                        {project.title}
                      </h3>
                      <p className="text-white/80 font-mono text-xs mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-5 font-normal">
                        {project.description}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="mb-6 space-y-2.5">
                        <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-2">
                          Key Architectural Highlights
                        </span>
                        {project.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed"
                          >
                            <span className="text-cyan-400 mt-0.5 shrink-0">▹</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Section: Tech Stack & Actions */}
                    <div className="pt-4 border-t border-white/10 mt-auto space-y-4">
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 rounded-md text-xs border border-cyan-500/20 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex gap-3 pt-1">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-white/5 border border-cyan-500/40 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/15 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs font-semibold"
                        >
                          <FaGithub className="text-sm" />
                          <span>View Code</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-purple-500/40 text-purple-200 hover:border-purple-400 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs font-semibold"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          <span>Overview</span>
                        </a>
                      </div>
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
