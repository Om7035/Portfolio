const skills = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Go",
    "Swift",
    "Kotlin",
    "PHP",
  ],
  "Frameworks": [
    "React",
    "Next.js",
    "Node.js",
    "Django",
    "Flask",
    "Angular",
    "Vue.js",
  ],
  "Databases": [
    "SQL",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "SQLite",
    "Cassandra",
  ],
}

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Skills</h2>
        {Object.entries(skills).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-purple-400">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

