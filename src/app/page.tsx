'use client'
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/data/projects";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollIndicatorControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const projectsElement = projectsRef.current;
      if (!projectsElement) return;

      const projectsPosition = projectsElement.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;
      
      const threshold = 100;
      
      if (scrollPosition < threshold) {
        setHasScrolled(false);
      } else {
        setHasScrolled(projectsPosition <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const targetElement = projectsRef.current;
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    setTimeout(() => {
      targetElement.style.transform = 'translateY(20px)';
      setTimeout(() => {
        targetElement.style.transform = 'translateY(0)';
        targetElement.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      }, 50);
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative">
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

      {/* Projects Section */}
      <motion.section 
        ref={projectsRef}
        className="px-4 sm:px-6 lg:px-8 pb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="wabi-title text-sm uppercase tracking-[0.2em] mb-16 opacity-60">
            Selected Projects
          </h2>
          <div className="space-y-24">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  bounce: 0.4,
                  duration: 1,
                  delay: 0.2 + (index * 0.1)
                }}
                viewport={{ once: true }}
              >
                <Link href={project.link} className="block group">
                  <div className="relative aspect-[16/9] mb-6 bg-[#d4d5bf]/30 dark:bg-white/5 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg">{project.title}</h3>
                      <span className="text-sm opacity-60">{project.year}</span>
                    </div>
                    <p className="text-sm opacity-80">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
