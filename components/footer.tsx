"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-sky-500 to-sky-400 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-full">
          
          <motion.div whileHover={{ y: -2 }} className="flex items-center">
            <p className="text-white/90 flex items-center">
              Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="mx-1 h-4 w-4 text-red-500 fill-current" />
              </motion.span>{" "}
              by 
              <img
                src="/kp.png"
                alt="Logo"
                width={50}
                height={50}
                className="ml-1 rounded-full"
              />
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
