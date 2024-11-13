'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Projects() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-sm uppercase tracking-widest mb-16 text-gray-500">All Projects</h1>
          <div className="space-y-24">
            {/* Project 1 */}
            <Link href="/projects/project-1" className="block group">
              <div className="relative aspect-[16/9] mb-6 bg-black/5 dark:bg-white/5 overflow-hidden">
                <Image
                  src="/projects/project1.jpg"
                  alt="Project One"
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-lg">Project Name</h2>
                  <span className="text-sm text-gray-500">2024</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  A minimal tool for maximalist thinking
                </p>
              </div>
            </Link>
            {/* Add more projects */}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 