const stats = [
  { label: 'destinations', value: '64+' },
  { label: 'travelers inspired', value: '18K' },
  { label: 'average rating', value: '4.9' },
  { label: 'local stories', value: '120+' },
];

export function Stats() {
  return (
    <section className="bg-ink py-14 text-white">
      <div className="section-shell grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/6 p-6">
            <p className="text-4xl font-bold tracking-tight text-white">{stat.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-teal-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
