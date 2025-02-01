"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "JavaScript", level: 90, category: "Programming Languages" },
  { name: "React", level: 85, category: "Frameworks" },
  { name: "Node.js", level: 80, category: "Frameworks" },
  { name: "Python", level: 75, category: "Programming Languages" },
  { name: "SQL", level: 70, category: "Databases" },
  { name: "Java", level: 65, category: "Programming Languages" },
  { name: "C++", level: 60, category: "Programming Languages" },
  { name: "Ruby", level: 55, category: "Programming Languages" },
  { name: "Django", level: 70, category: "Frameworks" },
  { name: "MongoDB", level: 65, category: "Databases" },
  { name: "Go", level: 60, category: "Programming Languages" },
  { name: "Swift", level: 55, category: "Programming Languages" },
  { name: "Flask", level: 65, category: "Frameworks" },
  { name: "PostgreSQL", level: 70, category: "Databases" },
  { name: "Kotlin", level: 60, category: "Programming Languages" },
  { name: "PHP", level: 55, category: "Programming Languages" },
  { name: "Angular", level: 65, category: "Frameworks" },
  { name: "Vue.js", level: 60, category: "Frameworks" },
  { name: "SQLite", level: 70, category: "Databases" },
  { name: "Cassandra", level: 65, category: "Databases" },
]

export default function SkillTree() {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Skill Constellation</h2>
        {categories.map(category => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.filter(skill => skill.category === category).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-purple-800 rounded-lg p-6"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-purple-400 h-4 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <p className="mt-2">{skill.level}% Mastery</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

