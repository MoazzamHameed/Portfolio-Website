import { UserRound } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { about } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section-shell px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering products with purpose, scale, and business impact"
          subtitle="I combine practical full stack delivery with long-term software architecture thinking."
        />

        <Reveal>
          <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
            <div className="glass-card flex min-h-72 flex-col items-center justify-center p-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300">
                <UserRound size={30} />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Profile Image Placeholder</p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">Add your professional headshot later</p>
            </div>

            <div className="glass-card p-6 md:p-8">
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">{about.summary}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300 md:text-base">
                {about.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
