'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Photography() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-sm uppercase tracking-widest mb-16 text-gray-500">Photography</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Collection 1 */}
            <Link href="/photography/collection-1" className="block group">
              <div className="relative aspect-square mb-4 bg-black/5 dark:bg-white/5 overflow-hidden">
                <Image
                  src="/photography/collection1.jpg"
                  alt="Collection One"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <h2 className="text-sm group-hover:opacity-50 transition-opacity">Spaces</h2>
            </Link>
            {/* Add more collections */}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 