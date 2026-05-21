import { ArrowRight, MapPin, Star } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.20),transparent_34%),linear-gradient(135deg,#f8fbf8_0%,#fff7ed_52%,#eefdf9_100%)] pt-32"
    >
      <div className="section-shell grid min-h-[calc(100vh-3rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-sm font-semibold text-forest shadow-sm">
            Discover hidden places with local stories
          </div>
          <h1 className="mt-7 text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Discover Vietnam beyond the tourist map
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            SoulViet helps travelers explore hidden places, local stories, cultural experiences, and
            authentic journeys across Vietnam.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#destinations"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Explore Destinations
              <ArrowRight size={18} />
            </a>
            <a
              href="#stories"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/85 px-6 py-4 text-sm font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:text-forest"
            >
              View Local Stories
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-white">
            <img
              src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=85"
              alt="Vietnam river landscape with limestone mountains"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-7 left-4 right-4 rounded-3xl bg-white/92 p-5 shadow-card backdrop-blur sm:left-8 sm:right-auto sm:w-80">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sand text-sunrise">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500">Local pick this week</p>
                <h2 className="mt-1 text-lg font-bold text-ink">Ninh Binh river village</h2>
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                  <Star className="fill-sunrise text-sunrise" size={17} />
                  <span>4.9 from slow-travel explorers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
