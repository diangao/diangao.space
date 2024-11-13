import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full px-8 py-8 flex justify-between items-center z-50">
      <Link 
        href="/" 
        className="wabi-title text-lg tracking-wide hover:opacity-60 transition-opacity duration-300"
      >
        DianGao<span className="opacity-60">.Space</span>
      </Link>

      <div className="flex items-center space-x-12">
        <ul className="flex space-x-12 text-sm tracking-wide">
          <li>
            <Link href="/projects" className="hover:opacity-60 transition-opacity duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/writing" className="hover:opacity-60 transition-opacity duration-300">
              Writing
            </Link>
          </li>
          <li>
            <Link href="/photography" className="hover:opacity-60 transition-opacity duration-300">
              Photography
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:opacity-60 transition-opacity duration-300">
              About
            </Link>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
} 