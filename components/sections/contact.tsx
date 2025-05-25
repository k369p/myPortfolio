"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { FaXTwitter } from "react-icons/fa6"

export default function Contact() {
  const formFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
    { id: "email", label: "Email", type: "email", placeholder: "Your email" },
  ]
  {/* Handler to help submit the form */}
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    const res = await fetch("https://formspree.io/f/xzzrqqdw", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await res.json()
    if (result.ok || result.success) {
      alert("Message sent successfully!")
      form.reset()
    } else {
      alert("Failed to send message.")
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-sky-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 diagonal-lines"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-300/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

      {/* Additional abstract shapes */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-32 h-32 bg-sky-400/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-sky-400/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="text-gray-700 dark:text-sky-200 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out to me using the
            form below or through social media.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold gradient-text mb-6">Get In Touch</h3>

            <form className="space-y-4"
                  //action="https://formspree.io/f/xzzrqqdw"
                  //method="POST"
                  onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-2 gap-4">
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700 dark:text-sky-200 mb-1"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={field.id}
                      name={field.id} // ✅ add name!
                      type={field.type}
                      placeholder={field.placeholder}
                      className="border-sky-200 dark:border-sky-800 focus:border-sky-400 dark:focus:border-sky-400 bg-white/70 dark:bg-sky-900/70 rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-sky-200 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject" // ✅ add name!
                  placeholder="Subject"
                  className="border-sky-200 dark:border-sky-800 focus:border-sky-400 dark:focus:border-sky-400 bg-white/70 dark:bg-sky-900/70 rounded-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-sky-200 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  name="message" // ✅ add name!
                  rows={5}
                  className="border-sky-200 dark:border-sky-800 focus:border-sky-400 dark:focus:border-sky-400 bg-white/70 dark:bg-sky-900/70 rounded-lg"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-600 hover:to-sky-500 text-white border-0 shadow-lg shadow-sky-500/20"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
          {/* Right-side social links section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold gradient-text mb-6">Connect With Me</h3>

            <motion.div whileHover={{ y: -5 }} className="glass-card p-6 rounded-2xl shine">
              <p className="text-gray-700 dark:text-sky-200 mb-6">
                You can also reach out to me through social media or email. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Mail />, text: "keval3690patel@gmail.com", href: "mailto:keval3690patel@gmail.com" },
                  { icon: <Github />, text: "github.com/k369p", href: "https://github.com/k369p" },
                  { icon: <Linkedin />, text: "linkedin.com/in/kp369", href: "https://www.linkedin.com/in/kp369/" },
                  { icon: <SiLeetcode />, text: "leetcode.com/u/Keval3690", href: "https://leetcode.com/u/Keval3690/" },
                
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-gray-700 dark:text-sky-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 * index + 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-800/50 flex items-center justify-center">
                      <div className="w-5 h-5 text-sky-600 dark:text-sky-400">{item.icon}</div>
                    </div>
                    <span>{item.text}</span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1 }}
                className="mt-8"
              >
                <h4 className="text-sm font-semibold text-gray-700 dark:text-sky-200 mb-3">Find me on social media</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <FaFacebook />, href: "https://www.facebook.com/keval.patel.9847" },
                    { icon: <FaXTwitter />, href: "https://x.com/keval87835" },
                    { icon: <FaInstagram />, href: "https://www.instagram.com/stunning_patel03/" },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-800/50 flex items-center justify-center text-sky-600 dark:text-sky-400 hover:bg-sky-200 dark:hover:bg-sky-700/50 transition-colors"
                    >
                      <div className="w-5 h-5">{item.icon}</div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
