"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-sky-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 diagonal-lines"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-300/10 rounded-full -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-300/10 rounded-full translate-y-1/2 blur-3xl"></div>

      {/* Additional abstract shapes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-36 h-36 bg-sky-400/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-sky-400/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="text-gray-700 dark:text-sky-200 max-w-2xl mx-auto">
            Here are some of my projects. Each project is built with modern technologies and follows best
            practices for performance, accessibility, and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden hover:glow transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-sky-400/20 mix-blend-overlay"></div>
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4 text-white opacity-0 transition-opacity duration-300"
        >
          <p className="text-sm">Click to view details</p>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold gradient-text mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-sky-200 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-xs px-3 py-1 rounded-full bg-sky-100/70 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-4">

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-sky-300 text-sky-600 hover:bg-sky-50 dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-900/20"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </motion.div>
            </a>
          )}
          {/* This button is for live links
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="sm"
              className="bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-600 hover:to-sky-500 text-white border-0 shadow-lg shadow-sky-500/20"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </motion.div> 
          */}
        </div>
      </div>
    </motion.div>
  )
}
