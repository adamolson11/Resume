export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={onOpen}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen(); }}
      className="project-card w-full text-left rounded-xl overflow-hidden border border-white/6 bg-white/2 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
      aria-label={`Open project ${project.title}`}
    >
      <div className="h-44 w-full relative bg-zinc-900 flex items-center justify-center">
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-full object-cover" />
        ) : (
          <div className="text-slate-400 font-medium">{project.title}</div>
        )}
      </div>

      <div className="p-4">
        <div className="font-semibold text-lg">{project.title}</div>
        <div className="text-sm text-slate-400 mt-1">{project.short}</div>

        <div className="mt-3 flex flex-wrap gap-2">
          {(project.tech || []).slice(0, 6).map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/4 text-slate-200">
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}