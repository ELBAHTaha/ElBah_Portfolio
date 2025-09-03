'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ]

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-max py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Your Name
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full-stack developer passionate about creating innovative web solutions
              and turning ideas into reality through clean, efficient code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-900 border border-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-dark-800 pt-8"
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Your Name. All rights reserved. Made with{' '}
              <Heart size={16} className="inline text-red-500" /> using Next.js
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
