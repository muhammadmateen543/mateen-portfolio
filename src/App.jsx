import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";

export default function App() {
  // ------- SCROLL PROGRESS -------
  const { scrollYProgress } = useScroll();

  // ------- DATA -------
  const skills = {
    Languages: ["C++", "Java", "Python", "Kotlin", "JavaScript", "SQL", "Assembly"],
    Web: ["MERN Stack (MongoDB, Express.js, React.js, Node.js)", "HTML", "CSS", "Bootstrap", "TailwindCSS"],
    Databases: ["MongoDB", "MySQL", "MS SQL Server", "Firebase"],
    AppDevelopment: ["Android (Kotlin, Java, XML)", "Firebase Integration"],
    Tools: ["Git/GitHub", "SAP ERP", "Figma", "Postman", "VS Code"],
    SoftSkills: ["Problem-Solving", "Teamwork", "Leadership", "Communication"],
  };

  const certifications = [
    "SAP S/4HANA Sales — Credly Verified (June 2025)",
    "SAP S/4HANA Supply Chain for Transportation Management — Credly Verified (June 2025)",
    "Python Programming — GeeksforGeeks (July 2024)",
  ];

  const experience = [
    {
      role: "IT Intern",
      company: "Fauji Fertilizer Company Limited (FFC)",
      period: "June 2025 – July 2025",
      desc: "Assisted the IT team with ERP support, data tasks and documentation. Learned practical workflows and collaborated on small internal improvements.",
    },
  ];

  const projects = [
  {
    title: "E-Commerce Website",
    tech: "MERN (MongoDB, Express.js, React.js, Node.js)",
    desc: "Full-stack prototype with catalog, category filtering, cart, guest checkout, and admin dashboard.",
    code: "https://github.com/muhammadmateen543/blynk-eCommerce-Website",
  },
  {
    title: "BookConnect",
    tech: "Android (Kotlin, Java, XML), Firebase",
    desc: "Post, browse, and exchange books. Firebase Auth + Firestore DB, modern UI navigation.",
    code: "https://github.com/muhammadmateen543/BookConnect",
  },
  {
    title: "Health Care System",
    tech: "MERN (MongoDB, Express.js, React.js, Node.js)",
    desc: "A healthcare management system for patients and doctors, enabling appointment booking, medical records tracking, and secure user authentication.",
    code: "https://github.com/muhammadmateen543/Health-Care-System",
  },
  {
    title: "Shared Fast",
    tech: "Android (Kotlin, XML)",
    desc: "Capture, organize, and share images into folder structures with smooth UX.",
    code: "https://github.com/muhammadmateen543",
  },
  {
    title: "Calculator",
    tech: "Android (Java, XML)",
    desc: "Scientific calculator with advanced functions and responsive layout.",
    code: "https://github.com/muhammadmateen543/Calculator",
  },
  {
    title: "Attendance & Leave Management System",
    tech: "C++ (OOP, File Handling)",
    desc: "Console app for attendance and leave approvals with basic persistence.",
    code: "https://github.com/muhammadmateen543/Attendance-and-Leave-Management-System",
  },
  {
    title: "iNotebook",
    tech: "Node.js, Express.js, MongoDB, Bootstrap",
    desc: "CRUD notes app with auth and mobile-friendly UI.",
    code: "https://github.com/muhammadmateen543/iNoteBook",
  },
  {
    title: "NewsWeb",
    tech: "JavaScript, NewsAPI, HTML, CSS",
    desc: "Fetches live headlines; filter by category and country.",
    code: "https://github.com/muhammadmateen543/NewsWeb",
  },
  {
    title: "Social Networking System",
    tech: "C++ (OOP Principles)",
    desc: "Simulated network applying inheritance, encapsulation, abstraction.",
    code: "https://github.com/muhammadmateen543",
  },
];


  // ------- FX HELPERS -------
  const glass = "bg-white/70 backdrop-blur-xl";
  const card =
    "rounded-2xl shadow-xl ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl";

  return (
    <div className="relative min-h-screen overflow-x-clip bg-gradient-to-b from-white via-indigo-50 to-purple-100 text-slate-800 selection:bg-indigo-500/20">

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500"
        style={{ scaleX: scrollYProgress }}
      />

      {/* NAV */}
      <nav className="sticky top-0 z-40 px-6">
        <div className={`${glass} ${card} mx-auto mt-3 max-w-6xl px-4 py-3`}>
          <div className="flex items-center justify-between">
            <a href="#home" className="text-lg font-bold">
              <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Muhammad Mateen</span>
            </a>
            <div className="hidden gap-6 md:flex">
              <a href="#skills" className="hover:text-indigo-600">Skills</a>
              <a href="#projects" className="hover:text-indigo-600">Projects</a>
              <a href="#experience" className="hover:text-indigo-600">Experience</a>
              <a href="#certs" className="hover:text-indigo-600">Certifications</a>
            </div>
            {/* Resume button here */}
            <a
              href="/Muhammad Mateen - Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-white shadow hover:opacity-90 transition"
            >
              <FileDown className="h-5 w-5" />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        {/* Left */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Muhammad{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Mateen
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Software Developer 💻", 1800,
              "MERN Stack Developer 🌐", 1800,
              "Android Developer 📱", 1800,
            ]}
            wrapper="p"
            cursor
            repeat={Infinity}
            className="mt-3 text-xl text-slate-600"
          />

          {/* Social row */}
          <div className="mt-8 flex items-center gap-4">
            <a href="https://linkedin.com/in/muhammadmateen543" target="_blank" rel="noopener noreferrer" className={`${glass} ${card} p-3`}>
              <Linkedin className="h-6 w-6 text-indigo-600" />
            </a>
            <a href="https://github.com/muhammadmateen543" target="_blank" rel="noopener noreferrer" className={`${glass} ${card} p-3`}>
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:muhammadmateen543@gmail.com" className={`${glass} ${card} p-3`}>
              <Mail className="h-6 w-6 text-rose-500" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} glareEnable glareBorderRadius="9999px">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-indigo-500 via-fuchsia-500 to-pink-500 blur opacity-40" />
              <img
                src="/profile.jpeg"
                alt="Muhammad Mateen"
                className="relative h-80 w-80 rounded-full object-cover shadow-2xl ring-8 ring-white"
              />
            </div>
          </Tilt>
        </div>
      </section>

      {/* STATS / QUICK FACTS */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { k: "Projects", v: "8+" },
            { k: "Stacks", v: "MERN & Android" },
            { k: "Databases", v: "MongoDB • MySQL • SQL Server" },
            { k: "Open To", v: "Full-time / Part-time" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className={`${glass} ${card} px-5 py-4 text-center`}
            >
              <div className="text-2xl font-bold">{s.v}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{s.k}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <section id="skills" className="mx-auto mt-14 max-w-6xl px-6">
        <div className={`${glass} ${card} overflow-hidden px-4 py-6`}>
          <h2 className="mb-4 text-center text-3xl font-bold">Skills</h2>
          <Marquee pauseOnHover gradient={false} speed={45} className="py-2">
            {Object.values(skills)
              .flat()
              .map((tag, i) => (
                <span
                  key={i}
                  className="mx-2 inline-flex items-center rounded-full border border-slate-200/60 bg-white/60 px-4 py-2 text-sm dark:border-white/10 dark:bg-white/5"
                >
                  {tag}
                </span>
              ))}
          </Marquee>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([cat, items]) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`${glass} ${card} p-6`}
              >
                <h3 className="mb-3 text-lg font-semibold text-indigo-600 dark:text-indigo-400">{cat}</h3>
                <ul className="grid grid-cols-1 gap-1 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
                  {items.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Tilt key={i} tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.15}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`${glass} ${card} group relative p-7`}
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-fuchsia-500/0 to-pink-500/0 opacity-0 blur transition duration-500 group-hover:from-indigo-500/20 group-hover:via-fuchsia-500/20 group-hover:to-pink-500/20" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                    {p.tech}
                  </p>
                  <p className="mt-3 text-slate-700 dark:text-slate-300">{p.desc}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:shadow dark:border-white/10 dark:bg-white/10"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold">Experience</h2>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-indigo-500/40 to-fuchsia-500/40" />
          {experience.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="ml-10"
            >
              <div className="mb-6 flex items-start gap-4">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 ring-4 ring-white dark:ring-slate-900" />
                <div className={`${glass} ${card} w-full p-5`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{e.period}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{e.company}</p>
                  <p className="mt-2 text-slate-700 dark:text-slate-300">{e.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className={`${glass} ${card} p-6`}
            >
              {c}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
