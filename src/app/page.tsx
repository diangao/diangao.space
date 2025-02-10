'use client'
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/data/projects";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('engineering');
  const scrollIndicatorControls = useAnimation();

  type ProjectCategory = 'engineering' | 'tools' | 'expression';

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const projectsPosition = projectsRef.current?.getBoundingClientRect().top || 0;
        setHasScrolled(projectsPosition <= window.innerHeight * 0.6);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToProjects = () => {
    setIsScrolling(true);
    const targetElement = projectsRef.current;
    if (!targetElement) return;

    const targetPosition = targetElement.offsetTop - window.innerHeight * 0.1;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(212, 213, 191, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const ProjectSection = () => {
    return (
      <section 
        ref={projectsRef} 
        className="pt-24 pb-32 bg-background"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div 
            className="flex flex-wrap gap-2 mb-12"
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
                onClick={() => setActiveCategory(id as ProjectCategory)}
                className={`px-4 py-2 text-xs uppercase tracking-widest border ${
                  activeCategory === id 
                    ? 'border-[#d4d5bf]/40 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                }`}
                whileHover={{ 
                  backgroundColor: 'rgba(212, 213, 191, 0.1)',
                  transition: { duration: 0.3 } 
                }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {projects
              .filter(p => p.category === activeCategory)
              .map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-[#d4d5bf]/5 backdrop-blur-[1px] border border-transparent hover:border-[#d4d5bf]/20"
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-lg font-light">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    {project.oneliner}
                  </p>
                  {project.impact && (
                    <div className="flex flex-wrap gap-2">
                      {project.impact.map((item, i) => (
                        <div 
                          key={i}
                          className="px-3 py-1.5 bg-[#d4d5bf]/10 text-sm"
                        >
                          <span className="text-gray-500">{item.metric}</span>
                          <span className="ml-2 font-mono text-[#d4d5bf]">
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
      </section>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="h-[150vh] relative"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: hasScrolled ? 0 : 1,
          transition: { 
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
      >
        <section className="sticky top-0 h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="max-w-4xl mx-auto w-full space-y-10"
          >
            <motion.h1 
              className="wabi-title text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] tracking-tighter"
              initial={{ opacity: 0, filter: "blur(2px)" }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)",
                transition: { delay: 0.2 }
              }}
            >
              <span className="font-extralight">Hello,</span>
              <br />
              <span className="font-medium">I'm Dian</span>
            </motion.h1>

            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 border-t border-[#d4d5bf]/20 pt-8"
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-600 dark:text-gray-300 max-w-[32ch]">
                Building tools that bridge
                <br />
                <span className="text-[#d4d5bf]">AI</span> and human cognition
              </p>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
                Bridging AI, Cognition, and Product Design to shape the future of Intelligent Systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 items-baseline">
                <motion.button
                  whileHover={{ 
                    backgroundColor: "rgba(212, 213, 191, 0.25)",
                    transition: { duration: 0.4 } 
                  }}
                  className="px-6 py-3 text-sm tracking-wider rounded-none 
                    bg-[#d4d5bf]/15 hover:bg-[#d4d5bf]/25 
                    border border-[#d4d5bf]/20
                    backdrop-blur-[1px]
                    transition-all duration-500
                    font-light"
                  onClick={scrollToProjects}
                >
                  Explore My Work
                </motion.button>
                
                <Link
                  href="/writing"
                  className="text-sm tracking-wide 
                    text-gray-500 dark:text-gray-400
                    hover:text-[#d4d5bf]/80 
                    transition-all duration-500
                    flex items-center gap-1.5
                    group"
                  style={{ lineHeight: '2.5rem' }}
                >
                  <span>Thoughts & Reflections</span>
                  <span className="text-[0.85em] opacity-50 transition-opacity group-hover:opacity-70 group-hover:translate-x-0.5 relative top-[0.08em]">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* 滚动指示器 */}
          <motion.div 
            className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer w-6 h-16 md:h-24"
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.8,
              hover: { duration: 0.5 }
            }}
          >
            <motion.div
              className="w-[1px] h-full mx-auto bg-current opacity-10"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ 
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
            <motion.div
              className="absolute top-0 left-1/2 w-[1px] h-12 bg-current opacity-60"
              initial={{ y: 0 }}
              animate={hasScrolled ? 
                { y: 48 } : 
                { 
                  y: [0, 48],
                  transition: {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: [0.22, 1, 0.36, 1],
                    repeatDelay: 0.5
                  }
                }
              }
            />
          </motion.div>
        </section>
      </motion.div>

      {/* Projects Section */}
      <ProjectSection />
    </div>
  );
}
