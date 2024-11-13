import type { Metadata } from "next";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "DianGao.Space",
  description: "Personal space of DianGao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          antialiased
          bg-[var(--background)] 
          text-[var(--foreground)]
          transition-colors
          duration-300
        `}
      >
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
