"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import ParticlesSimple from "@/components/particles-simple"
import SpaceBackground from "@/components/space-background"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute inset-0 noise-bg"></div>
        <SpaceBackground />
        <ParticlesSimple color="#0ea5e9" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl"></div>

        {/* Abstract shapes */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-sky-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-sky-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-20 bg-sky-400/10 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-sky-500/10 rounded-full blur-lg"></div>

        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-40 h-40 bg-gradient-to-br from-sky-400/10 to-sky-300/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-tr from-sky-400/10 to-sky-300/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 floating"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-sky-300 rounded-full blur opacity-50"
            ></motion.div>
            <Image
              src="/media/KevalPatel.png"
              alt="Profile"
              width={224}
              height={224}
              className="rounded-full border-4 border-white dark:border-sky-900 shadow-lg object-cover relative"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 glow-text text-sky-700 dark:text-sky-100"
        >
          Hi, I&apos;m{" "}
          <motion.span
            className="gradient-text inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <TypeAnimation
              sequence={["Keval Patel", 1000, "a Developer", 1000, "a Designer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-sky-200 mb-8 max-w-2xl"
        >
          I love turning ideas into interactive, beautiful but simple websites.
          Let’s build something people will actually enjoy using.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-600 hover:to-sky-500 text-white border-0 shadow-lg shadow-sky-500/20"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-sky-300 text-sky-600 hover:bg-sky-50 dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-900/20"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="mt-4"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
