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
          <div className="mx-auto max-w-4xl">
            <div className="glass-card p-6 md:p-8 lg:p-10">
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
