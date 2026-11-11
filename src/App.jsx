import { useState } from "react"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"

function App() {
  const [projects,setProjects] = useState([
   {id:1,title:"blog site", description: "my first react project"},
   {id:2,title:"a digital-clock", description: "my second react project"},
   {id:3,title:"building a dynamic shop with react hooks", description: "my third project"},
   ]);
    const[search,setSearch] = useState("")
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!title.trim()) return;
      setProjects([...projects, { id: Date.now(), title, description}]);
      setTitle("")
      setDescription("")
    };
     const visible = projects.filter((project) =>
       project.title.toLowerCase().includes(search.toLowerCase())
     );
     return(
      <div>
        <Navbar/>
        <Landing/>

          <form onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="project title" />
          <button type="submit">add project</button> 
        </form>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search projects" />

        <div className="grid">
        {visible.map((p) =>(
          <div className="card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
        </div>
        ))}
        </div>
        </div>
      );
}
export default App
