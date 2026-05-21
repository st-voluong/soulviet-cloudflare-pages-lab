import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    setJoined(true);
    setEmail('');
  }

  return (
    <section id="newsletter" className="bg-[linear-gradient(135deg,#0f766e_0%,#17202a_100%)] py-20">
      <div className="section-shell">
        <div className="grid gap-10 rounded-[2rem] bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_0.95fr] lg:p-12">
          <div>
            <p className="eyebrow">Early access</p>
            <h2 className="section-title">Join the next wave of authentic Vietnam travel</h2>
            <p className="section-copy">
              Get curated hidden places, host-led experiences, and local story drops before SoulViet opens
              to more travelers.
            </p>
          </div>
          <div className="flex items-center">
            <form onSubmit={handleSubmit} className="w-full rounded-3xl bg-slate-50 p-4 shadow-inner">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setJoined(false);
                  }}
                  placeholder="Your email address"
                  className="min-h-14 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-forest focus:ring-4 focus:ring-teal-100"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-sunrise px-6 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Join the journey
                  <Send size={17} />
                </button>
              </div>
              {joined && <p className="px-2 pt-4 text-sm font-semibold text-forest">Thanks for joining!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
