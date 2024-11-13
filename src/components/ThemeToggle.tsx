'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8" />; // Placeholder
  }

  return (
    <button 
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-sm hover:opacity-50 transition-opacity"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
} 