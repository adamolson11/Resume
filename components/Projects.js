import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projects from '../data/projects.json';
import { motion } from 'framer-motion';

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-title text-4xl mb-3">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Data-driven project cards. Click a card to view details, screenshots, and links.
          </p>
        </div>

        <motion.div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
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
      </div>
    </section>
  );
}