import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import BackgroundDesign from "@/components/BackgroundDesign";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben D Rivers | Game Designer & 3D Modeler",
  description: "Portfolio of Ben D Rivers, showcasing game design projects and 3D modeling work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 dark:text-gray-100 transition-colors duration-200 relative`}
      >
        <ThemeProvider>
          <BackgroundDesign />
          <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
            <FlickeringGrid 
              color="rgb(59, 130, 246)" 
              maxOpacity={0.7} 
              squareSize={6}
              gridGap={10}
              flickerChance={0.2}
            />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
