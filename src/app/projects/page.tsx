'use client'
import { useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('engineering');

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16 space-y-8">
            <h1 className="text-sm uppercase tracking-widest text-gray-500">Projects</h1>
            
            {/* 分类导航 */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[
                { id: 'engineering', label: 'AI Engineering' },
                { id: 'tools', label: 'Mind Tools' },
                { id: 'expression', label: 'Creative Expression' }
              ].map(({ id, label }) => (
                <motion.button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest border ${
                    activeCategory === id 
                      ? 'border-[#d4d5bf]/40 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                  }`}
                  whileHover={{ 
                    backgroundColor: 'rgba(212, 213, 191, 0.1)',
                    transition: { duration: 0.3 } 
                  }}
                  animate={{
                    borderColor: activeCategory === id 
                      ? '#d4d5bf/40' 
                      : 'transparent'
                  }}
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <div className="space-y-24">
            {projects
              .filter(project => project.category === activeCategory)
              .map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -5 }}
                  className="relative p-6 rounded-sm bg-[#d4d5bf]/5 backdrop-blur-[1px] border border-transparent hover:border-[#d4d5bf]/20 transition-all"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-light">{project.title}</h2>
                      <div className="flex items-center gap-3">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl opacity-50"
                        >
                          {project.emoji}
                        </motion.div>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {project.oneliner}
                    </p>
                  </div>

                  {project.impact && (
                    <div className="flex flex-wrap gap-4 mt-6">
                      {project.impact.map((item, index) => (
                        <div
                          key={index}
                          className="px-3 py-1.5 bg-[#d4d5bf]/10 text-sm"
                        >
                          <span className="text-gray-500">{item.metric}: </span>
                          <span className="font-mono text-[#d4d5bf]">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 