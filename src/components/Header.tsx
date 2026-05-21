import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Stories', href: '#stories' },
  { label: 'How it works', href: '#how-it-works' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/78 shadow-sm backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-bold text-ink" aria-label="SoulViet home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest text-lg text-white shadow-soft">
            SV
          </span>
          <span className="text-xl tracking-tight">SoulViet</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#newsletter"
          className="hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-forest lg:inline-flex"
        >
          Start Exploring
        </a>

        <button
          type="button"
          className="inline-grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#newsletter"
              className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Start Exploring
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
