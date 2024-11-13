import type { Metadata } from "next";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";
import StarryNight from "@/components/StarryNight";
import "./globals.css";

export const metadata: Metadata = {
  title: "DianGao.Space",
  description: "Developer. Writer. Photographer.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  openGraph: {
    title: "DianGao.Space",
    description: "Developer. Writer. Photographer.",
    url: "https://diangao.space",
    siteName: "DianGao.Space",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://diangao.space"),
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
            <div className="relative min-h-screen bg-transparent">
              <Navigation />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
