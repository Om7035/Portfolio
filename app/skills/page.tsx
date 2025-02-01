"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Code, Server, PenTool, Database, GitBranch, Bot, Brain, Share2, Cloud } from "lucide-react"
import GameLayout from "../components/GameLayout"

const skills = [
  {
    category: "Frontend",
    skills: [
      {
        name: "JavaScript",
        icon: Code,
        color: "text-yellow-400",
        description: "Modern ES6+, async programming, DOM manipulation.",
        details: {
          projects: ["Task Manager App", "E-commerce Dashboard"],
          certifications: ["JavaScript Algorithms and Data Structures (freeCodeCamp)"],
        },
      },
      {
        name: "React",
        icon: Cpu,
        color: "text-blue-400",
        description: "Hooks, context, state management (Redux, Zustand).",
        details: {
          projects: ["Real-time Chat App", "Portfolio Website"],
          certifications: ["React - The Complete Guide (Udemy)"],
        },
      },
      {
        name: "TypeScript",
        icon: Code,
        color: "text-blue-400",
        description: "Strongly typed JavaScript for scalable applications.",
        details: {
          projects: ["E-commerce Backend", "API Gateway"],
          certifications: ["TypeScript Fundamentals (Pluralsight)"],
        },
      },
      {
        name: "Next.js",
        icon: Cloud,
        color: "text-gray-400",
        description: "React framework for SSR, SSG, and optimized performance.",
        details: {
          projects: ["Blog Platform", "E-learning Platform"],
          certifications: ["Next.js & React - The Complete Guide (Udemy)"],
        },
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: Server,
        color: "text-green-400",
        description: "RESTful APIs, Express.js, JWT authentication.",
        details: {
          projects: ["REST API for Task Manager", "Authentication Service"],
          certifications: ["Node.js - The Complete Guide (Udemy)"],
        },
      },
      {
        name: "Python",
        icon: Code,
        color: "text-blue-300",
        description: "Data analysis (Pandas, NumPy), scripting, machine learning.",
        details: {
          projects: ["Data Visualization Dashboard", "ML Model for Fraud Detection"],
          certifications: ["Python for Data Science and Machine Learning (Coursera)"],
        },
      },
      {
        name: "GraphQL",
        icon: GitBranch,
        color: "text-pink-400",
        description: "Apollo Server, query optimization, efficient data fetching.",
        details: {
          projects: ["GraphQL API for E-commerce", "Real-time Dashboard"],
          certifications: ["GraphQL with React (Udemy)"],
        },
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "SQL",
        icon: Database,
        color: "text-orange-400",
        description: "Complex queries, schema design, PostgreSQL.",
        details: {
          projects: ["Database for E-commerce Platform", "Analytics Dashboard"],
          certifications: ["SQL for Data Science (Coursera)"],
        },
      },
      {
        name: "MongoDB",
        icon: Database,
        color: "text-green-500",
        description: "NoSQL, indexing, scalability.",
        details: {
          projects: ["Real-time Chat App Database", "User Management System"],
          certifications: ["MongoDB Basics (MongoDB University)"],
        },
      },
    ],
  },
  {
    category: "AI & ML",
    skills: [
      {
        name: "Machine Learning",
        icon: Brain,
        color: "text-purple-400",
        description: "Building predictive models using Scikit-learn, TensorFlow, and PyTorch.",
        details: {
          projects: ["Fraud Detection System", "Recommendation Engine"],
          certifications: ["Machine Learning by Andrew Ng (Coursera)"],
        },
      },
      {
        name: "Deep Learning",
        icon: Brain,
        color: "text-purple-500",
        description: "Neural networks, CNNs, RNNs, and GANs using TensorFlow and PyTorch.",
        details: {
          projects: ["Image Classification System", "Text Generation Model"],
          certifications: ["Deep Learning Specialization (Coursera)"],
        },
      },
      {
        name: "Natural Language Processing",
        icon: Bot,
        color: "text-teal-400",
        description: "Text processing, sentiment analysis, and chatbots using NLP libraries.",
        details: {
          projects: ["Sentiment Analysis Tool", "Chatbot for Customer Support"],
          certifications: ["Natural Language Processing with Python (Udemy)"],
        },
      },
    ],
  },
  {
    category: "Advanced AI/ML",
    skills: [
      {
        name: "Large Language Models",
        icon: Brain,
        color: "text-indigo-400",
        description: "Prompt engineering, fine-tuning, and deploying advanced AI models like GPT, Claude, and Llama.",
        details: {
          projects: ["Custom Chatbot AI", "Domain-Specific Model Fine-Tuning"],
          certifications: ["AI Ethics and Responsible AI (Stanford Online)", "Large Language Models Specialization (Deeplearning.ai)"],
        },
      },
      {
        name: "Generative AI",
        icon: Share2,
        color: "text-purple-500",
        description: "Developing generative models using GANs, diffusion models, and multimodal AI for text, image, and audio generation.",
        details: {
          projects: ["AI Art Generation", "Text-to-Image Synthesis", "Audio Style Transfer"],
          certifications: ["Generative AI with TensorFlow (Google)", "Advanced GANs Certification (NVIDIA Deep Learning Institute)"],
        },
      },
      {
        name: "MLOps & AI Engineering",
        icon: Bot,
        color: "text-teal-400",
        description: "Scalable AI model deployment, monitoring, and management using advanced ML infrastructure and tools.",
        details: {
          projects: ["AI Model Deployment Pipeline", "Real-time Machine Learning Monitoring System"],
          certifications: ["Kubernetes for Machine Learning (Linux Foundation)", "MLOps Specialization (deeplearning.ai)"],
        },
      }
    ],
  }
]

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedSkill, setSelectedSkill] = useState<any>(null)

  const filteredSkills =
    selectedCategory === "All"
      ? skills.flatMap((cat) => cat.skills)
      : skills.find((cat) => cat.category === selectedCategory)?.skills || []

  return (
    <GameLayout title="My Skills">
      <div className="space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory("All")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === "All"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            All
          </motion.button>
          {skills.map((cat) => (
            <motion.button
              key={cat.category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === cat.category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {cat.category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden cursor-pointer pointer-events-auto"
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="flex items-center mb-4">
                <skill.icon className={`w-8 h-8 ${skill.color} mr-4`} />
                <h2 className="text-2xl font-bold text-white">{skill.name}</h2>
              </div>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skill Details Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setSelectedSkill(null)}
                >
                  &times;
                </button>
                <div className="flex items-center mb-6">
                  <selectedSkill.icon className={`w-8 h-8 ${selectedSkill.color} mr-4`} />
                  <h2 className="text-2xl font-bold text-white">{selectedSkill.name}</h2>
                </div>
                <p className="text-gray-300 mb-6">{selectedSkill.description}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Projects</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {selectedSkill.details.projects.map((project: string, index: number) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Certifications</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {selectedSkill.details.certifications.map((cert: string, index: number) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GameLayout>
  )
}