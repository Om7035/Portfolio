import { motion } from "framer-motion"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

interface NavigationBarProps {
  onClose: () => void
}

export default function NavigationBar({ onClose }: NavigationBarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white p-10 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="absolute left-0">
          <Link href="/" className="hover:text-purple-400 transition-colors text-4xl border-b-2 border-transparent hover:border-purple-400">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
          </Link>
        </div>
        <ul className="flex space-x-12 ml-10">
          <li>
            <Link href="/about" className="hover:text-purple-400 transition-colors text-4xl border-b-2 border-transparent hover:border-purple-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-purple-400 transition-colors text-4xl border-b-2 border-transparent hover:border-purple-400">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-purple-400 transition-colors text-4xl border-b-2 border-transparent hover:border-purple-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-purple-400 transition-colors text-4xl border-b-2 border-transparent hover:border-purple-400">
              Contact
            </Link>
          </li>
        </ul>
        <button onClick={onClose} className="text-white hover:text-purple-400 transition-colors text-2xl">
          Close
        </button>
      </div>
    </motion.nav>
  )
}

