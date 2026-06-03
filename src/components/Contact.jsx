import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, MapPin, SendHorizonal } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

const initialState = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [formState, setFormState] = useState(initialState)

  const onChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    alert('Thanks for reaching out! I will get back to you soon.')
    setFormState(initialState)
  }

  return (
    <section id="contact" className="section-shell px-4 pb-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build impactful software together"
          subtitle="Available for full stack engineering roles, freelance opportunities, and collaborative product ideas."
        />

        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-700 dark:text-slate-300 md:text-base">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-600 dark:text-brand-300" />
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-brand-600 dark:text-brand-300" />
                  <span>{profile.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaLinkedin className="text-brand-600 dark:text-brand-300" />
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaGithub className="text-brand-600 dark:text-brand-300" />
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass-card space-y-4 p-6 md:p-8">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-700 dark:text-slate-300">Your Name</span>
                <input
                  required
                  name="name"
                  value={formState.name}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-300 bg-white/85 px-4 py-3 text-sm outline-none ring-brand-400 transition focus:ring dark:border-slate-700 dark:bg-slate-900/70"
                  placeholder="Your Name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-700 dark:text-slate-300">Email Address</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-300 bg-white/85 px-4 py-3 text-sm outline-none ring-brand-400 transition focus:ring dark:border-slate-700 dark:bg-slate-900/70"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-700 dark:text-slate-300">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-300 bg-white/85 px-4 py-3 text-sm outline-none ring-brand-400 transition focus:ring dark:border-slate-700 dark:bg-slate-900/70"
                  placeholder="Tell me about your opportunity or project idea."
                />
              </label>

              <button type="submit" className="btn-primary">
                <SendHorizonal size={16} />
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
