'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    // First set a white background
    document.body.style.backgroundColor = 'white';
    // Then navigate
    router.push(path);
  };

  return (
    <header
      className="relative z-40 overflow-hidden bg-primary-500"
      role="banner"
      aria-label="Aspiretechno Global IT Solutions Hero"
    >
      <div className="absolute inset-0 bg-network-mesh opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary-500 to-transparent opacity-30 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent-500 to-transparent opacity-30 rounded-tr-full"></div>
      <div className="absolute inset-0 bg-glow-primary"></div>

      {/* Floating ISO Certifications */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
        >
          <div className="flex items-center space-x-3">
            <div className="text-2xl">
              {/* Star SVG - modern, bold, colorful, reduced size */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#facc15" stroke="#f59e42" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-medium">ISO 9001:2015</div>
              <div className="text-white/80 text-sm">Quality Management</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
        >
          <div className="flex items-center space-x-3">
            <div className="text-2xl">
              {/* Lock SVG - improved, modern, sharp */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="10" width="14" height="9" rx="2" fill="#2563eb" stroke="#1e40af" strokeWidth="2"/>
                <path d="M8 10V8a4 4 0 1 1 8 0v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="12" cy="15" r="1.5" fill="#fff"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-medium">ISO 27001:2013</div>
              <div className="text-white/80 text-sm">Information Security</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
        >
          <div className="flex items-center space-x-3">
            <div className="text-2xl">
              {/* Lightning SVG - improved, modern, sharp */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <polygon points="13 2 5 14 12 14 11 22 19 10 13 10 13 2" fill="#facc15" stroke="#b45309" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-medium">ISO 20000-1:2018</div>
              <div className="text-white/80 text-sm">IT Service Management</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full lg:w-2/3 xl:w-1/2 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8">
          <main className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-4 lg:pt-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-heading"
              >
                <span className="block">Empowering Your Digital Future</span>
                <span className="block text-secondary-500">
                  Secure, Scalable, and Smart IT Solutions
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 text-base text-white/80 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
              >
                ISO Certified Excellence in Networking, Surveillance & Cybersecurity Solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow-soft-lg">
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className="flex w-full items-center justify-center rounded-md bg-secondary-500 px-8 py-3 text-base font-medium text-white hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 md:py-4 md:px-10 md:text-lg transition-all duration-300 hover:shadow-glow-secondary"
                  >
                    Get Your Free IT Assessment
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => handleNavigation('/services')}
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-medium text-white hover:bg-white/20 md:py-4 md:px-10 md:text-lg transition-all duration-300"
                  >
                    See How We Can Help
                  </button>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </header>
  );
} 