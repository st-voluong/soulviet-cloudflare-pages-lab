import { DestinationCard } from '../components/DestinationCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Newsletter } from '../components/Newsletter';
import { Stats } from '../components/Stats';
import { StoryCard } from '../components/StoryCard';
import { destinations } from '../data/destinations';
import { experiences } from '../data/experiences';
import { stories } from '../data/stories';

const steps = [
  {
    title: 'Choose your travel mood',
    description: 'Pick the pace, feeling, and style of journey that fits your day.',
  },
  {
    title: 'Discover local recommendations',
    description: 'Browse places, guides, foods, routes, and stories shaped by local context.',
  },
  {
    title: 'Build your authentic journey',
    description: 'Save ideas into a flexible itinerary made for slower, deeper travel.',
  },
];

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="destinations" className="bg-white py-20 lg:py-24">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow">Featured destinations</p>
                <h2 className="section-title">Six Vietnam places made for deeper discovery</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600">
                Explore a curated mix of coast, mountains, heritage streets, highland coffee, and quiet
                village routes.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        </section>

        <section id="experiences" className="bg-[#f3faf7] py-20 lg:py-24">
          <div className="section-shell">
            <p className="eyebrow">Experiences</p>
            <h2 className="section-title">Travel through food, craft, paths, and conversations</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </div>
        </section>

        <section id="stories" className="bg-white py-20 lg:py-24">
          <div className="section-shell">
            <p className="eyebrow">Local stories</p>
            <h2 className="section-title">Small stories that change how a place feels</h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-sand py-20 lg:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">How it works</p>
              <h2 className="section-title mx-auto">Plan with mood first, then let local context guide the route</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-[1.75rem] bg-white p-7 shadow-card">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
