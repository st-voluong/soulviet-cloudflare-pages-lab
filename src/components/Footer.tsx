const footerLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Stories', href: '#stories' },
  { label: 'How it works', href: '#how-it-works' },
];
const socialLinks = ['Instagram', 'Threads', 'LinkedIn'];

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a href="#top" className="text-2xl font-bold tracking-tight text-ink">
            SoulViet
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            Discover hidden places with local stories across Vietnam, built for travelers who want
            culture, warmth, and real local rhythm.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Explore</h3>
          <div className="mt-4 grid gap-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-forest">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Social</h3>
          <div className="mt-4 grid gap-3">
            {socialLinks.map((link) => (
              <a key={link} href="#newsletter" className="text-sm text-slate-600 hover:text-forest">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-slate-100 pt-6 text-sm text-slate-500">
        © 2026 SoulVietLab. Built for Cloudflare Pages static deployment.
      </div>
    </footer>
  );
}
