'use client'

import { motion } from 'framer-motion'
import { User, Code, Lightbulb, Target } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Finding innovative solutions to complex technical challenges'
    },
    {
      icon: Target,
      title: 'User Focused',
      description: 'Creating intuitive experiences that users love'
    },
    {
      icon: User,
      title: 'Team Player',
      description: 'Collaborating effectively in agile development teams'
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Turning Ideas Into Reality
            </h3>
            <p className="text-gray-400 mb-6">
              With over X years of experience in web development, I specialize in building
              modern, scalable applications using cutting-edge technologies. My journey in
              tech started with curiosity and has evolved into a passion for creating
              solutions that make a difference.
            </p>
            <p className="text-gray-400 mb-6">
              I believe in writing clean, maintainable code and staying up-to-date with
              the latest industry trends. When I'm not coding, you can find me exploring
              new technologies, contributing to open source, or sharing knowledge with
              the developer community.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-dark-800 rounded-full text-sm">
                React/Next.js
              </span>
              <span className="px-4 py-2 bg-dark-800 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-dark-800 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-4 py-2 bg-dark-800 rounded-full text-sm">
                Full-Stack
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-dark-800 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <Code size={80} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center group hover:border-primary-500/50"
            >
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors duration-200">
                <feature.icon size={32} className="text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
