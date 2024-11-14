import type { Metadata } from "next";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";
import StarryNight from "@/components/StarryNight";
import "./globals.css";

export const metadata: Metadata = {
  title: "DianGao.Space",
  description: "Developer. Writer. Photographer.",
  icons: {
    icon: "/icon.png"
  }
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
          <div className="fixed inset-0 w-full h-full">
            <StarryNight />
          </div>
          <div className="relative z-10">
            <div className="relative min-h-screen bg-[#d4d5bf]/10 dark:bg-transparent backdrop-blur-[1px] dark:backdrop-blur-none">
              <Navigation />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
