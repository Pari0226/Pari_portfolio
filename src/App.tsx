import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Nav */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#hero"
            className="text-lg font-medium tracking-tight text-[#FFF1A8]"
          >
            PS
          </a>
          <div className="flex gap-8 text-sm">
            <a href="#projects" className="hover:text-pink-200 transition-colors">
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-[#FFF1A8] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left content */}
          <div>
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-[#FFF1A8]">
              Pari Singh
            </h1>

            <p className="text-3xl lg:text-4xl text-gray-300 mb-8 leading-tight">
              I design and build{" "}
              <span className="text-pink-200">full-stack</span>
              <br />
              <span className="text-pink-200">& ML-powered</span> systems.
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-xl leading-relaxed">
              Final-year CSE student focused on real-world, production-grade
              applications.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-pink-200 text-black px-8 py-4 text-lg font-medium hover:bg-pink-100 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-white/30 px-8 py-4 text-lg font-medium hover:border-[#FFF1A8] hover:text-[#FFF1A8] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex justify-center relative">
            {/* Butter yellow block */}
            <div className="absolute top-6 left-6 w-80 h-80 lg:w-96 lg:h-96 bg-[#FFF1A8] rounded-lg rotate-3"></div>

            {/* Image */}
            <img
              src="/photo.jpg"
              alt="Pari Singh"
              className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-7xl lg:text-8xl font-bold mb-20 text-pink-200">
  Projects
</h2>

          <div className="space-y-24">
            {/* Project 1 */}
            <div className="grid lg:grid-cols-3 gap-8 pb-24 border-b border-white/10">
              <div className="lg:col-span-2">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  SafeWay
                </h3>
                <p className="text-xl text-gray-300 mb-4">
                  Women Safety Route Recommendation System
                </p>
                <p className="text-lg text-gray-400 mb-6">
                  Real-time women safety route recommendation system using risk
                  scoring, live alerts, and emergency notifications.
                </p>
                <p className="text-sm text-[#FFF1A8] mb-8">
                  JWT auth, Redis caching (+35% efficiency), Twilio alerts, live
                  tracking.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "Node", "PostgreSQL", "Redis"].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/Pari0226/SafeWay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#FFF1A8] hover:text-yellow-100"
                >
                  <Github size={20} />
                  GitHub <ExternalLink size={16} />
                </a>
                <a
                  href="https://safe-way.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#FFF1A8] hover:text-yellow-100"
                >
                  Live <ExternalLink size={16} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1Xuf6poTiHZzewLBzmrv5kQBKenHkme__/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#FFF1A8] hover:text-yellow-100"
                >
                  Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid lg:grid-cols-3 gap-8 pb-24 border-b border-white/10">
              <div className="lg:col-span-2">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  MindSpace
                </h3>
                <p className="text-xl text-gray-300 mb-4">
                  AI Mood Tracking & Prediction App
                </p>
                <p className="text-lg text-gray-400 mb-6">
                  AI-powered mood tracking with 7-day prediction using NLP.
                </p>
                <p className="text-sm text-pink-200 mb-8">
                  62.14% prediction accuracy on real emotion datasets.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Flask", "Python", "scikit-learn", "NLP"].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/Pari0226/MindSpace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-200 hover:text-pink-100"
                >
                  <Github size={20} />
                  GitHub <ExternalLink size={16} />
                </a>
                <a
                  href="https://drive.google.com/file/d/12DqdVPHE6poTWr1ui2zGg7H_MiFS_F8t/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-200 hover:text-pink-100"
                >
                  Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  PhishNet
                </h3>
                <p className="text-xl text-gray-300 mb-4">
                  Phishing URL Detection
                </p>
                <p className="text-lg text-gray-400 mb-6">
                  ML system detecting phishing URLs in real time.
                </p>
                <p className="text-sm text-[#FFF1A8] mb-8">
                  93.4% accuracy with domain-based feature engineering.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Python", "Flask", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/Pari0226/PhishNet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#FFF1A8] hover:text-yellow-100"
                >
                  <Github size={20} />
                  GitHub <ExternalLink size={16} />
                </a>
                <a
                  href="https://phishnet-app.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#FFF1A8] hover:text-yellow-100"
                >
                  Live <ExternalLink size={16} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1OGcGCgF_rrAO3moFFJwew9nF8hGP4WC5/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#FFF1A8] hover:text-yellow-100"
                >
                  Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl lg:text-6xl font-bold mb-12">
            Let’s Connect
          </h2>
          <a
            href="mailto:singhpari94533@gmail.com"
            className="flex items-center gap-4 text-2xl lg:text-3xl hover:text-[#FFF1A8]"
          >
            <Mail size={32} />
            singhpari94533@gmail.com
          </a>

          <div className="flex gap-8 mt-8">
            <a
              href="https://github.com/Pari0226"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl hover:text-[#FFF1A8]"
            >
              <Github size={28} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/parisingh22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl hover:text-pink-200"
            >
              <Linkedin size={28} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10 text-center text-gray-500">
        © 2024 Pari Singh
      </footer>
    </div>
  );
}

export default App;
