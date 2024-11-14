'use client'
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 蒙层 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/10 dark:bg-black/20 backdrop-blur-[2px] z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav className="fixed top-0 w-full px-4 md:px-8 py-4 md:py-8 flex justify-between items-center z-50">
        <Link 
          href="/" 
          className="wabi-title text-lg md:text-xl font-normal tracking-wide hover:opacity-60 transition-opacity duration-300"
        >
          DianGao<span className="opacity-50">.Space</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-12">
            <li>
              <Link 
                href="/projects" 
                className="text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-all duration-300 rounded-full"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/recents" 
                className="text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-all duration-300 rounded-full"
              >
                Recents
              </Link>
            </li>
            <li>
              <Link 
                href="/photography" 
                className="text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-all duration-300 rounded-full"
              >
                Photography
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-all duration-300 rounded-full"
              >
                About
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-8">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-opacity text-right w-12"
          >
            Menu
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[calc(100%-4px)] right-0 w-[120px] py-4 md:hidden mr-4 overflow-hidden"
            >
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/projects" 
                    className="block text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-opacity text-right pr-4 whitespace-nowrap"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/recents" 
                    className="block text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-opacity text-right pr-4 whitespace-nowrap"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Recents
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/photography" 
                    className="block text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-opacity text-right pr-4 whitespace-nowrap"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Photography
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="block text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-opacity text-right pr-4 whitespace-nowrap"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
} 