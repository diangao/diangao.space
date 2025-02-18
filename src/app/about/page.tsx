'use client'
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="prose dark:prose-invert mx-auto">
        <p>
          I grew up in Kunming, watching the people around me navigate life with quiet resilience. At 14, I left home to attend a boarding school in Ashburnham, Massachusetts, learning to hold my ground in a place where no one spoke my language. That was my first real leap—one of many.
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
      </div>
    </div>
  );
} 