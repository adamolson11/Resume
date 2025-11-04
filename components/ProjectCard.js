export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={onOpen}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen(); }}
      className="project-card w-full text-left focus:outline-none"
      aria-label={`Open project ${project.title}`}
    >
      {/* Project Image / Media */}
      <div className="project-media">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
          />
        ) : (
          <div className="text-slate-500 font-medium text-sm">
            {project.title}
          </div>
        )}
      </div>

      {/* Project Body */}
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-short">{project.short}</p>

        {/* Tech Stack Badges */}
        <div className="project-tech">
          {(project.tech || []).slice(0, 6).map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}