function ProjectSearch({ value, onChange }) {
  return (
    <label className="search-field">
      <span className="search-icon" aria-hidden="true">⌕</span>
      <span className="visually-hidden">Search projects</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Find a project"
      />
    </label>
  )
}

export default ProjectSearch