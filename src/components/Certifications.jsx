import { Award } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications & Learning"
          title="Continuous growth through focused learning tracks"
          subtitle="Upskilling across web frameworks, data systems, and cloud-era infrastructure concepts."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal key={certification} delay={index * 0.04}>
              <div className="glass-card flex items-center gap-3 p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300">
                  <Award size={17} />
                </span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{certification}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
