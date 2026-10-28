// Single source of truth for all portfolio content.

export const profile = {
  name: "Lakshya Jain",
  email: "lakshyajain906@gmail.com",
  phone: "+91 89055 50030",
  phoneHref: "tel:+918905550030",
  github: "https://github.com/lakshya1333",
  linkedin: "https://linkedin.com/in/lakshya-jain-490ab9211",
  cv: "/Lakshya_Jain_CV.pdf",
};

export type System = {
  title: string;
  where: string;
  metric: string;
  metricLabel: string;
  summary: string;
  details: string[];
  stack: string[];
  url: string;
};

export const systems: System[] = [
  {
    title: "Fest Entry Scanner",
    where: "Revels ’26",
    metric: "<100ms",
    metricLabel: "gate verification for 10,000+ attendees, with no internet",
    summary:
      "Offline-first QR entry system running on an air-gapped LAN across multiple gates.",
    details: [
      "Scanned 10,000+ attendees across multiple scanners with sub-100ms verification, entirely offline",
      "Eliminated duplicate entries with atomic database writes and encrypted QR verification",
      "Role-based access for security admins and gate scanners, with multi-ticket QR support",
      "Bulk Excel attendee import and real-time crowd occupancy tracking",
    ],
    stack: ["Next.js", "Django REST Framework", "MongoDB", "Gunicorn", "Redis", "Docker", "JWT"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "Event Judge Platform",
    where: "TechTatva ’25 & Revels ’26",
    metric: "200+",
    metricLabel: "events scored live by 100+ judges at once",
    summary:
      "High-concurrency judging and live-results platform, scored from phones and tablets across multi-round competitions.",
    details: [
      "Built for zero score loss and no tampering: atomic transactions, 4-tier RBAC with object-level access control, and audit logs",
      "Blind moderation hides raw scores from organisers to prevent evaluation bias",
      "Weighted scoring, judge normalisation and tie-breaking",
      "Live leaderboard for 1,000+ spectators",
    ],
    stack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Drizzle ORM", "Redis", "Docker", "JWT", "AWS"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "Fest Food Coupon System",
    where: "Revels ’26",
    metric: "500+",
    metricLabel: "concurrent wallets with zero double-spends",
    summary:
      "The fest’s food coupons, rebuilt as a role-based wallet with a 3-level budget allocation engine.",
    details: [
      "Budget flows Admin → HFS → OC/CC/Volunteer, with automated midnight wallet resets",
      "Row-level locking inside ACID transactions prevents double-spending and race conditions",
      "QR payments signed with 30-second one-time HMAC codes",
      "Immutable audit log for every transaction",
    ],
    stack: ["Next.js", "Django REST Framework", "PostgreSQL", "Redis", "Docker", "JWT", "HMAC-SHA256", "AWS"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "OM Portal",
    where: "TechTatva · Outstation management",
    metric: "200+",
    metricLabel: "teams from 20+ colleges housed and checked out",
    summary:
      "Registration, arrival, accommodation and checkout for every outstation team at the fest, built from scratch.",
    details: [
      "Dynamic room allocation by team size, gender and availability",
      "Atomic transactions stop double-booked rooms when admins allocate at the same time",
      "Universal search, data export, activity logs, version history with rollback, bulk checkout",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Docker"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "SW Vista",
    where: "Student Council · Venue booking",
    metric: "187",
    metricLabel: "automated tests across 6 apps",
    summary:
      "Venue booking with multi-stage approvals from Faculty Advisor, Student Council, Student Welfare and Security.",
    details: [
      "Priority-based conflict resolution: higher-priority requests win, overlapping lower-priority bookings are auto-rejected",
      "Role-based access control across every approving authority",
      "Production setup with Gunicorn, Nginx/Caddy and CSRF protection",
    ],
    stack: ["Django", "Django REST Framework", "Next.js", "TypeScript", "PostgreSQL", "Gunicorn", "Nginx"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "Perm Portal",
    where: "Campus permission & verification",
    metric: "5",
    metricLabel: "roles moved from paper lists to barcode scans",
    summary:
      "Replaced paper permission lists during high-traffic events and late-hour movement windows.",
    details: [
      "Dedicated interfaces for Security, Ops/HRD, Student Council, Caretakers and Admins",
      "Barcode verification lets security confirm an approved permission in seconds",
      "Approval workflows with complete audit trails",
    ],
    stack: ["Next.js", "Django REST Framework", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    url: "https://github.com/lakshya1333",
  },
];

export type Project = {
  title: string;
  kind: "systems" | "web" | "data";
  line: string;
  stack: string[];
  url: string;
};

export const projects: Project[] = [
  {
    title: "Multithreaded proxy server",
    kind: "systems",
    line: "HTTP proxy in C on raw POSIX sockets, with a mutex- and semaphore-guarded LRU cache and time-based eviction.",
    stack: ["C", "POSIX", "TCP/IP", "Pthreads"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "Simpfuscator",
    kind: "systems",
    line: "ELF binary obfuscator with XOR and RSA encryption, RSA-PSS signatures and sandboxed live processing.",
    stack: ["Python", "React", "TypeScript", "Docker"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "M# Hackathon website",
    kind: "web",
    line: "10,000+ visits and 5,000+ registrations with zero downtime, on auto-scaling AWS with S3 uploads.",
    stack: ["React", "Node.js", "AWS", "S3", "Docker"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "Club Management System",
    kind: "web",
    line: "Lets college administration monitor and manage club events across MIT Manipal. Built with a 6-person team.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "Chatty",
    kind: "web",
    line: "Anonymous room-based group chat over WebSockets. No accounts, messages tied only to the live session.",
    stack: ["TypeScript", "WebSocket", "Node.js", "React"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "Chat with video calling",
    kind: "web",
    line: "Full-stack chat with friends, themes and peer-to-peer video calls.",
    stack: ["React", "Node.js", "MongoDB", "TanStack Query"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "Progress Tracker",
    kind: "web",
    line: "Turns your GitHub activity into a LaTeX resume, with OAuth sign-in and one-click PDF export.",
    stack: ["React", "Node.js", "GitHub API", "LaTeX"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "Mental health platform",
    kind: "web",
    line: "Mood tracking, anonymous peer chat rooms and mindfulness games.",
    stack: ["React", "Express", "MongoDB", "Socket.io"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "MyBrain",
    kind: "web",
    line: "Save and tag YouTube videos and tweets in one place, with Zod-validated APIs.",
    stack: ["TypeScript", "React", "MongoDB", "Zod"],
    url: "https://github.com/lakshya1333",
  },
  {
    title: "Stock analytics",
    kind: "data",
    line: "Candlesticks, moving averages, RSI, MACD and risk-return comparison across portfolios.",
    stack: ["Python", "Pandas", "Plotly"],
    url: "https://github.com/lakshya1333",
  },
];

export type Role = {
  org: string;
  role: string;
  start: string;
  end: string;
  place: string;
  award?: string;
  points: string[];
  skills: string[];
};

export const roles: Role[] = [
  {
    org: "Microsoft",
    role: "Technology Consultant Intern, Cloud & AI",
    start: "May 2026",
    end: "Jul 2026",
    place: "Hyderabad, on-site",
    award: "3rd place, Microsoft Garage Hackathon",
    points: [
      "Moved an internal Project Manager AI agent from low-code to a pro-code architecture on Azure AI Foundry with sub-agent orchestration, shipped to Teams and M365 Copilot, replacing manual Excel metric work.",
      "Built its observability layer with OpenTelemetry, Application Insights and Power BI, tracking active users, sub-agent usage and token spend so leadership could see adoption and cost.",
      "Wired secure agentic workflows across Entra ID, Cosmos DB, PostgreSQL, Teams and enterprise APIs, with privacy-conscious memory, tool calling and Azure DevOps CI/CD (Terraform, Bicep).",
      "Contributed backend engineering to GCID’s in-house gaming platform.",
    ],
    skills: ["Azure AI Foundry", "Azure OpenAI", "M365 Copilot", "OpenTelemetry", "Terraform", "Bicep", "Cosmos DB"],
  },
  {
    org: "Student Council, MIT Manipal",
    role: "Development Team Lead",
    start: "Dec 2024",
    end: "Now",
    place: "Manipal, hybrid",
    points: [
      "Lead development of institute-wide platforms: Club Management System, M# Hackathon, Tech Fest and cultural club sites, Judge Portal and Perm Portal.",
      "Platforms have carried 5,000+ registrations and 10,000+ visits.",
      "Run sprint planning and code reviews for the team. Member from Dec 2024, lead since Nov 2025.",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "System design"],
  },
  {
    org: "Revels, MIT Manipal",
    role: "Core Committee, System Admin & Web Dev",
    start: "Dec 2025",
    end: "Mar 2026",
    place: "Manipal, hybrid",
    points: [
      "Kept servers stable and load handled through the traffic peaks of MIT Manipal’s national cultural festival.",
    ],
    skills: ["Infrastructure", "System administration"],
  },
  {
    org: "TechTatva, MIT Manipal",
    role: "Core Committee, Manipal Hackathon",
    start: "Jun 2025",
    end: "Oct 2025",
    place: "Manipal, on-site",
    award: "Certificate of Recognition",
    points: [
      "Built the M# Hackathon site: 10,000+ visits and 5,000+ registrations with zero downtime.",
      "Built a bug bounty platform for judges and moderators, and the Judge Portal used across every technical event.",
    ],
    skills: ["React", "Node.js", "AWS", "Docker"],
  },
  {
    org: "EmergX",
    role: "Backend Developer Intern",
    start: "May 2025",
    end: "Jul 2025",
    place: "Remote",
    award: "Letter of recommendation",
    points: [
      "Built secure REST APIs for an AI hiring platform and designed job-listing storage for low-latency reads.",
      "Shipped Selenium scraping pipelines that ingest job data from multiple platforms.",
    ],
    skills: ["Python", "REST APIs", "Selenium", "Database design"],
  },
  {
    org: "IECSE Manipal",
    role: "Management Committee",
    start: "Dec 2023",
    end: "Sep 2025",
    place: "Manipal",
    points: [
      "Ran hackathons, workshops and competitive coding events for MIT Manipal’s official CS club, and mentored junior members.",
    ],
    skills: ["Mentorship", "Hackathons"],
  },
  {
    org: "Google DSC, MIT Manipal",
    role: "Sub-Head, Development",
    start: "Sep 2023",
    end: "Oct 2024",
    place: "Manipal",
    points: ["Taught web development, modern JavaScript and React to student developers."],
    skills: ["React", "JavaScript", "Teaching"],
  },
];

export const education = {
  school: "Manipal Institute of Technology",
  degree: "B.Tech, Computer and Communication Engineering",
  grad: "2027",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Systems",
    "Object-Oriented Programming",
    "Software Design",
  ],
};

export const stack = {
  Languages: ["C++", "C", "Java", "Python", "TypeScript", "JavaScript", "SQL"],
  Backend: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB", "Redis", "REST", "JWT / RBAC"],
  Cloud: ["Azure", "Azure AI Foundry", "Azure DevOps", "AWS", "Docker", "Terraform", "CI/CD"],
  Frontend: ["Next.js", "React"],
};

export type Cert = { title: string; issuer: string; date: string; url: string };

export const certs: Cert[] = [
  { title: "AI Business Professional", issuer: "Microsoft", date: "Jul 2026", url: "https://learn.microsoft.com/api/credentials/share/en-us/LakshyaJain-0621/5B242F31A46D49D7?sharingId" },
  { title: "GitHub Copilot", issuer: "Microsoft", date: "Jul 2026", url: "https://learn.microsoft.com/api/credentials/share/en-us/LakshyaJain-0621/EA1B16DF8A3B31A3?sharingId" },
  { title: "Azure AI Fundamentals", issuer: "Microsoft", date: "Jun 2026", url: "https://learn.microsoft.com/api/credentials/share/en-us/LakshyaJain-0621/EB9A8269FEC5A7AF?sharingId" },
  { title: "Azure Fundamentals", issuer: "Microsoft", date: "Jun 2026", url: "https://learn.microsoft.com/api/credentials/share/en-us/LakshyaJain-0621/6ABB0DCE795862A5?sharingId" },
  { title: "Data Science Specialization", issuer: "IBM", date: "Apr 2026", url: "https://www.coursera.org/account/accomplishments/specialization/BJ7ANPTALBAL" },
  { title: "Google AI Professional Certificate", issuer: "Google", date: "Apr 2026", url: "https://coursera.org/share/0f5883d9123359e0a9e6eb4afb150f4d" },
  { title: "Machine Learning with Python", issuer: "IBM", date: "Apr 2026", url: "https://www.coursera.org/account/accomplishments/records/43VX44VNVGKM" },
  { title: "Data Analysis with Python", issuer: "IBM", date: "Apr 2026", url: "https://www.coursera.org/account/accomplishments/records/WDS9TCXIK1QQ" },
  { title: "Big Data Integration and Processing", issuer: "UC San Diego", date: "Apr 2026", url: "https://www.coursera.org/account/accomplishments/records/WTTNSPL53ZW6" },
  { title: "Big Data Modeling and Management", issuer: "UC San Diego", date: "Apr 2026", url: "https://www.coursera.org/account/accomplishments/records/K4WGMVZDCFKC" },
  { title: "Introduction to Big Data", issuer: "UC San Diego", date: "Mar 2026", url: "https://www.coursera.org/account/accomplishments/records/XWX9N903EF0P" },
  { title: "Forward Program", issuer: "McKinsey.org", date: "Dec 2025", url: "https://www.credly.com/badges/124abcff-a9db-4c76-96d0-e75f15e39af5/public_url" },
  { title: "Python for Data Science, AI & Development", issuer: "IBM", date: "Jun 2025", url: "https://www.coursera.org/account/accomplishments/records/RYD2VM1XPF7O" },
  { title: "Supervised Machine Learning", issuer: "DeepLearning.AI", date: "Oct 2024", url: "https://www.coursera.org/account/accomplishments/records/33G4NHV33S69" },
  { title: "React Basics", issuer: "Meta", date: "Oct 2024", url: "https://www.coursera.org/account/accomplishments/records/ELS67AL9NX6W" },
  { title: "Learn C++ Programming", issuer: "Udemy", date: "Jun 2024", url: "https://www.udemy.com/certificate/UC-65bf9334-5331-4fb4-9b78-d05139fa093f" },
];
