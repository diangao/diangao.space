'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const buttonStyles = "text-sm font-light tracking-wider opacity-85 dark:opacity-70 hover:opacity-100 transition-opacity text-right w-8";

  if (!mounted) {
    return <div className={buttonStyles} aria-hidden="true"></div>;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={buttonStyles}
    >
      {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
} 