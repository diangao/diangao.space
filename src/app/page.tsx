'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Navigation Bar */}
      <nav className="fixed top-0 right-0 p-8 z-50">
        <ul className="flex space-x-8 text-sm">
          <li>
            <Link href="/projects" className="hover:opacity-50 transition-opacity">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/writing" className="hover:opacity-50 transition-opacity">
              Writing
            </Link>
          </li>
          <li>
            <Link href="/photography" className="hover:opacity-50 transition-opacity">
              Photography
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:opacity-50 transition-opacity">
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl font-light mb-6">
            Hello, I'm <span className="font-normal">Dian</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Developer. Writer. Photographer.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-widest mb-16 text-gray-500">Selected Projects</h2>
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
                    <h3 className="text-lg">Project Name</h3>
                    <span className="text-sm text-gray-500">2024</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">A minimal tool for maximalist thinking</p>
                </div>
              </Link>

              {/* Project 2 */}
              <Link href="/projects/project-2" className="block group">
                <div className="relative aspect-[16/9] mb-6 bg-black/5 dark:bg-white/5 overflow-hidden">
                  <Image
                    src="/projects/project2.jpg"
                    alt="Project Two"
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg">Another Project</h3>
                    <span className="text-sm text-gray-500">2023</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Description of another fascinating project</p>
                </div>
              </Link>

              {/* Add more projects as needed */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
