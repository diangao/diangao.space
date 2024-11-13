'use client'
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
              href="/writing" 
              className="text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-all duration-300 rounded-full"
            >
              Writing
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
      <div className="flex md:hidden items-center space-x-4">
        <ThemeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-sm font-light tracking-wider opacity-85"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-wabi dark:bg-sabi py-4 px-4 md:hidden"
          >
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/projects" 
                  className="block text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/writing" 
                  className="block text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Writing
                </Link>
              </li>
              <li>
                <Link 
                  href="/photography" 
                  className="block text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Photography
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100"
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
  );
} 