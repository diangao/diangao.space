'use client'
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-sm uppercase tracking-widest mb-16 text-gray-500">
            About
          </h1>
          
          <div className="space-y-8 text-gray-600 dark:text-gray-300">
            <p>
              Hello! I'm Dian, a developer and designer focused on creating minimal, 
              thoughtful digital experiences.
            </p>

            <p>
              I believe in the power of simplicity and intentional design. My work 
              spans across software development, writing about technology and design, 
              and capturing moments through photography.
            </p>

            <h2 className="text-lg text-gray-900 dark:text-white pt-8">
              Current Focus
            </h2>
            <p>
              I'm currently working on [your current project/focus]. Previously, 
              I [brief background or achievement].
            </p>

            <h2 className="text-lg text-gray-900 dark:text-white pt-8">
              Contact
            </h2>
            <p>
              Feel free to reach out at{" "}
              <a 
                href="mailto:your@email.com" 
                className="underline hover:opacity-50 transition-opacity"
              >
                your@email.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 