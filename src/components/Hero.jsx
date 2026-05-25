import { useEffect, useState } from 'react'
import { ArrowDownToLine, Mail, FolderOpenDot } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolioData'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.roleOptions.length)
    }, 2200)

    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-36 md:px-6 md:pt-40">
      <div className="hero-glow" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="section-eyebrow text-left">Full Stack Developer Portfolio</p>
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-6xl">
            {profile.name}
          </h1>

          <div className="mt-4 h-8 overflow-hidden text-lg font-semibold text-brand-600 dark:text-brand-300 md:text-2xl">
            <motion.div
              key={profile.roleOptions[roleIndex]}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              {profile.roleOptions[roleIndex]}
            </motion.div>
          </div>

          <p className="mt-5 max-w-2xl text-base text-slate-700 dark:text-slate-300 md:text-lg">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="/resume-moazzam-hameed.pdf" download>
              <ArrowDownToLine size={17} />
              Download CV
            </a>
            <a className="btn-secondary" href="#contact">
              <Mail size={17} />
              Contact Me
            </a>
            <a className="btn-secondary" href="#projects">
              <FolderOpenDot size={17} />
              View Projects
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
              Focus Areas
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300 md:text-base">
              <li>ASP.NET Core Web API & C# Engineering</li>
              <li>React.js Frontend Development</li>
              <li>SaaS ERP Product Modules</li>
              <li>Scalable Backend Architecture</li>
              <li>AI Projects & Deepfake Detection Research</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
