import { useMemo, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolioData'

const filters = ['All', ...new Set(projects.map((project) => project.category))]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="section-shell px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Portfolio of backend APIs, full stack solutions, and AI experimentation"
          subtitle="Each project reflects problem-solving depth, architecture decisions, and production-minded implementation."
        />

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? 'bg-brand-600 text-white shadow'
                  : 'border border-slate-300 text-slate-700 hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-400'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <article className="glass-card overflow-hidden p-6">
                <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-brand-500/35 via-cyan-500/20 to-amber-400/30" />
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <span className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 md:text-base">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-500/12 px-3 py-1 text-xs font-medium text-brand-700 dark:text-brand-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {project.showGithub || project.showDemo ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.showGithub && project.github ? (
                      <a className="btn-secondary" href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub size={16} />
                        GitHub
                      </a>
                    ) : null}

                    {project.showDemo && project.demo ? (
                      <a className="btn-secondary" href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
