"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBriefcase, FaUsers, FaCalendarAlt } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";

const experiences = [
  {
    company: "EmergX - AI Hiring Startup",
    role: "Backend Developer - Internship",
    duration: "May 2025 – July 2025",
    icon: FaBriefcase,
    color: "cyan",
    achievements: [
      "Collaborated in a team to develop and optimize secure APIs for a hiring platform, performance and data protection.",
      "Contributed to database design and integration to support scalable job listing storage and retrieval",
      "Built and deployed Selenium-based web scraping tools to extract job data from various platforms, automating data ingestion into the system",
    ],
  },
  {
    company: "Student Council MIT, Manipal",
    role: "Development Team Member",
    duration: "Dec 2024 – present",
    icon: FaUsers,
    color: "purple",
    achievements: [
      "Built a Club Management System using Next.js to help college administration monitor and manage club events effectively.",
      "Collaborated in a 6-member team under the guidance of 2 senior mentors, practicing structured team workflows, code reviews, and agile collaboration",
      "Contributed to debugging, feature development, and deployment, ensuring a smooth user experience.",
    ],
  },
  {
    company: "M# Hackathon - Tech Tatva",
    role: "Core Committee Member – Technical",
    duration: "May 2025 – present",
    icon: FaCalendarAlt,
    color: "pink",
    achievements: [
      "Currently developing the M# hackathon website to host 1000+ teams with a focus on smooth event flow.",
      "Collaborating with a cross-functional team to discuss hackathon themes, define problem statements, and coordinate with the Student Council.",
      "Actively involved in conducting 250+ interviews to onboard junior OC members and support team structuring",
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Experience
          </h1>
          <p className="text-xl text-gray-400">My professional journey and contributions</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div
                className={`bg-white/5 border border-${exp.color}-500/30 rounded-lg p-8 hover:border-${exp.color}-500/60 transition-all hover:shadow-lg hover:shadow-${exp.color}-500/20`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`p-4 bg-${exp.color}-500/10 border border-${exp.color}-500/30 rounded-lg`}
                  >
                    <exp.icon className={`text-3xl text-${exp.color}-400`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      <span className={`text-${exp.color}-400 font-semibold text-sm md:text-base`}>
                        {exp.duration}
                      </span>
                    </div>

                    <h4 className={`text-lg font-semibold text-${exp.color}-300 mb-4`}>
                      {exp.role}
                    </h4>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`text-${exp.color}-400 mt-1.5`}>▹</span>
                          <span className="text-gray-300 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Connecting line */}
              {index < experiences.length - 1 && (
                <div className="ml-10 h-8 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
