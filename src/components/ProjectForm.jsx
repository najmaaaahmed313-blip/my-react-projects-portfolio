function ProjectForm({ title, description, onTitleChange, onDescriptionChange, onSubmit }) {
  return (
    <form className="project-form" onSubmit={onSubmit}>
      <div className="form-heading">
        <p className="eyebrow">Add to the collection</p>
        <h2>New project</h2>
      </div>
      <label htmlFor="project-title">Project title</label>
      <input
        id="project-title"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
        placeholder="e.g. Personal blog"
        required
      />
      <label htmlFor="project-description">Description</label>
      <textarea
        id="project-description"
        value={description}
        onChange={(event) => onDescriptionChange(event.target.value)}
        placeholder="A short note about what you built"
        rows="3"
      />
      <button type="submit">Add project <span aria-hidden="true">+</span></button>
    </form>
  )
}

export default ProjectForm