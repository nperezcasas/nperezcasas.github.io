import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

// Content object
const content = {
  name: 'Nuria Perez',
  title: 'Software Engineer | AI Enthusiast | Problem Solver',
  about: `I'm a passionate software engineer with a strong background in artificial intelligence and machine learning. 
          My journey in tech has led me to work on exciting projects that push the boundaries of what's possible with AI.
          When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes in the kitchen, 
          or diving into a good book on technology and its impact on society.`,
  projects: [
    { title: "AI-Powered Chat Bot", description: "Developed a conversational AI using natural language processing techniques." },
    { title: "Image Recognition App", description: "Built a mobile app that can identify objects in photos using machine learning." },
    { title: "Data Visualization Dashboard", description: "Created an interactive dashboard for visualizing complex datasets." }
  ],
  socials: {
    github: 'https://github.com/nperezcasas',
    linkedin: 'https://www.linkedin.com/in/nuria-perez-casas/',
    email: 'nupc20@gmail.com'
  }
}

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{content.name}</h1>
          <div className="flex items-center">
            <button onClick={toggleTheme} className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {theme === 'dark' ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-gray-700" />}
            </button>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
                {isMenuOpen ? <X className="h-6 w-6 dark:text-white" /> : <Menu className="h-6 w-6 dark:text-white" />}
              </button>
            </div>
          </div>
          <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 bg-white dark:bg-gray-800 md:bg-transparent shadow-md md:shadow-none`}>
            {['About', 'Projects', 'Contact'].map((item) => (
              <li key={item} className="md:ml-6">
                <a href={`#${item.toLowerCase()}`} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Image
              src="/headshot.jpg"
              alt={content.name}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-8"
            />
            <h2 className="text-4xl font-bold mb-4">{content.name}</h2>
            <p className="text-xl mb-8">{content.title}</p>
            <a href="#contact" className="bg-white text-purple-600 py-2 px-6 rounded-full font-bold hover:bg-gray-100 transition duration-300">Get in Touch</a>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 dark:text-gray-300 mb-4">{content.about}</p>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-gray-200 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Get in Touch</h2>
            <div className="flex justify-center space-x-6">
              <a href={content.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github className="h-8 w-8" />
              </a>
              <a href={content.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href={`mailto:${content.socials.email}`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {content.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home