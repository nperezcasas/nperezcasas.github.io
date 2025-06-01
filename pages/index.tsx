import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import AnimatedSection from '../components/AnimatedSection'
import DynamicBackground from '../components/DynamicBackground'
import ParticleBackground from '../components/ParticleBackground'

// Content object
const content = {
  name: 'Nuria Perez',
  title: 'Software Engineer | AI Enthusiast | Problem Solver',
  about: `Hi, I'm Nuria, a software engineer passionate about using artificial intelligence, technology, and data to improve lives. I grew up in Spain and now live in the U.S., where I work as a software engineer and study computer science through Georgia Tech's OMSCS program.

I recently launched SmartCartChef—an AI-powered iOS app that creates personalized weekly meal plans based on your dietary preferences, kitchen appliances, and available ingredients. I built it entirely in my free time to help people eat better with less stress.

Outside of tech, I coach high school basketball, compete in Rubik's cube competitions, and enjoy cooking non-processed meals at home. I'm driven by curiosity and the belief that practical, human-centered tech can make a meaningful impact.`,
  projects: [
    { 
      title: "SmartChef", 
      description: "An AI-powered iOS app that generates weekly meal plans based on your preferences, dietary goals, and kitchen appliances. Built with Swift and AWS Amplify (AppSync, S3, Cognito, Lambda), SmartCartChef helps users eat healthier, save time, and reduce food waste.",
      link: "https://gosmartchef.com",
      testflight: "https://testflight.apple.com/join/1sezcg8g"
    },
    { 
      title: "CS221: AI-Optimized Weekly Menu Generator (Stanford University)", 
      description: "An early prototype that evolved into SmartCartChef. Developed as part of Stanford University's CS221 course, this project laid the groundwork for using AI to optimize meal planning based on cost, nutrition, and available appliances." 
    },
    { 
      title: "B2B Sales App for Andersen", 
      description: "Worked on an iOS app using Swift and Objective-C to assist affiliate retailers in managing sales for Andersen windows and doors." 
    },
    { 
      title: "Rubik's Cube Math Thesis", 
      description: "Analyzed the mathematical intricacies of the Rubik's cube and its applications to problem-solving, published as my thesis project.",
      link: "/beyond-nuria-v2/Math_Thesis_Rubik_s_Cube_Final.pdf"
    }
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
    <DynamicBackground>
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-20">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{"Beyond Nuria"}</h1>
          
          <div className="flex items-center">
            <ul className="hidden md:flex space-x-6">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
            
            <div className="md:hidden mr-2">
              <button onClick={toggleMenu} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
                {isMenuOpen ? <X className="h-6 w-6 dark:text-white" /> : <Menu className="h-6 w-6 dark:text-white" />}
              </button>
            </div>
            
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 ml-4">
              {theme === 'dark' ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        <ul className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-800 shadow-md`}>
          {['About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{item}</a>
            </li>
          ))}
        </ul>
      </header>

      <main className="relative">
        <section id="hero" className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
          <div className="absolute inset-0">
            <ParticleBackground />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <Image
              src="/beyond-nuria-v2/headshot.jpg"
              alt={content.name}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-8"
            />
            <h2 className="text-4xl font-bold mb-4">{content.name}</h2>
            <p className="text-xl mb-8">{content.title}</p>
            <a href="#contact" className="bg-white text-pink-500 py-2 px-6 rounded-full font-bold hover:bg-gray-100 transition duration-300">Get in Touch</a>
          </div>
        </section>

        <AnimatedSection>
          <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">About Me</h2>
              <div className="max-w-3xl mx-auto">
                {content.about.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 dark:text-gray-300 mb-4 text-justify">{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="projects" className="bg-gray-100 dark:bg-gray-800 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-shadow duration-300 relative group"
                  >
                    <div>
                      {/* Icon/Badge */}
                      <div className="absolute top-4 right-4">
                        {project.title === 'SmartChef' && (
                          <span className="inline-block bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200 text-xs font-semibold px-3 py-1 rounded-full">AI App</span>
                        )}
                        {project.title.includes('CS221') && (
                          <span className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">Prototype</span>
                        )}
                        {project.title.includes('Andersen') && (
                          <span className="inline-block bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200 text-xs font-semibold px-3 py-1 rounded-full">B2B</span>
                        )}
                        {project.title.includes('Rubik') && (
                          <span className="inline-block bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200 text-xs font-semibold px-3 py-1 rounded-full">Academic</span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-justify mb-6">{project.description}</p>
                    </div>
                    {/* Conditional Buttons */}
                    <div className="flex flex-col space-y-3 mt-2">
                      {project.title === 'SmartChef' && (
                        <>
                          <a
                            href={project.testflight}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-500 transition duration-300 text-center"
                          >
                            Try the beta
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-500 transition duration-300 text-center"
                          >
                            Visit site
                          </a>
                        </>
                      )}
                      {project.title === "Rubik's Cube Math Thesis" && project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-purple-600 text-white py-2 px-4 rounded-full font-bold hover:bg-purple-500 transition duration-300 text-center"
                        >
                          Read full thesis
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Get in Touch</h2>
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 mb-10">
                  <a href="/beyond-nuria-v2/Resume_Nuria_Perez_Oct2024.pdf" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white py-2 px-6 rounded-full font-bold hover:bg-purple-500 transition duration-300">
                    View Resume
                  </a>
                  <a href="/beyond-nuria-v2/Resume_Nuria_Perez_Oct2024.pdf" download className="bg-purple-600 text-white py-2 px-6 rounded-full font-bold hover:bg-purple-500 transition duration-300">
                    Download Resume
                  </a>
                </div>
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
            </div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="bg-purple-600 text-white py-8 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {content.name}. All rights reserved.</p>
        </div>
      </footer>
    </DynamicBackground>
  )
}

export default Home
