"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaLaptopCode,
  FaExternalLinkAlt,
} from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";

const coursework = [
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Computer Networks and Protocol",
  "Database Management Systems",
  "Operating Systems",
  "Software Design Technology",
];

const languages = [
  "C++",
  "C",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
];

const techAndTools = [
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "REST APIs",
  "JWT",
  "RBAC",
  "Git",
  "GitHub",
  "Postman",
  "Azure",
  "AWS",
  "CI/CD",
  "Terraform",
  "Azure AI Foundry",
  "Azure DevOps",
];

const certifications = [
  {
    title: "Microsoft Certified: AI Business Professional",
    issuer: "Microsoft",
    issueDate: "Jul 2026",
    credentialId: "5B242F31A46D49D7",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/LakshyaJain-0621/5B242F31A46D49D7?sharingId",
    issuerBadgeColor: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  },
  {
    title: "GitHub Copilot",
    issuer: "Microsoft",
    issueDate: "Jul 2026 · Expires Jul 2028",
    credentialId: "EA1B16DF8A3B31A3",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/LakshyaJain-0621/EA1B16DF8A3B31A3?sharingId",
    issuerBadgeColor: "border-purple-500/40 bg-purple-500/10 text-purple-300",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    issueDate: "Jun 2026",
    credentialId: "EB9A8269FEC5A7AF",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/LakshyaJain-0621/EB9A8269FEC5A7AF?sharingId",
    issuerBadgeColor: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    issueDate: "Jun 2026",
    credentialId: "6ABB0DCE795862A5",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/LakshyaJain-0621/6ABB0DCE795862A5?sharingId",
    issuerBadgeColor: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  },
  {
    title: "IBM Data Science Specialization",
    issuer: "IBM",
    issueDate: "Apr 2026",
    credentialId: "BJ7ANPTALBAL",
    url: "https://www.coursera.org/account/accomplishments/specialization/BJ7ANPTALBAL",
    issuerBadgeColor: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
  },
  {
    title: "Google AI Professional Certificate",
    issuer: "Google",
    issueDate: "Apr 2026",
    credentialId: null,
    url: "https://coursera.org/share/0f5883d9123359e0a9e6eb4afb150f4d",
    issuerBadgeColor: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    issueDate: "Apr 2026",
    credentialId: "43VX44VNVGKM",
    url: "https://www.coursera.org/account/accomplishments/records/43VX44VNVGKM",
    issuerBadgeColor: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    issueDate: "Apr 2026",
    credentialId: "WDS9TCXIK1QQ",
    url: "https://www.coursera.org/account/accomplishments/records/WDS9TCXIK1QQ",
    issuerBadgeColor: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
  },
  {
    title: "Big Data Integration and Processing",
    issuer: "UC San Diego",
    issueDate: "Apr 2026",
    credentialId: "WTTNSPL53ZW6",
    url: "https://www.coursera.org/account/accomplishments/records/WTTNSPL53ZW6",
    issuerBadgeColor: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  },
  {
    title: "Big Data Modeling and Management Systems",
    issuer: "UC San Diego",
    issueDate: "Apr 2026",
    credentialId: "K4WGMVZDCFKC",
    url: "https://www.coursera.org/account/accomplishments/records/K4WGMVZDCFKC",
    issuerBadgeColor: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  },
  {
    title: "Introduction to Big Data",
    issuer: "UC San Diego",
    issueDate: "Mar 2026",
    credentialId: "XWX9N903EF0P",
    url: "https://www.coursera.org/account/accomplishments/records/XWX9N903EF0P",
    issuerBadgeColor: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  },
  {
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey & Company",
    issueDate: "Dec 2025",
    credentialId: null,
    url: "https://www.credly.com/badges/124abcff-a9db-4c76-96d0-e75f15e39af5/public_url",
    issuerBadgeColor: "border-teal-500/40 bg-teal-500/10 text-teal-300",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    issueDate: "Jun 2025",
    credentialId: "RYD2VM1XPF7O",
    url: "https://www.coursera.org/account/accomplishments/records/RYD2VM1XPF7O",
    issuerBadgeColor: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    issueDate: "Oct 2024",
    credentialId: "33G4NHV33S69",
    url: "https://www.coursera.org/account/accomplishments/records/33G4NHV33S69",
    issuerBadgeColor: "border-rose-500/40 bg-rose-500/10 text-rose-300",
  },
  {
    title: "React Basics",
    issuer: "Meta",
    issueDate: "Oct 2024",
    credentialId: "ELS67AL9NX6W",
    url: "https://www.coursera.org/account/accomplishments/records/ELS67AL9NX6W",
    issuerBadgeColor: "border-sky-500/40 bg-sky-500/10 text-sky-300",
  },
  {
    title: "Learn C++ Programming - Beginner to Advance",
    issuer: "Udemy",
    issueDate: "Jun 2024",
    credentialId: "UC-65bf9334-5331-4fb4-9b78-d05139fa093f",
    url: "https://www.udemy.com/certificate/UC-65bf9334-5331-4fb4-9b78-d05139fa093f",
    issuerBadgeColor: "border-purple-500/40 bg-purple-500/10 text-purple-300",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      <Navbar />

      <div className="max-w-6xl mx-auto relative z-10 px-4 py-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
            About Me
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Education, technical proficiency, and verified industry licenses &amp; certifications.
          </p>
        </motion.div>

        {/* Row 1: Education & Technologies (Symmetrical 2-Column Grid) */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Education Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-3xl" />
              Education
            </h2>

            <div className="bg-white/[0.04] border border-cyan-500/30 rounded-xl p-6 md:p-7 hover:border-cyan-500/60 transition-all backdrop-blur-sm flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Manipal Institute of Technology, Manipal
                </h3>
                <p className="text-cyan-400 font-semibold mb-2">
                  B.Tech in Computer and Communication Engineering
                </p>
                <div className="text-gray-400 mb-6">
                  <span className="font-mono text-sm text-gray-300">Expected Graduation: 2027</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-sm text-gray-300 font-semibold">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 bg-cyan-500/10 text-cyan-300 rounded-md text-xs md:text-sm border border-cyan-500/20 font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technologies & Tools Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 flex items-center gap-3 mb-4">
              <FaCode className="text-3xl" />
              Technologies &amp; Tools
            </h2>

            <div className="bg-white/[0.04] border border-cyan-500/30 rounded-xl p-6 md:p-7 hover:border-cyan-500/60 transition-all backdrop-blur-sm flex-1 flex flex-col justify-between space-y-6">
              {/* Languages */}
              <div>
                <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30 font-medium hover:border-purple-400 hover:bg-purple-500/30 transition-all"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies & Tools */}
              <div className="pt-2 border-t border-white/10">
                <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  Technologies &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techAndTools.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-cyan-500/15 text-cyan-200 rounded-lg text-sm border border-cyan-500/30 font-medium hover:border-cyan-400 hover:bg-cyan-500/25 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Licenses & Certifications (Clean 3-Column Grid) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 flex items-center gap-3">
              <FaCertificate className="text-2xl md:text-3xl" />
              Licenses &amp; Certifications
            </h2>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              16 Verified Credentials
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
            {certifications.map((cert) => (
              <div
                key={cert.title + (cert.credentialId || "")}
                className="bg-white/[0.04] border border-white/10 hover:border-cyan-500/50 rounded-xl p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${cert.issuerBadgeColor}`}
                    >
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] text-gray-400 font-mono">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h4 className="font-semibold text-white text-base leading-snug group-hover:text-cyan-300 transition-colors mb-2">
                    {cert.title}
                  </h4>

                  {cert.credentialId && (
                    <div className="text-[11px] text-gray-400 font-mono mb-4 break-all">
                      <span className="text-gray-400">ID:</span> {cert.credentialId}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-400">Credential</span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Show credential
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Row 3: Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-center"
        >
          <div className="w-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8 backdrop-blur-sm">
            <FaLaptopCode className="text-5xl text-cyan-400 mx-auto mb-4" />
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Passionate about engineering high-performance backend systems, low-level architectures, and scalable cloud-native infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
