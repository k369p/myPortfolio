"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { skills } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-sky-50 dark:bg-sky-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-sky-300/10 rounded-full -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-300/10 rounded-full translate-x-1/2 blur-3xl"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-700 dark:text-sky-200 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here are the main technologies I
            use on a daily basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <motion.div
        className={cn(
          "relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-2xl p-4",
          "glass-card",
          "transition-all duration-300 ease-in-out",
          "hover:border-sky-300 dark:hover:border-sky-400",
          isHovered ? "glow" : "",
        )}
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">{skill.icon}</div>
      </motion.div>

      <motion.p
        className="mt-3 text-sm font-medium text-gray-700 dark:text-sky-200"
        animate={{ color: isHovered ? "#0ea5e9" : "" }}
      >
        {skill.name}
      </motion.p>
    </motion.div>
  )
}
