import Link from "next/link"

export default function NavigationOverlay() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-black bg-opacity-50 backdrop-blur-md rounded-full px-6 py-3">
        <ul className="flex space-x-6">
          <li>
            <Link href="#skills" className="text-white hover:text-purple-400 transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:text-purple-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-white hover:text-purple-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

