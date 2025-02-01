const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Project 3",
    description: "A brief description of project 3",
    technologies: ["Python", "Django", "AWS"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-black rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-800 text-white px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

