import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, Moon, Sun, ExternalLink, Apple, CookingPot, Cuboid, MapPin, Dribbble } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import DynamicBackground from '../components/DynamicBackground'
import ParticleBackground from '../components/ParticleBackground'

const content = {
  name: 'Nuria Perez',
  title: 'Software Engineer | CS + Math | Curious About Technology, Data & AI',
  about: [
    `Hi, I'm Nuria. I'm a software engineer with a background in computer science and mathematics, currently pursuing my M.S. in Computer Science at Georgia Tech.`,
    `I enjoy working on problems where software, data, and the real world intersect. At work, I've worked across application development and enterprise systems, and I'm currently helping implement a new ERP system across a large manufacturing organization. A lot of my work involves figuring out how systems, data, and people need to fit together, which I find surprisingly fun.`,
    `Outside of work and school, I build things because I like learning by doing. My biggest side project is SmartChef, an iOS app I built to make weekly meal planning a little less painful. (Although that is currently slightly abandoned.) I've also taken Stanford's CS221 course and am currently getting my Master's in Computer Science and Computer Systems specialization at Georgia Tech.`,
    `I'm originally from Barcelona, Spain, and now live in Washington with my husband and our lovely dog Tiger. Outside of tech, you'll usually find me coaching basketball, solving Rubik's cubes, cooking, or working on some project I probably didn't need to start.`,
  ],
  projects: [
    {
      id: 'smartchef',
      title: 'SmartChef',
      subtitle: 'iOS App | SwiftUI + AWS',
      description: [
        'I built SmartChef to make weekly meal planning a little less painful. The app generates personalized meal plans based on dietary preferences, nutrition goals, available appliances, and ingredients, then creates a grocery list.',
      ],
      tech: ['SwiftUI', 'AWS Lambda', 'AppSync', 'Cognito', 'S3'],
      featured: true,
      links: [
        { label: 'App Store', href: 'https://apps.apple.com/us/app/gosmartchef/id6746528130' },
        { label: 'Website', href: 'https://gosmartchef.com' },
      ],
    },
    {
      id: 'ml4t',
      title: 'Strategy Learner: Machine Learning for Trading',
      subtitle: 'Georgia Tech | CS 7646',
      description: [
        'Built a machine-learning trading strategy using Python, NumPy, Pandas, and ensemble learning. The strategy used technical indicators including BBP, RSI, and MACD to generate trading signals based on predicted future returns.',
        'Implemented a Random Tree Learner with bagging to classify market conditions as long, short, or neutral, then translated model predictions into portfolio positions and trades.',
      ],
      tech: [
        'Python',
        'NumPy',
        'Pandas',
        'Machine Learning',
        'Random Trees',
        'Ensemble Learning',
        'Financial Data',
      ],
    },
    {
      id: 'cs221',
      title: 'AI-Optimized Weekly Menu Generator',
      subtitle: 'Stanford University | CS221',
      description: [
        "Built an early prototype for an AI-assisted weekly meal planner as part of Stanford's CS221: Artificial Intelligence Principles and Techniques. The project explored how cost, nutrition, dietary preferences, and available appliances could be incorporated into meal-planning decisions.",
        'The project eventually became the foundation for SmartChef, which I continued developing independently.',
      ],
      tech: ['AI', 'Optimization', 'Python'],
    },
    {
      id: 'rubiks',
      title: "The Mathematics of the Rubik's Cube",
      subtitle: 'Undergraduate Mathematics Thesis',
      description: [
        'Explored the mathematical structure of the Rubik\'s Cube and its applications to problem-solving and algorithms.',
      ],
      funFact: "Fun fact: I still compete in Rubik's Cube competitions.",
      tech: ['Group Theory', 'Combinatorics', 'Algorithms'],
      links: [
        { label: 'Read the thesis', href: '/beyond-nuria-v2/Math_Thesis_Rubik_s_Cube_Final.pdf' },
      ],
    },
    {
      id: 'andersen',
      title: 'Andersen Sales & Quoting App',
      subtitle: 'iOS | Swift + Objective-C',
      description: [
        'Worked on an internal iOS application supporting affiliate retailers in sales and quoting for Andersen windows and doors.',
      ],
      tech: ['Swift', 'Objective-C', 'iOS'],
    },
  ],
  beyondTech: [
    {
      title: 'Basketball',
      icon: Dribbble,
      text: 'I played NCAA Division III basketball in college and now coach high school girls\' basketball.',
    },
    {
      title: 'Rubik\'s Cubes',
      icon: Cuboid,
      text: 'I compete in speedcubing and enjoy the weird intersection of algorithms, pattern recognition, and muscle memory.',
    },
    {
      title: 'Spain',
      icon: MapPin,
      text: 'I\'m originally from Barcelona, and I still spend as much time as I can back home.',
    },
    {
      title: 'Cooking',
      icon: CookingPot,
      text: 'I cook a lot, which is, incidentally, how SmartChef happened.',
    },
  ],
  socials: {
    github: 'https://github.com/nperezcasas',
    linkedin: 'https://www.linkedin.com/in/nuria-perez-casas/',
    email: 'nupc20@gmail.com',
  },
  resume: '/beyond-nuria-v2/Resume_Nuria_Perez_Casas.pdf',
}

const navItems = ['About', 'Projects', 'Beyond', 'Contact']

const ProjectCard: React.FC<{
  project: (typeof content.projects)[number]
  index: number
}> = ({ project, index }) => {
  const isFeatured = Boolean(project.featured)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-600/80 bg-white dark:bg-gray-700 p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl ${
        isFeatured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          isFeatured
            ? 'bg-gradient-to-br from-emerald-500/5 via-transparent to-sky-500/10'
            : 'bg-gradient-to-br from-violet-500/5 via-transparent to-transparent'
        }`}
      />

      <div className={isFeatured ? 'relative grid gap-8 lg:grid-cols-[1.4fr_1fr]' : 'relative flex h-full flex-col'}>
        <div className="flex flex-col">
          <p className="mb-2 text-sm font-medium tracking-wide text-emerald-700 dark:text-emerald-300">
            {project.subtitle}
          </p>
          <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <div className="mb-4 space-y-3">
            {project.description.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-gray-600 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>

          {'funFact' in project && project.funFact && (
            <p className="mb-4 text-sm italic text-violet-700 dark:text-violet-300">{project.funFact}</p>
          )}

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-600 dark:text-gray-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {'links' in project && project.links && (
          <div className={`mt-auto flex flex-col gap-3 ${isFeatured ? 'lg:justify-end lg:self-end' : ''}`}>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-center text-sm font-semibold text-white transition duration-300 hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                {link.label === 'App Store' ? <Apple className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
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
      <header className="sticky top-0 z-20 bg-white/90 shadow-sm backdrop-blur dark:bg-gray-900/90">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Beyond Nuria</h1>

          <div className="flex items-center">
            <ul className="hidden space-x-6 md:flex">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mr-2 md:hidden">
              <button onClick={toggleMenu} className="rounded-md bg-gray-200 p-2 dark:bg-gray-700">
                {isMenuOpen ? <X className="h-6 w-6 dark:text-white" /> : <Menu className="h-6 w-6 dark:text-white" />}
              </button>
            </div>

            <button onClick={toggleTheme} className="ml-4 rounded-full bg-gray-200 p-2 dark:bg-gray-700">
              {theme === 'dark' ? (
                <Sun className="h-6 w-6 text-yellow-500" />
              ) : (
                <Moon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </nav>

        <ul className={`${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-md md:hidden dark:bg-gray-800`}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <main className="relative">
        <section id="hero" className="relative overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-20 text-white">
          <div className="absolute inset-0">
            <ParticleBackground />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
            >
              <Image
                src="/beyond-nuria-v2/headshot.jpg"
                alt={content.name}
                width={150}
                height={150}
                className="mx-auto mb-8 rounded-full shadow-xl ring-4 ring-white/40"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-4xl font-bold md:text-5xl"
            >
              {content.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg md:text-xl"
            >
              {content.title}
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="#contact"
              className="inline-block rounded-full bg-white px-6 py-2 font-bold text-pink-500 transition duration-300 hover:bg-gray-100"
            >
              Get in Touch
            </motion.a>
          </div>
        </section>

        <AnimatedSection>
          <section id="about" className="bg-white py-20 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-center text-3xl font-bold dark:text-white">About Me</h2>
              <div className="mx-auto max-w-3xl space-y-4">
                {content.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-justify text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="projects" className="bg-gray-100 py-20 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="mb-3 text-center text-3xl font-bold dark:text-white">Projects</h2>
              <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600 dark:text-gray-300">
                Things I&apos;ve built, shipped, and studied, from a side project that became a real app to work that lives in production.
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {content.projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="beyond" className="bg-white py-20 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="mb-3 text-center text-3xl font-bold dark:text-white">Beyond Tech</h2>
              <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600 dark:text-gray-300">
                The other half of the story, usually more telling than a résumé bullet.
              </p>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
                {content.beyondTech.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="rounded-full bg-white p-2 shadow-sm dark:bg-gray-700">
                          <Icon className="h-5 w-5 text-pink-500" />
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact" className="bg-gray-100 py-20 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-center text-3xl font-bold dark:text-white">Get in Touch</h2>
              <div className="mx-auto max-w-3xl">
                <div className="mb-10 flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                  <a
                    href={content.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-purple-600 px-6 py-2 font-bold text-white transition duration-300 hover:bg-purple-500"
                  >
                    View Resume
                  </a>
                  <a
                    href={content.resume}
                    download
                    className="rounded-full bg-purple-600 px-6 py-2 font-bold text-white transition duration-300 hover:bg-purple-500"
                  >
                    Download Resume
                  </a>
                </div>
                <div className="flex justify-center space-x-6">
                  <a
                    href={content.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    <Github className="h-8 w-8" />
                  </a>
                  <a
                    href={content.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    <Linkedin className="h-8 w-8" />
                  </a>
                  <a
                    href={`mailto:${content.socials.email}`}
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    <Mail className="h-8 w-8" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="relative z-20 bg-purple-600 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} {content.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </DynamicBackground>
  )
}

export default Home
