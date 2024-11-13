'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Writing() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-sm uppercase tracking-widest mb-16 text-gray-500">Writing</h1>
          <div className="space-y-12">
            {/* Article 1 */}
            <Link href="/writing/article-1" className="block group">
              <article className="grid grid-cols-[1fr,2fr] gap-8 items-baseline">
                <time className="text-sm text-gray-500">Jan 15, 2024</time>
                <div>
                  <h2 className="text-lg group-hover:opacity-50 transition-opacity">
                    On Minimalism in Digital Products
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Exploring the intersection of functionality and simplicity in modern tools.
                  </p>
                </div>
              </article>
            </Link>
            {/* Add more articles */}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 