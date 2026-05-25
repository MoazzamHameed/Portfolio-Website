import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section-shell px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Software engineering foundations strengthened by practical execution"
          subtitle="Academic coursework aligned with modern backend, cloud, and systems engineering needs."
        />

        <Reveal>
          <div className="glass-card p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300">
                <GraduationCap size={20} />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">{education.degree}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{education.institution}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span key={course} className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300 md:text-sm">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
