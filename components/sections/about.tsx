"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-sky-900 relative overflow-hidden clip-path-slant">
      {/* Background Elements */}
      <div className="absolute inset-0 diagonal-lines"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-300/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-300/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>

      {/* Abstract animated shapes */}
      <motion.div className="absolute top-1/4 left-1/3 w-32 h-32 bg-sky-400/5 rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }} />
      <motion.div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-sky-400/5 rounded-full blur-xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }} />
      <motion.div className="absolute top-2/3 left-1/4 w-24 h-24 bg-sky-400/5 rounded-full blur-lg"
        animate={{ scale: [1, 1.4, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 10, repeat: Infinity }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Video */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.1, delay: 0.1 }}
              className="p-0 rounded-2xl overflow-hidden"
            >
              <video
                src="/media/Programming.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </motion.div>


            {/* Right: Who I Am */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="section-subtitle">Who I Am</h3>
              <p className="text-gray-700 dark:text-sky-200 mb-6">
                Hi, I’m Keval Patel — a full-stack developer with nearly 3 years of hands-on 
                experience turning complex problems into practical web solutions. 
                I've worked across the stack using tools like React, Next.js, Node.js, 
                and Spring Boot to build fast, scalable, and user-friendly applications.
              </p>
              <p className="text-gray-700 dark:text-sky-200 mb-6">
                I’ve create and contributed to real-world products in both startup and 
                enterprise environments — from building school management systems to 
                optimizing e-commerce performance using Redis, Hibernate, AWS and many more. 
                What drives me is the challenge of connecting systems that not only work 
                but feel intuitive to the end user.
              </p>
              <p className="text-gray-700 dark:text-sky-200 mb-8">
                Right now, I’m pursuing my Master’s in IT, constantly leveling up my skills 
                while bringing industry knowledge into every project I take on. Outside of 
                coding, I love diving into new tech blogs, testing out frameworks, and 
                occasionally getting lost with friends playing volleyball or table-tennis.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="/media/KevalResume.pdf" download>
                  <Button className="bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-600 hover:to-sky-500 text-white border-0 shadow-lg shadow-sky-500/20">
                    <FileDown className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
