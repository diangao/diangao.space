import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 right-0 p-8 z-50">
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
    </nav>
  );
} 