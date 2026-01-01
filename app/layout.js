import localFont from "next/font/local";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import ParticlesBackground from "@/components/particles-background";
import PageTransition from "@/components/page-transition";
import LoadingScreen from "@/components/loading-screen";

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

export const metadata = {
  title: "Lenny's Portfolio - Software Engineer (AI/ML)",
  description: "Portfolio of Lenny Uwaeme - Software Engineer specializing in AI/ML, Full Stack Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        style={{ overflowX: 'hidden', maxWidth: '100vw' }}
      >
        <LoadingScreen />
        <ParticlesBackground />
        <TooltipProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </TooltipProvider>
        
      </body>
    </html>
  );
}
