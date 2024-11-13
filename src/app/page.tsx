'use client'
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollIndicatorControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const projectsElement = projectsRef.current;
      if (!projectsElement) return;

      const projectsPosition = projectsElement.getBoundingClientRect().top;
      const hasReachedProjects = projectsPosition <= window.innerHeight;

      if (hasReachedProjects && !hasScrolled) {
        setHasScrolled(true);
        scrollIndicatorControls.stop();
        scrollIndicatorControls.set({ y: 48 }); // 设置到底部位置
      } else if (!hasReachedProjects && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const scrollToProjects = () => {
    const targetElement = projectsRef.current;
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // 优化到达时的动画效果
    setTimeout(() => {
      targetElement.style.transform = 'translateY(20px)';
      setTimeout(() => {
        targetElement.style.transform = 'translateY(0)';
        targetElement.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      }, 50);
    }, 800);
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
          className="max-w-4xl mx-auto w-full"
        >
          <h1 className="wabi-title text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-8 tracking-wide">
            Hello, I'm <span className="font-normal">Dian</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-80 tracking-wide">
            Developer. Writer. Photographer.
          </p>
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
              { y: 48 } : // 滚动到项目部分时，固定在底部
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
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                bounce: 0.4,
                duration: 1,
                delay: 0.2
              }}
              viewport={{ once: true }}
            >
              <Link href="/projects/project-1" className="block group">
                <div className="relative aspect-[16/9] mb-6 bg-black/5 dark:bg-white/5 overflow-hidden">
                  <Image
                    src="/projects/project1.jpg"
                    alt="Project One"
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg">Project Name</h3>
                    <span className="text-sm opacity-60">2024</span>
                  </div>
                  <p className="text-sm opacity-80">
                    A minimal tool for maximalist thinking
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                bounce: 0.4,
                duration: 1,
                delay: 0.3
              }}
              viewport={{ once: true }}
            >
              <Link href="/projects/project-2" className="block group">
                <div className="relative aspect-[16/9] mb-6 bg-black/5 dark:bg-white/5 overflow-hidden">
                  <Image
                    src="/projects/project2.jpg"
                    alt="Project Two"
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg">Another Project</h3>
                    <span className="text-sm opacity-60">2023</span>
                  </div>
                  <p className="text-sm opacity-80">
                    Description of another fascinating project
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
