"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaCalendarAlt } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";

const experiences = [
  {
    company: "Student Council MIT, Manipal",
    role: "Development Team Member",
    duration: "Dec 2024 – Present · 1 yr",
    location: "Manipal · Hybrid",
    icon: FaUsers,
    color: "cyan",
    achievements: [
      "Built a Club Management System using Next.js to help college administration monitor and manage club events effectively",
      "Collaborated in a 6-member team under the guidance of 2 senior mentors, practicing structured team workflows, code reviews, and agile collaboration",
      "Contributed to debugging, feature development, and deployment, ensuring a smooth user experience",
    ],
  },
  {
    company: "TechTatva, MIT Manipal",
    role: "Core Committee Member – Technical",
    duration: "Jun 2025 – Oct 2025 · 5 mos",
    location: "Manipal · On-site",
    icon: FaCalendarAlt,
    color: "purple",
    achievements: [
      "Developed the main M# Hackathon website, which handled 10,000+ visits and 5,000+ registrations smoothly with zero downtime",
      "Built a Bug Bounty platform used in the internal hackathon by judges and moderators",
      "Helped design and optimize the TechTatva landing page for better performance and user engagement",
      "Contributed to the Judge Portal, streamlining event scoring and management used in all events organised in TechTatva",
    ],
  },
  {
    company: "EmergX",
    role: "Backend Developer – Internship",
    duration: "May 2025 – Jul 2025 · 3 mos",
    location: "Remote",
    icon: FaBriefcase,
    color: "green",
    achievements: [
      "Collaborated in a team to develop and optimize secure APIs for a hiring platform, focusing on performance and data protection",
      "Contributed to database design and integration to support scalable job listing storage and retrieval",
      "Built and deployed Selenium-based web scraping tools to extract job data from various platforms, automating data ingestion into the system",
    ],
  },
  {
    company: "IECSE Manipal",
    role: "Management Committee Member",
    duration: "Sep 2024 – Sep 2025 · 1 yr 1 mo",
    location: "Manipal · Hybrid",
    icon: FaUsers,
    color: "pink",
    achievements: [
      "The Official Computer Science Club of MIT Manipal",
      "Led technical initiatives and coordinated events for the computer science community",
      "Mentored junior members and organized workshops on various tech topics",
    ],
  },
  {
    company: "IECSE Manipal",
    role: "Working Committee Member",
    duration: "Dec 2023 – Sep 2024 · 10 mos",
    location: "Manipal · Hybrid",
    icon: FaUsers,
    color: "indigo",
    achievements: [
      "Contributed to club activities and technical events as part of the working committee",
      "Assisted in organizing coding competitions and tech sessions for students",
      "Collaborated with senior members on club initiatives and projects",
    ],
  },
  {
    company: "Google DSC, MIT Manipal",
    role: "Sub-Head (Development)",
    duration: "Sep 2023 – Oct 2024 · 1 yr 2 mos",
    location: "Manipal · On-site",
    icon: FaBriefcase,
    color: "amber",
    achievements: [
      "Led development initiatives and technical workshops for the Google Developer Student Club",
      "Organized hands-on sessions on Web Development and React.js for students",
      "Coordinated with team members to deliver quality content and technical guidance to club members",
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <Navbar />
      
      <div className="max-w-6xl mx-auto relative z-10 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
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

                    <h4 className={`text-lg font-semibold text-${exp.color}-300 mb-2`}>
                      {exp.role}
                    </h4>
                    
                    {exp.location && (
                      <p className="text-sm text-gray-400 mb-4">📍 {exp.location}</p>
                    )}

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
