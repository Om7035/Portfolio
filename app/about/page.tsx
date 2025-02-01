"use client"

import { useState, useEffect } from "react"
import GameLayout from "../components/GameLayout"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  {
    id: "background",
    title: "Background",
    content:
      "I'm Om Kawale, a passionate full-stack developer with a knack for creating innovative solutions. My journey in tech started with a curiosity about how things work, which led me to dive deep into programming. I thrive on solving complex problems and building impactful projects.",
    icon: "👨‍💻",
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>BE in IT Engineering</strong> - Sinhgad College of Engineering
        </li>
        <li>
          <strong>Higher Secondary Education</strong> - Modern Junior College
        </li>
        <li>
          <strong>Primary & Secondary Education</strong> - S.D.H.B.H.S School
        </li>
        <li>
          Actively participated in hackathons and coding competitions, honing my
          skills in software development and teamwork.
        </li>
      </ul>
    ),
    icon: "🎓",
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-purple-400">
            Full Stack Developer Intern, OctaNet Web Development, India
          </h3>
          <p className="text-gray-400">Jan 2025</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Developing a full-stack music distribution platform that streamlines
              content management, analytics, and automated distribution for artists
              and labels.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-purple-400">
            Member, Smart India Hackathon, India
          </h3>
          <p className="text-gray-400">Oct 2023</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Developed Meddoc Platform for easier access to patients and doctors.
              Meddocs is a medical documentation platform designed to securely
              manage and share patient records.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-purple-400">
            Member, MHTECHIN Hackathon Finalist
          </h3>
          <p className="text-gray-400">Sep 2024</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Finrack is a financial technology platform that helps businesses
              manage their financial data. It offers tools for accounting,
              invoicing, budgeting, and financial reporting.
            </li>
          </ul>
        </div>
      </div>
    ),
    icon: "💼",
  },
  {
    id: "hobbies",
    title: "Hobbies",
    content: (
      <ul className="list-disc list-inside space-y-4">
        <li>Exploring the latest advancements in technology.</li>
        <li>Building projects to explore new technologies.</li>
        <li>Gaming enthusiast, especially strategy games.</li>
        <li>Applying knowledge from hobbies to professional work.</li>
      </ul>
    ),
    icon: "🎮",
  },
]

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        const newProgress = Math.min(oldProgress + 1, 100)
        return newProgress
      })
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const handleSectionClick = (id: string) => {
    setActiveSection(activeSection === id ? null : id)
  }

  const handleCloseOverlay = () => {
    setActiveSection(null)
  }

  return (
    <GameLayout title="About Me">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        className="h-2 bg-purple-600 mb-8 rounded-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            layout // Enables layout animations
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{
              opacity: activeSection === null || activeSection === section.id ? 1 : 0.5,
              y: 0,
              scale: activeSection === null || activeSection === section.id ? 1 : 0.9,
            }}
            whileHover={{ scale: 1.05 }} // Hover effect
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            className={`bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer ${
              activeSection === section.id ? "z-20" : "z-0"
            }`}
            onClick={() => handleSectionClick(section.id)}
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{section.icon}</span>
              <h2 className="text-2xl font-bold text-purple-400">{section.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overlay for Detailed Section */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-30"
            onClick={handleCloseOverlay}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing overlay
            >
              <button
                onClick={handleCloseOverlay}
                className="absolute top-4 right-4 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">
                  {sections.find((s) => s.id === activeSection)?.icon}
                </span>
                <h2 className="text-2xl font-bold text-purple-400">
                  {sections.find((s) => s.id === activeSection)?.title}
                </h2>
              </div>
              <div className="text-gray-300">
                {sections.find((s) => s.id === activeSection)?.content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </GameLayout>
  )
}