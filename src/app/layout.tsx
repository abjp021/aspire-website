import type { Metadata } from "next";
import { Open_Sans, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const openSans = Open_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-open-sans',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

const montserrat = Montserrat({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Aspiretechno Global - IT Infrastructure & Technology Solutions",
  description: "Empowering businesses with innovative technology solutions for a digital future. We provide comprehensive IT infrastructure, cloud solutions, cybersecurity, and digital transformation services.",
  keywords: "IT infrastructure, cloud solutions, cybersecurity, digital transformation, technology solutions, IT services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${openSans.variable} ${poppins.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="antialiased bg-white">
        <div className="min-h-screen">
        <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
