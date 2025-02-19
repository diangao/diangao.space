'use client'
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('diyangao124@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="prose dark:prose-invert mx-auto">
        <p>
          I grew up in Kunming (
          <Link 
            href="https://www.thebeijinger.com/blog/2023/06/15/get-lost-kunming-yunnans-underrated-capital-city" 
            className="underline hover:opacity-70 transition-opacity italic text-gray-600 dark:text-gray-400"
          >
            here's a good article I found very fond of
          </Link>
          ), watching the people around me navigate life with quiet resilience. At 14, I left home to attend a boarding school in Ashburnham, Massachusetts, learning to hold my ground in a place where no one spoke my language. That was my first real leap—one of many.
        </p>

        <p>
          After my freshman year of college, I took a gap year, co-founded my first startup, and was lucky to be accepted into MiraclePlus (formerly YC China). The experience was intense—I saw firsthand what it takes to build, survive, and scale. It also made me painfully aware of my own gaps.
        </p>

        <p>
          I went back to University of Michigan to go deeper into engineering and execution. Along the way, I worked at MP alumni-founded companies and a startup led by a founder I deeply respect, learning from those ahead of me. Now, finishing up my degree in Computer science and Cognitive Science I'm ready for my next step.
        </p>

        <h2>What I'm Building</h2>
        <p>
          I want to create things that expand imagination and improve how people live, especially for the kind of people I grew up with. I'm drawn to first-principles thinking, outcome-driven work, and teams that execute fast.
        </p>

        <p>
          Right now, I'm building. If you're working on something that pushes boundaries, let's talk.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Contact</h2>
          <button
            onClick={handleCopy}
            className="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            <span className="font-mono">
              diyangao124
              <span className="opacity-50">at</span>
              gmail
              <span className="opacity-50">dot</span>
              com
            </span>
            {copied ? (
              <span className="text-xs text-green-600 dark:text-green-400">
                Copied!
              </span>
            ) : (
              <span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                Click to copy
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
} 