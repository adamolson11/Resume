import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    // Save previously focused element to restore on close
    previouslyFocused.current = document.activeElement;
    // Focus close button
    closeRef.current?.focus();

    function onKey(e) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'Tab') {
        // Simple focus trap: keep focus inside modal
        const focusable = Array.from(document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )).filter((el) => el && el.offsetParent !== null);

        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden'; // prevent background scroll

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      // restore focus
      try { previouslyFocused.current?.focus(); } catch (err) {}
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.28 }}
        className="relative z-10 max-w-3xl w-full bg-gradient-to-b from-white/3 to-black/40 border border-white/6 rounded-xl p-6 shadow-2xl"
      >
        <button
          ref={closeRef}
          className="absolute right-4 top-4 text-slate-300 hover:text-white"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-slate-300">{project.long || project.short}</p>

          {project.image && (
            <div className="rounded-md overflow-hidden bg-zinc-900">
              <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-60 object-cover" />
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {(project.tech || []).map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/4 text-slate-200">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md bg-cyan-400 text-black font-semibold">
                Open Live
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-white/8 text-slate-200">
                View Repo
              </a>
            )}
            <button onClick={onClose} className="px-4 py-2 rounded-md text-slate-300">Close</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}