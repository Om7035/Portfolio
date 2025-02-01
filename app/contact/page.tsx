"use client"

import type React from "react"
import { useState } from "react"
import GameLayout from "../components/GameLayout"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formState.subject || "Contact from Portfolio")
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}`)
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=omkawale12@gmail.com&su=${subject}&body=${body}`,
      "_blank",
    )
  }

  const formProgress = ((Object.values(formState).filter(Boolean).length / 3) * 100).toFixed(0)

  return (
    <GameLayout title="Contact Me">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${formProgress}%` }}
            className="h-2 bg-purple-600 mb-8 rounded-full"
          />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Your Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
              Subject
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleInputChange}
              rows={2}
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 resize-none text-lg"
              required
            />
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Contact Me
            </motion.button>
          </div>
        </form>
        <p className="mt-8 text-center text-gray-400">
          Clicking "Contact Me" will open Gmail with omkawale12@gmail.com as the recipient.
        </p>
        <p className="mt-4 text-center text-gray-400">
          Or email directly at{" "}
          <a href="mailto:omkawale12@gmail.com" className="text-purple-400 hover:text-purple-300">
            omkawale12@gmail.com
          </a>
        </p>
      </div>
    </GameLayout>
  )
}

