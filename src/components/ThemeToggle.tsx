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
    return <span className="w-8" />; // Changed to span to match text style
  }

  return (
    <button 
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-sm hover:opacity-50 transition-opacity"
    >
      {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
} 