'use client'
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const targetElement = projectsRef.current;
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // 添加到达时的动画效果
    setTimeout(() => {
      targetElement.style.transform = 'translateY(20px)';
      setTimeout(() => {
        targetElement.style.transform = 'translateY(0)';
        targetElement.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }, 50);
    }, 800); // 根据滚动时间调整这个延迟
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="wabi-title text-5xl sm:text-7xl mb-8 tracking-wide">
            Hello, I'm <span className="font-normal">Dian</span>
          </h1>
          <p className="text-xl sm:text-2xl opacity-80 tracking-wide">
            Developer. Writer. Photographer.
          </p>
        </motion.div>

        {/* 滚动指示器 */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer w-6 h-24"
          onClick={scrollToProjects}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-[1px] h-full mx-auto bg-current opacity-10"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [0.22, 1, 0.36, 1]
            }}
          />
          <motion.div
            className="absolute top-0 left-1/2 w-[1px] h-12 bg-current opacity-60"
            initial={{ y: 0 }}
            animate={{ y: 48 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
              repeatDelay: 0.5
            }}
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
