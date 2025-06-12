'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { HeaderProps, NavigationItem } from '@/types';

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  // { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
];

const navItemVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-primary-500/95 shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo Section */}
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0 group">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-secondary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      className="h-12 w-auto relative"
                      src="/aspire-logo.png"
                      alt="Aspiretechno Global"
                    />
                  </motion.div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-2">
                  {navigation.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={navItemVariants}
                      whileHover="hover"
                    >
                      <Link
                        href={item.href}
                        className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isScrolled
                            ? 'text-white hover:bg-white/10'
                            : 'text-white hover:bg-white/10'
                        } ${
                          pathname === item.href
                            ? isScrolled
                              ? 'bg-secondary-500/30'
                              : 'bg-white/10'
                            : ''
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {pathname === item.href && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className={`absolute inset-0 rounded-xl -z-10 ${
                              isScrolled ? 'bg-secondary-500/30' : 'bg-white/10'
                            }`}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <Disclosure.Button 
                  className={`inline-flex items-center justify-center p-2 rounded-xl transition-colors duration-200 ${
                    isScrolled
                      ? 'text-white hover:bg-white/10'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`px-4 pt-2 pb-3 space-y-1 ${
                isScrolled ? 'bg-primary-500/95' : 'bg-primary-500/95'
              }`}
            >
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`block w-full px-4 py-2 rounded-xl text-base font-medium transition-all duration-200 ${
                    isScrolled
                      ? 'text-white hover:bg-white/10'
                      : 'text-white hover:bg-white/10'
                  } ${
                    pathname === item.href
                      ? isScrolled
                        ? 'bg-secondary-500/30'
                        : 'bg-white/10'
                      : ''
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 