'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Company Inc.',
      position: 'Senior Full-Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on a major project',
        'Implemented CI/CD pipeline improving deployment efficiency'
      ]
    },
    {
      company: 'StartupXYZ',
      position: 'Full-Stack Developer',
      duration: '2020 - 2022',
      location: 'Remote',
      description: 'Built and maintained multiple web applications for clients. Worked with various technologies and frameworks based on project requirements.',
      technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
      achievements: [
        'Delivered 15+ client projects on time and budget',
        'Developed reusable component library',
        'Improved code quality and testing coverage'
      ]
    },
    {
      company: 'Digital Agency',
      position: 'Frontend Developer',
      duration: '2018 - 2020',
      location: 'New York, NY',
      description: 'Created responsive websites and web applications for clients. Focused on user experience and modern web standards.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'Shopify'],
      achievements: [
        'Built 20+ responsive websites',
        'Improved client satisfaction scores',
        'Learned modern frontend frameworks'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      duration: '2014 - 2018',
      description: 'Focused on software engineering, algorithms, and web development. Graduated with honors.'
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2 mb-2">
                    <Building size={20} className="text-primary-400" />
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-gray-400">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <h4 className="text-lg font-medium text-primary-400">
                    {exp.position}
                  </h4>
                </div>
                
                <div className="lg:w-2/3">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-400 mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-800 text-xs rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium text-gray-400 mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold mb-8">
            <span className="gradient-text">Education</span>
          </h3>
          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                <p className="text-primary-400 mb-2">{edu.school}</p>
                <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
