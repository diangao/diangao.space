import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full px-8 py-8 flex justify-between items-center z-50">
      <Link 
        href="/" 
        className="text-sm hover:opacity-50 transition-opacity font-mono"
      >
        DianGao.Space
      </Link>

      <div className="flex items-center space-x-8">
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
        <ThemeToggle />
      </div>
    </nav>
  );
} 