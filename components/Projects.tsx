'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and secure payment processing.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations and a dark theme.',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather conditions and forecasts using OpenWeatherMap API.',
      technologies: ['React', 'TypeScript', 'OpenWeatherMap API', 'Chart.js'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for blogs with markdown support, user authentication, and admin dashboard.',
      technologies: ['Next.js', 'Markdown', 'Prisma', 'PostgreSQL', 'NextAuth'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, private messaging, and file sharing capabilities.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Multer'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      featured: false
    }
  ]

  return (
    <section id="projects" className="section-padding bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've built to showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card group hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div className="w-full h-48 bg-dark-800 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-800 text-xs rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6">More Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="w-full h-32 bg-dark-800 rounded-lg"></div>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-800 text-xs rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            View More on GitHub
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
