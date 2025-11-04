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

import { motion } from 'framer-motion';

export default function Timeline() {
  return (
    <section id="experience" className="py-16">
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-hb-blue">Experience</h2>
        <p className="text-slate-400 max-w-prose">Enterprise product support and research background — focused on pragmatic solutions and automation.</p>
      </motion.div>

      <div className="relative space-y-4 pl-8">
        {/* Vertical connector line with pulse */}
        <div className="timeline-connector">
          <div className="timeline-pulse"></div>
        </div>

        {items.map((it, idx) => (
          <motion.div 
            key={it.company} 
            className="relative p-4 rounded-lg border border-white/6 bg-white/2 glass hover:glass-hover transition-all"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">{it.role}</div>
                <div className="text-hb-blue text-sm">{it.company}</div>
              </div>
              <div className="text-slate-400 text-sm">{it.period}</div>
            </div>

            <ul className="mt-3 list-disc ml-5 text-slate-300 space-y-1">
              {it.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}