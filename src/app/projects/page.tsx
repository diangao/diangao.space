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
                <Link 
                  key={project.id}
                  href={project.link}
                  className="block p-6 hover:bg-gray-50/50 dark:hover:bg-gray-800/20 rounded-xl transition-colors"
                  target="_blank"
                >
                  <article className="grid grid-cols-[1fr,2fr] gap-8 items-baseline">
                    {/* 左侧时间 */}
                    <time className="text-sm text-gray-500">{project.year}</time>
                    
                    {/* 右侧内容 */}
                    <div>
                      <h2 className="text-lg group-hover:opacity-50 transition-opacity">
                        {project.emoji} {project.title}
                      </h2>
                      {/* 描述和 tags */}
                      <div className="mt-4 space-y-4">
                        <p className="text-sm text-gray-600 dark:text-gray-300">{project.oneliner}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags?.map((tag) => (
                            <span 
                              key={tag}
                              className="px-2.5 py-1 text-[0.7rem] tracking-tight rounded-full 
                                       bg-[#f0f1ec] text-gray-600/90 
                                       dark:bg-gray-700/30 dark:text-gray-300/80
                                       border border-[#d4d5bf]/30 dark:border-gray-600/50
                                       hover:bg-[#e4e5df] dark:hover:bg-gray-600/40 transition-colors
                                       font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 