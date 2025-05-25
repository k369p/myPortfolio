"use client"

import { motion } from "framer-motion"
import { journey } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function Journey() {
  return (
    <section id="journey" className="py-20 bg-sky-50 dark:bg-sky-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-300/10 rounded-full translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-sky-300/10 rounded-full -translate-x-1/2 blur-3xl"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Journey</h2>
          <p className="text-gray-700 dark:text-sky-200 max-w-2xl mx-auto">
            My professional path and educational background that have shaped my career in web development.
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute h-full w-1 bg-gradient-to-b from-sky-400 to-sky-300 dark:from-sky-400 dark:to-sky-300"
          />

          <div className="space-y-24 w-full">
            {journey.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: (typeof journey)[0]; index: number }) {
  const isLeft = item.side === "left" 
  {/*isEven = index % 2 === 0*/}

  return (
    <div className="relative flex items-center justify-center">
      {/* Timeline dot - positioned in the center */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        className="absolute z-10 w-5 h-5 rounded-full bg-gradient-to-r from-sky-500 to-sky-400"
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 rounded-full bg-sky-400/30"
        />
      </motion.div>

      {/* Content positioned to the left or right */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn("w-5/12", isLeft ? "mr-auto pr-8 text-right" : "ml-auto pl-8 text-left")}
      >
        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card p-6 rounded-2xl hover:glow transition-all duration-300 shine"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold gradient-text">{item.title}</h3>
            <span className="text-sm text-sky-500 dark:text-sky-400 font-medium text-right">
              {item.period}
            </span>
          </div>
          <div className="text-sm text-sky-600 dark:text-sky-400 mb-3">{item.organization}</div>
          <p className="text-gray-700 dark:text-sky-200">{item.description}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
