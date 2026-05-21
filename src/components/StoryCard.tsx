import { ArrowUpRight } from 'lucide-react';
import type { Story } from '../types';

type StoryCardProps = {
  story: Story;
};

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={story.imageUrl}
          alt={story.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
          <span>{story.author}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{story.readingTime}</span>
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink">{story.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{story.excerpt}</p>
        <a
          href="#newsletter"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-forest transition hover:text-sunrise"
        >
          Read story
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}
