import type { Metadata } from "next";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";
import StarryNight from "@/components/StarryNight";
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
      <body suppressHydrationWarning>
        <Providers>
          <div className="relative min-h-screen bg-wabi text-[rgb(var(--fg-wabi))] dark:bg-sabi dark:text-[rgb(var(--fg-sabi))]">
            <StarryNight />
            <Navigation />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
