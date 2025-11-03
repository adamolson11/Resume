import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projects from '../data/projects.json';
import { motion } from 'framer-motion';

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="projects" className="py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-slate-400 max-w-prose">
          Data-driven project cards. Click a card to view details, screenshots, and links.
        </p>
      </div>

      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
      >
        {projects.map((p, i) => (
          <motion.div key={p.id} whileHover={{ y: -6 }} whileTap={{ scale: 0.99 }}>
            <ProjectCard project={p} onOpen={() => setOpenIndex(i)} />
          </motion.div>
        ))}
      </motion.div>

      {openIndex !== null && (
        <ProjectModal
          project={projects[openIndex]}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}