import { BriefcaseBusiness } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section-shell px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Professional and project-based engineering experience"
          subtitle="From SaaS ERP modules to security-focused APIs and academic innovation."
        />

        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <Reveal key={experience.title} delay={index * 0.08}>
              <article className="glass-card p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300">
                    <BriefcaseBusiness size={20} />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">{experience.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{experience.period}</p>
                  </div>
                </div>

                <ul className="grid gap-3 text-sm text-slate-700 dark:text-slate-300 md:text-base">
                  {experience.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
