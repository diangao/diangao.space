'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

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
            {projects.map((project) => (
              <Link key={project.id} href={project.link} className="block group">
                <div className="relative p-6 rounded-sm">
                  <div className="relative aspect-[16/9] mb-6 overflow-hidden bg-[#d4d5bf]/30 dark:bg-white/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h2 className="text-lg">{project.title}</h2>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 