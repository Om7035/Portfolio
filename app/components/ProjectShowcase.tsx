"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  { name: "Project Nebula", description: "A cloud-based project management tool", level: 1 },
  { name: "Quantum Code", description: "An AI-powered code generator", level: 2 },
  { name: "Stellar Chat", description: "Real-time chat application with end-to-end encryption", level: 3 },
]

export default function ProjectShowcase() {
  const [currentLevel, setCurrentLevel] = useState(1)

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Project Galaxy</h2>
        <div className="mb-8">
          <button
            onClick={() => setCurrentLevel((prev) => Math.max(prev - 1, 1))}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg mr-4"
            disabled={currentLevel === 1}
          >
            Previous Level
          </button>
          <button
            onClick={() => setCurrentLevel((prev) => Math.min(prev + 1, 3))}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
            disabled={currentLevel === 3}
          >
            Next Level
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLevel}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            {projects
              .filter((project) => project.level === currentLevel)
              .map((project) => (
                <div key={project.name} className="bg-purple-800 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

