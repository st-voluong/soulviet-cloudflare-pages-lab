import { Clock, Star } from 'lucide-react';
import type { Destination } from '../types';

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={`${destination.location} travel destination`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight text-ink">{destination.location}</h3>
          <div className="flex items-center gap-1 rounded-full bg-sand px-3 py-1 text-sm font-bold text-sunrise">
            <Star className="fill-sunrise" size={15} />
            {destination.rating}
          </div>
        </div>
        <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{destination.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {destination.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-forest">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-500">
          <Clock size={16} />
          {destination.duration}
        </div>
      </div>
    </article>
  );
}
