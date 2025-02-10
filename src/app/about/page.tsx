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
          
          <div className="space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Hello! I'm Dian, a developer and designer focused on creating minimal, 
              thoughtful digital experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              I believe in the power of simplicity and intentional design. My work 
              spans software development, writing about technology and design, 
              startup journeys, and personal growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              With a background in cognitive science and computer science, I've 
              contributed to innovative digital tools and products, including startup 
              projects that have taught me the value of resilience and adaptability. 
              My recent experiences reflect my dedication to building impactful, 
              user-focused solutions while continuously learning and evolving.
            </motion.p>

            <motion.div
              className="pt-8 border-t border-[#d4d5bf]/20 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-lg text-gray-900 dark:text-white mb-4">
                Contact
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to reach out at{" "}
                <a 
                  href="mailto:diangao124@gmail.com" 
                  className="underline hover:opacity-50 transition-opacity"
                >
                  diangao124atgmaildotcom
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 