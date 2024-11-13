import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DianGao.Space",
  description: "Developer, Writer, and Photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500&family=Shippori+Mincho+B1:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body 
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
          bg-[var(--background)] 
          text-[var(--foreground)]
          transition-colors
          duration-300
        `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
