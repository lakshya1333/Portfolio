"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaUsers,
  FaCalendarAlt,
  FaLaptopCode,
  FaCode,
  FaTrophy,
} from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";

const experiences = [
  {
    company: "Microsoft",
    role: "Technology Consultant Intern (Cloud & AI)",
    type: "Internship",
    duration: "May 2026 – Jul 2026 · 3 mos",
    location: "Hyderabad, Telangana, India · On-site",
    icon: FaBriefcase,
    colorClasses: {
      border: "border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/10",
      iconBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      roleText: "text-cyan-300",
      accentText: "text-cyan-400",
      bullet: "text-cyan-400",
      tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    },
    highlight: "3rd Place · Microsoft Garage Hackathon",
    achievements: [
      "Migrated an internal Project Manager AI agent from a low-code setup to a pro-code architecture on Azure AI Foundry with sub-agent orchestration, and deployed it to Teams & M365 Copilot, replacing manual Excel-based metric calculation.",
      "Built the agent's observability layer with OpenTelemetry, Application Insights, and Power BI, tracking active users, sub-agent usage, and token consumption to give leadership data-backed visibility into adoption and cost.",
      "Architected secure agentic workflows integrating Microsoft Entra ID authentication, Azure Cosmos DB, PostgreSQL, Application Insights, Microsoft Teams, and enterprise APIs.",
      "Implemented privacy-conscious conversation memory, tool calling, telemetry, logging, secure proxy integration, and Azure DevOps CI/CD pipelines (Terraform and Bicep).",
      "Contributed backend engineering to GCID's in-house gaming platform and secured 3rd place in the Microsoft Garage Hackathon.",
    ],
    skills: [
      "Azure AI Foundry",
      "Azure OpenAI",
      "M365 Copilot",
      "OpenTelemetry",
      "Terraform",
      "Bicep",
      "Cosmos DB",
      "PostgreSQL",
      "CI/CD",
    ],
  },
  {
    company: "Student Council MIT, Manipal",
    role: "Development Team Lead (prev. Development Team Member)",
    type: "Leadership",
    duration: "Dec 2024 – Present · 1 yr 11 mos",
    location: "Manipal · Hybrid",
    icon: FaUsers,
    colorClasses: {
      border: "border-purple-500/30 hover:border-purple-500/60 hover:shadow-purple-500/10",
      iconBg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      roleText: "text-purple-300",
      accentText: "text-purple-400",
      bullet: "text-purple-400",
      tag: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    },
    highlight: "Development Team Lead (Nov 2025 – Present) · Member (Dec 2024 – Nov 2025)",
    achievements: [
      "Led the development of multiple institute-wide web platforms including the Club Management System, M# Hackathon website, Tech Fest website, Cultural Club website, Judge Portal, and Perm Portal using Next.js and modern web technologies.",
      "Developed scalable full-stack features for event management, registrations, permissions, and judge workflows, enhancing operational efficiency across campus events.",
      "Collaborated in an Agile development team, contributing to sprint planning, code reviews, debugging, and deployment workflows.",
      "Delivered platforms supporting 5,000+ registrations and 10,000+ website visits with robust uptime.",
    ],
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "Agile",
      "System Design",
      "Code Reviews",
    ],
  },
  {
    company: "Revels, MIT Manipal",
    role: "Core Committee Member (System Admin & Web Dev)",
    type: "Core Committee",
    duration: "Dec 2025 – Mar 2026 · 4 mos",
    location: "Manipal · Hybrid",
    icon: FaCalendarAlt,
    colorClasses: {
      border: "border-pink-500/30 hover:border-pink-500/60 hover:shadow-pink-500/10",
      iconBg: "bg-pink-500/10 border-pink-500/30 text-pink-400",
      roleText: "text-pink-300",
      accentText: "text-pink-400",
      bullet: "text-pink-400",
      tag: "bg-pink-500/10 text-pink-300 border-pink-500/30",
    },
    achievements: [
      "Handled system administration and web development for Revels, the flagship national cultural festival of MIT Manipal.",
      "Managed infrastructure readiness, server stability, and load handling to deliver uninterrupted digital experiences during high-traffic festival periods.",
    ],
    skills: [
      "System Administration",
      "Web Development",
      "Traffic Management",
      "Infrastructure",
    ],
  },
  {
    company: "TechTatva, MIT Manipal",
    role: "Core Committee Member (Manipal Hackathon)",
    type: "Core Committee",
    duration: "Jun 2025 – Oct 2025 · 5 mos",
    location: "Manipal · On-site",
    icon: FaLaptopCode,
    colorClasses: {
      border: "border-amber-500/30 hover:border-amber-500/60 hover:shadow-amber-500/10",
      iconBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
      roleText: "text-amber-300",
      accentText: "text-amber-400",
      bullet: "text-amber-400",
      tag: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    },
    highlight: "Certificate of Recognition Awarded",
    achievements: [
      "Developed the main M# Hackathon website, which handled 10,000+ visits and 5,000+ registrations smoothly with zero downtime.",
      "Built a Bug Bounty platform utilized in the internal hackathon by judges and moderators.",
      "Designed and optimized the TechTatva landing page for better performance and user engagement.",
      "Contributed to the Judge Portal, streamlining event scoring and evaluation workflows used across all technical events at TechTatva.",
    ],
    skills: [
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "S3",
      "High Concurrency",
      "Zero Downtime",
    ],
  },
  {
    company: "EmergX - AI Hiring Startup",
    role: "Backend Developer Intern",
    type: "Internship",
    duration: "May 2025 – Jul 2025 · 3 mos",
    location: "Remote",
    icon: FaBriefcase,
    colorClasses: {
      border: "border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-emerald-500/10",
      iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      roleText: "text-emerald-300",
      accentText: "text-emerald-400",
      bullet: "text-emerald-400",
      tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    },
    highlight: "Letter of Recommendation (LOR) & Internship Letter Awarded",
    achievements: [
      "Collaborated in an engineering team to develop secure and scalable backend REST APIs for an AI-powered hiring platform.",
      "Designed and integrated database solutions for efficient job listing storage and low-latency retrieval.",
      "Built and deployed automated Selenium-based web scraping pipelines to collect and ingest job data from multiple platforms into the system.",
    ],
    skills: [
      "Python",
      "REST APIs",
      "Selenium",
      "Web Scraping",
      "Database Design",
      "Backend Architecture",
    ],
  },
  {
    company: "IECSE Manipal",
    role: "Management Committee Member · prev. Working Committee",
    type: "Official CS Club",
    duration: "Dec 2023 – Sep 2025 · 1 yr 10 mos",
    location: "Manipal · Hybrid",
    icon: FaCode,
    colorClasses: {
      border: "border-indigo-500/30 hover:border-indigo-500/60 hover:shadow-indigo-500/10",
      iconBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
      roleText: "text-indigo-300",
      accentText: "text-indigo-400",
      bullet: "text-indigo-400",
      tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    },
    highlight: "Management Committee (Sep 2024 – Sep 2025) · Working Committee (Dec 2023 – Sep 2024)",
    achievements: [
      "The Official Computer Science Club of MIT Manipal.",
      "Led technical initiatives, organized hackathons, and coordinated workshops for the student computer science community.",
      "Mentored junior members and organized workshops on various tech domains.",
      "Contributed to club platforms and competitive coding events as part of both the working and management committees.",
    ],
    skills: [
      "Mentorship",
      "Technical Workshops",
      "Hackathons",
      "Community Leadership",
    ],
  },
  {
    company: "Google DSC, MIT Manipal",
    role: "Sub-Head (Development)",
    type: "Leadership",
    duration: "Sep 2023 – Oct 2024 · 1 yr 2 mos",
    location: "Manipal · On-site",
    icon: FaUsers,
    colorClasses: {
      border: "border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/10",
      iconBg: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      roleText: "text-blue-300",
      accentText: "text-blue-400",
      bullet: "text-blue-400",
      tag: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    },
    achievements: [
      "Led development initiatives and technical curriculum for the Google Developer Student Club (#gdscmanipal).",
      "Organized hands-on sessions on Web Development, modern JavaScript, and React.js for student developers.",
      "Coordinated with core leadership to provide technical guidance and mentorship to aspiring software engineers.",
    ],
    skills: [
      "Web Development",
      "React.js",
      "JavaScript",
      "Technical Mentorship",
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

      <div className="max-w-5xl mx-auto relative z-10 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
            Experience
          </h1>
          <p className="text-gray-400 text-lg">
            Engineering internships, technical leadership roles, and production systems delivery.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`bg-white/[0.04] border ${exp.colorClasses.border} rounded-xl p-6 md:p-8 transition-all hover:shadow-xl backdrop-blur-sm`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    {/* Icon container */}
                    <div
                      className={`p-3.5 rounded-xl border ${exp.colorClasses.iconBg} shrink-0 w-fit`}
                    >
                      <Icon className="text-2xl" />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Header row */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {exp.company}
                          </h3>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${exp.colorClasses.tag}`}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <span
                          className={`font-mono text-xs md:text-sm ${exp.colorClasses.accentText} shrink-0`}
                        >
                          {exp.duration}
                        </span>
                      </div>

                      {/* Role and Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                        <h4
                          className={`text-base md:text-lg font-semibold ${exp.colorClasses.roleText}`}
                        >
                          {exp.role}
                        </h4>
                        {exp.location && (
                          <span className="text-xs text-gray-400 font-mono">
                            📍 {exp.location}
                          </span>
                        )}
                      </div>

                      {/* Highlight pill if present */}
                      {exp.highlight && (
                        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-gray-300 font-mono">
                          <FaTrophy className="text-amber-400 shrink-0" />
                          <span>{exp.highlight}</span>
                        </div>
                      )}

                      {/* Bullet points */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed"
                          >
                            <span
                              className={`${exp.colorClasses.bullet} mt-1 shrink-0 font-bold`}
                            >
                              ▹
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill tags */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="pt-3 border-t border-white/5 flex flex-wrap gap-2 items-center">
                          <span className="text-xs text-gray-400 font-mono mr-1">
                            Skills:
                          </span>
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/10 text-xs text-gray-300 font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connecting timeline dot & line */}
                {index < experiences.length - 1 && (
                  <div className="ml-8 my-2 h-4 w-0.5 bg-gradient-to-b from-cyan-500/30 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
