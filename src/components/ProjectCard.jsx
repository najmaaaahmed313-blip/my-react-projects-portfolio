function ProjectCard({ project, index }) {
  return (
    <article className="card">
      <div className="card-topline">
        <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="card-mark" aria-hidden="true">↗</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description || "A project in progress, more details coming soon."}</p>
    </article>
  )
}

export default ProjectCard