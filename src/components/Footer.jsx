import { navItems } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-300/70 bg-white/50 px-4 py-8 dark:border-slate-800 dark:bg-slate-950/50 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Moazzam Hameed. All rights reserved.</p>

        <div className="flex flex-wrap justify-center gap-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-600 dark:hover:text-brand-300">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
