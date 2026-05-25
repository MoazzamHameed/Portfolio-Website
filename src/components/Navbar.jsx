import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/20 bg-white/55 px-4 py-3 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/55 md:px-6">
        <a href="#home" className="font-heading text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          MH Portfolio
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/70 dark:border-slate-700 dark:bg-slate-900/70 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/20 bg-white/85 p-4 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/90 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
