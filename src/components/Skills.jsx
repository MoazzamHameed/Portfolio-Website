import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section-shell px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical stack across frontend, backend, data, and infrastructure"
          subtitle="Core strengths for building modern, secure, and scalable software systems."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.06}>
              <div className="glass-card p-6">
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
                <div className="mt-5 space-y-4">
                  {group.items.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex items-center justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>{skill.name}</span>
                        <span>{skill.value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-700/80">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          transition={{ duration: 0.8, delay: index * 0.08 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
