'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  thoughts?: string;
}

interface Note {
  id: number;
  content: string;
  type: 'thought' | 'quote' | 'writing';
  link?: string;
  date: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Book of Tea",
    author: "Okakura Kakuzō",
    cover: "/books/book-of-tea.jpg",
    thoughts: "On the philosophy of tea as a living art"
  },
  // 添加更多书籍
];

const notes: Note[] = [
  {
    id: 1,
    content: "The beauty lies not in the thing itself, but in the patterns of shadows",
    type: "quote",
    date: "Winter 2024"
  },
  // 添加更多笔记
];

export default function Recents() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-32"
        >
          {/* Bookshelf Section */}
          <section>
            <h1 className="text-sm uppercase tracking-widest mb-16 text-gray-500">
              Reading Shelf
            </h1>
            
            {/* Zen-style Bookshelf */}
            <div className="relative">
              {/* Shelf Shadow */}
              <div className="absolute -bottom-6 left-0 right-0 h-6 bg-gradient-to-b from-black/5 to-transparent" />
              
              {/* Books Container */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {books.map((book) => (
                  <motion.div
                    key={book.id}
                    className="relative aspect-[3/4] group"
                    whileHover={{ y: -8 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20 
                    }}
                  >
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      className="object-cover rounded-sm shadow-sm"
                    />
                    {/* Zen-style Hover Effect */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 backdrop-blur-[2px]">
                      <div className="text-white h-full flex flex-col justify-end">
                        <h3 className="text-sm font-light">{book.title}</h3>
                        <p className="text-xs text-white/70 mt-1">{book.author}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Whiteboard Section */}
          <section>
            <h1 className="text-sm uppercase tracking-widest mb-16 text-gray-500">
              Notes & Thoughts
            </h1>
            
            {/* Zen-style Whiteboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {notes.map((note) => (
                <motion.div
                  key={note.id}
                  className="relative bg-[#d4d5bf]/40 dark:bg-white/5 backdrop-blur-[2px] p-6 rounded-sm shadow-sm"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {note.link ? (
                    <Link href={note.link} className="block h-full">
                      <div className="h-full flex flex-col">
                        <p className="text-sm leading-relaxed flex-grow text-gray-800/90 dark:text-gray-200">
                          {note.content}
                        </p>
                        <div className="mt-4 pt-4 border-t border-[#a2a392]/20 dark:border-white/5 flex items-center justify-between text-xs text-gray-600/90 dark:text-gray-400">
                          <span className="uppercase tracking-wider">
                            {note.type}
                          </span>
                          <time>{note.date}</time>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="h-full flex flex-col">
                      <p className="text-sm leading-relaxed flex-grow text-gray-800 dark:text-gray-200">
                        {note.content}
                      </p>
                      <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/5 flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                        <span className="uppercase tracking-wider">
                          {note.type}
                        </span>
                        <time>{note.date}</time>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
} 