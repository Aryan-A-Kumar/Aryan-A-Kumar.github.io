import React from "react";

// Portfolio component for Aryan Kumar
// Built with Tailwind CSS utility classes. Replace placeholder text, links, and images with your own.

export default function Portfolio() {
  const projects = [
    {
      title: "Search Engine for DSA questions",
      desc: "A simple full-stack project to help users quickly discover relevant DSA problems",
      tech: ["BeautifulSoup", "Selenium", "Nodejs", "React"],
      link: "https://github.com/Aryan-A-Kumar/Leetcode-search-engine/tree/main",
    },
    {
      title: "React Weather Application",
      desc: "React-based web application that utilizes a weather API to provide users with real-time weather conditions.",     tech: ["React", "Javascript", "HTML", "CSS"],
      link: "https://github.com/Aryan-A-Kumar/Weather-Application/tree/master",
    },
    {
      title: "Snake Game Application",
      desc: "A modern web-based implementation of the classic Snake game built using a React.js frontend and a Flask backend. The application includes user authentication, score saving, and persistent high-score tracking using PostgreSQL.",
      tech: ["Python", "Flask", "PostgreSQL", "React"],
      link: "https://github.com/Aryan-A-Kumar/Snake-Game/blob/main/README.md",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Aryan Kumar</h1>
            <p className="text-sm text-gray-500">Full Stack Development Engineer</p>
          </div>
          <nav className="space-x-4 text-sm text-gray-600">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold">Hi, I’m Aryan Kumar</h2>
            <p className="mt-4 text-lg text-gray-700">
              I am a student of Electronics and Communication Engineering from IIT Kharagpur with a Minor in Computer Science and Engineering, graduating in the 2026 batch.
              Currently an ECE Undergraduate specializing in Machine Vision & Intelligent Systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-md shadow-sm hover:opacity-95"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-semibold">Quick Info</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li><strong>Degree:</strong> B.Tech, Electronics & Communication Engineering (IIT Kharagpur)</li>
              <li><strong>Minor:</strong> Computer Science & Engineering</li>
              <li><strong>Batch:</strong> 2026</li>
              <li><strong>Specialization:</strong> Machine Vision & Intelligent Systems</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <p className="mt-2 text-sm text-gray-600">A few highlights — replace these with your projects and links.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-gray-100 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-sm text-slate-700 hover:underline">View on GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills + Experience */}
        <section className="mt-16 grid md:grid-cols-2 gap-8">
          <div id="skills" className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-medium">Programming</h4>
                <ul className="mt-2 space-y-1">
                  <li>C++</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Frameworks & Tools</h4>
                <ul className="mt-2 space-y-1">
                  <li>React</li>
                  <li>Flask</li>
                  <li>Express</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">Experience & Coursework</h3>
            <p className="mt-3 text-sm text-gray-700">
              (Optional) Add internships, research assistant roles, or relevant coursework here. For example: Signal Processing, Computer Vision, Machine Learning, Embedded Systems.
            </p>
          </div>
        </section>

        {/* Footer / Contact */}
        <section id="contact" className="mt-16 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold">Contact</h3>
          {/* <p className="mt-2 text-sm text-gray-600">Email, social links, or a contact form — replace with your preferred contact method.</p> */}

          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-700">
              <p><strong>Email:</strong> <a href="mailto:aryankrkyn@gmail.com" className="hover:underline">aryankrkyn@gmail.com</a></p>
              <p className="mt-1"><strong>GitHub:</strong> <a href="https://github.com/Aryan-A-Kumar" target="_blank" rel="noreferrer" className="hover:underline">github.com/Aryan-A-Kumar</a></p>
              <p className="mt-1"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aryan-kumar-ajay-kumar-5144a531a/" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/aryan-kumar-ajay-kumar</a></p>
            </div>

            {/* <form className="flex-1 md:pl-8">
              <label className="text-sm text-gray-600">Send a quick message</label>
              <div className="mt-2 flex flex-col sm:flex-row gap-2">
                <input aria-label="name" placeholder="Your name" className="flex-1 px-3 py-2 border rounded-md" />
                <input aria-label="email" placeholder="Your email" className="flex-1 px-3 py-2 border rounded-md" />
              </div>
              <textarea aria-label="message" placeholder="Message" className="mt-3 w-full px-3 py-2 border rounded-md" rows={3} />
              <div className="mt-3">
                <button type="button" className="px-4 py-2 bg-slate-900 text-white rounded-md">Send</button>
              </div>
            </form> */}
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aryan Kumar — Built with ❤️
        </footer>
      </main>
    </div>
  );
}
