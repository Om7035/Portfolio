import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#home" className="text-xl hover:text-purple-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-xl hover:text-purple-400 transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-xl hover:text-purple-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-xl hover:text-purple-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-xl hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

