"use client"

import { useState, useMemo } from "react"
import GameLayout from "../components/GameLayout"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Github, ExternalLink, Star, GitBranch, 
  Filter, Clock, 
  Brain, Video, Shield, Globe 
} from "lucide-react"

interface Project {
  title: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  icon: JSX.Element;
  githubUrl: string;
}

const PROJECT_DESCRIPTIONS = {
  "export-management-platform": {
    description: "A revolutionary blockchain-powered export management platform designed to transform how Small and Medium Businesses (SMBs) track and manage international trade. By leveraging Solidity smart contracts, the application provides end-to-end transparency, security, and efficiency in export logistics.",
    technologies: ["Solidity", "Blockchain", "React", "Web3.js", "Hardhat"],
    keyFeatures: [
      "Decentralized export tracking",
      "Immutable transaction records",
      "Real-time shipment monitoring",
      "Smart contract-based verification"
    ],
    icon: <Shield className="text-green-400" />,
    githubUrl: "https://github.com/Om7035/export-management-platform"
  },
  "finrack": {
    description: "An advanced AI-driven financial fraud detection system that uses sophisticated machine learning algorithms to identify and prevent suspicious transactions in real-time. The platform provides comprehensive risk analysis and proactive fraud prevention strategies for financial institutions.",
    technologies: ["Python", "Machine Learning", "TensorFlow", "React", "Django"],
    keyFeatures: [
      "Real-time transaction monitoring",
      "Anomaly detection",
      "Predictive risk scoring",
      "Comprehensive fraud analytics"
    ],
    icon: <Brain className="text-purple-400" />,
    githubUrl: "https://github.com/Om7035/FinRack"
  },
  "green-sense": {
    description: "An innovative AI-powered plant analysis application that revolutionizes plant care through advanced image recognition and machine learning. Users can upload plant photos to receive instant, detailed insights about species identification, health status, and personalized care recommendations.",
    technologies: ["Next.js", "Gemini API", "TailwindCSS", "Machine Learning"],
    keyFeatures: [
      "AI-powered plant identification",
      "Health condition analysis",
      "Personalized care recommendations",
      "Multi-species support"
    ],
    icon: <Globe className="text-emerald-500" />,
    githubUrl: "https://github.com/Om7035/Green-Sense"
  },
  "netflix-clone": {
    description: "A comprehensive streaming platform clone that replicates and enhances the core Netflix experience. The application offers a fully responsive, feature-rich streaming service with advanced user authentication, dynamic content browsing, and personalized recommendation systems.",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Firebase"],
    keyFeatures: [
      "User authentication",
      "Dynamic content browsing",
      "Recommendation engine",
      "Responsive design"
    ],
    icon: <Video className="text-red-500" />,
    githubUrl: "https://github.com/Om7035/netflix-clone"
  }
}

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close modal when clicking outside
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-4xl w-full mx-4 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times; {/* Cross symbol */}
        </button>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            {project.icon}
            <h2 className="text-2xl font-bold text-purple-400 capitalize">
              {project.title}
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Star className="w-4 h-4" />
            <span>0</span>
            <GitBranch className="w-4 h-4" />
            <span>0</span>
          </div>
        </div>
        <p className="mb-6 text-gray-300">
          {project.description}
        </p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-2">
            Key Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span 
                key={tech} 
                className="bg-purple-600 text-white px-2 py-1 rounded text-sm uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              {project.keyFeatures.map((feature: string) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-purple-400 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-purple-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>(Object.entries(PROJECT_DESCRIPTIONS).map(([key, value], index) => ({
    id: index + 1,
    title: key.replace(/-/g, ' '),
    ...value,
  })))
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const [filterTech, setFilterTech] = useState<string | null>(null)

  // Define broader technology categories
  const technologyCategories = [
    { name: "All Technologies", value: null },
    { name: "Blockchain", value: "Blockchain" },
    { name: "Frontend", value: "React" },
    { name: "Backend", value: "Node.js" },
    { name: "AI/ML", value: "Machine Learning" },
    { name: "Database", value: "MongoDB" },
  ]

  const filteredProjects = useMemo(() => {
    return filterTech 
      ? projects.filter(project => 
          project.technologies.some((tech: string) => 
            tech.toLowerCase().includes(filterTech.toLowerCase())
          )
        ) 
      : projects
  }, [projects, filterTech])

  const selectedProject = useMemo(() => {
    return projects.find(project => project.id === selectedProjectId)
  }, [selectedProjectId, projects])

  return (
    <GameLayout title="My Projects">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          {technologyCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setFilterTech(category.value)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filterTech === category.value 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-purple-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden cursor-pointer group transform transition-all hover:scale-105 hover:shadow-purple-500/50 relative border-2 border-transparent hover:border-purple-500"
            onClick={() => setSelectedProjectId(project.id)}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                  {project.icon}
                  <h2 className="text-2xl font-bold text-purple-400 capitalize">
                    {project.title}
                  </h2>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Star className="w-4 h-4" />
                  <span>0</span>
                  <GitBranch className="w-4 h-4" />
                  <span>0</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProjectId(null)} 
          />
        )}
      </AnimatePresence>
    </GameLayout>
  )
}