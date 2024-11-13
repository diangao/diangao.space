import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full px-8 py-8 flex justify-between items-center z-50">
      <Link 
        href="/" 
        className="wabi-title text-xl font-normal tracking-wide hover:opacity-60 transition-opacity duration-300"
      >
        DianGao<span className="opacity-50">.Space</span>
      </Link>

      <div className="flex items-center space-x-12">
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
    </nav>
  );
} 