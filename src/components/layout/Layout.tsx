'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { LayoutProps } from '@/types';
import { HiOutlinePhone } from 'react-icons/hi2';
import Link from 'next/link';

export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check for user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="flex-grow">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </main>

        <Footer />
        {/* Floating Contact Button - Global, hidden on /contact */}
        {pathname !== '/contact' && (
          <div className="fixed bottom-6 right-6 z-50">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
            <Link
              href="/contact"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 text-primary-600 hover:text-primary-700 transition-all hover:scale-110"
              aria-label="Contact Us"
            >
              <HiOutlinePhone className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 