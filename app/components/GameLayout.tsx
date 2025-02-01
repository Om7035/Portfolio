import type { ReactNode } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

interface GameLayoutProps {
  children: ReactNode
  title: string
}

export default function GameLayout({ children, title }: GameLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <nav className="mb-8 relative">
        <div className="absolute left-0">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
          </Link>
        </div>
        <ul className="flex space-x-8 justify-center ml-10">
          <li>
            <Link href="/about" className="text-purple-400 hover:text-purple-300 text-2xl transition duration-300 ease-in-out transform hover:scale-105">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-purple-400 hover:text-purple-300 text-2xl transition duration-300 ease-in-out transform hover:scale-105">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-purple-400 hover:text-purple-300 text-2xl transition duration-300 ease-in-out transform hover:scale-105">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 text-2xl transition duration-300 ease-in-out transform hover:scale-105">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      {children}
    </div>
  )
}

