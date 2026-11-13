import { useState } from "react"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import ProjectForm from "./components/ProjectForm"
import ProjectSearch from "./components/ProjectSearch"
import ProjectCard from "./components/ProjectCard"

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "blog site", description: "my first react project" },
    { id: 2, title: "a digital-clock", description: "my second react project" },
    { id: 3, title: "building a dynamic shop with react hooks", description: "my third project" },
  ])
  const [search, setSearch] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title.trim()) return
    setProjects([...projects, { id: Date.now(), title: title.trim(), description: description.trim() }])
    setTitle("")
    setDescription("")
  }

  const visibleProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app-shell">
      <Navbar />
      <Landing />

      <section className="workspace" aria-label="Project portfolio">
        <ProjectForm
          title={title}
          description={description}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
          onSubmit={handleSubmit}
        />

        <section className="projects-section" aria-labelledby="projects-heading">
          <div className="projects-toolbar">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="projects-heading">Projects <span>{visibleProjects.length}</span></h2>
            </div>
            <ProjectSearch value={search} onChange={setSearch} />
          </div>

          {visibleProjects.length > 0 ? (
            <div className="grid">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <p className="empty-state">No projects match “{search}”. Try another search.</p>
          )}
        </section>
      </section>
    </div>
  )
}
export default App
