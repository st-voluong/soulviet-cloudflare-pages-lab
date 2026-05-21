import type { Experience } from '../types';

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const Icon = experience.icon;

  return (
    <article className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-50 text-forest">
        <Icon size={25} strokeWidth={2.2} />
      </div>
      <h3 className="mt-5 text-xl font-bold text-ink">{experience.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{experience.description}</p>
    </article>
  );
}
