const items = [
  {
    company: 'HindSite Software',
    role: 'Product Specialist',
    period: 'Oct 2024 – Jun 2025',
    bullets: [
      'Onboarded B2B irrigation customers and trained them on workflows and QBO billing integration.',
      'Resolved cloud application issues using Jira-based ticketing.',
      'Authored internal KB articles to improve resolution times.',
    ],
  },
  {
    company: 'Thomson Reuters',
    role: 'Product Support Specialist',
    period: 'Sep 2022 – Feb 2023',
    bullets: [
      'Troubleshot complex system and software issues to resolution.',
      'Managed and prioritized customer cases.',
    ],
  },
  {
    company: 'FIS',
    role: 'Product Support Specialist, Research Team II',
    period: 'Sep 2016 – Apr 2021',
    bullets: [
      'Investigated FinTech application errors including XML parsing and backend data issues.',
      'Supported ACH/Wire operations and compliance.',
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p className="text-slate-400 max-w-prose">Enterprise product support and research background — focused on pragmatic solutions and automation.</p>
      </div>

      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.company} className="p-4 rounded-lg border border-white/6 bg-white/2">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{it.role}</div>
                <div className="text-slate-300 text-sm">{it.company}</div>
              </div>
              <div className="text-slate-400 text-sm">{it.period}</div>
            </div>

            <ul className="mt-3 list-disc ml-5 text-slate-300 space-y-1">
              {it.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}