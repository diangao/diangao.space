'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroText() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen -mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-center space-y-6"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-normal tracking-wide wabi-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Hello, I'm Dian
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light tracking-wider opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          A developer who loves design and photography
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.button
            className="px-6 py-3 text-sm tracking-wider border border-current rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
} 