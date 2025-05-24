'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const navigation = {
  solutions: [
    { name: 'Networking', href: '/services/networking' },
    { name: 'Data Centre', href: '/services/data-centre' },
    { name: 'Data Storage', href: '/services/data-storage' },
    { name: 'Virtualization', href: '/services/virtualization' },
    { name: 'Cyber-Security', href: '/services/cyber-security' },
    { name: 'Backup', href: '/services/backup-solution' },
    { name: 'CCTV', href: '/services/video-conferencing' },
    { name: 'Cabling', href: '/services/wireless-networking' },
    { name: 'AMCs', href: '/services/maintenance' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-white text-primary-900 pt-0" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-4 relative z-50">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 items-center">
          {/* Brand Section */}
          <div className="flex flex-col h-full justify-center space-y-4 col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Aspire Techno Global"
                width={150}
                height={40}
                className="h-12 w-auto drop-shadow-lg"
              />
              {/* <span className="ml-3 text-xl font-bold text-primary-900 tracking-wide">Aspire Techno Global</span> */}
            </Link>
            <p className="text-sm leading-5 text-primary-800">
              Empowering businesses with cutting-edge IT solutions and unmatched security infrastructure.
            </p>
            <div className="flex space-x-3">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-primary-700 hover:text-primary-900 transition-colors duration-200 bg-primary-100 rounded-full p-2 shadow-md hover:shadow-primary-200/40"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="flex flex-col h-full justify-center col-span-1">
            <h3 className="text-base font-semibold leading-5 text-primary-900 mb-1">Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mt-2">
              {navigation.solutions.map((item) => (
                <motion.div key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="block text-xs leading-5 text-primary-700 hover:text-primary-900 transition-colors duration-200 underline-offset-4 hover:underline py-0.5"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company Section */}
          {/* <div className="flex flex-col h-full justify-center col-span-1">
            <h3 className="text-base font-semibold leading-5 text-primary-900 mb-1">Company</h3>
            <ul role="list" className="mt-2 space-y-2">
              {navigation.company.map((item) => (
                <motion.li key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm leading-5 text-primary-700 hover:text-primary-900 transition-colors duration-200 underline-offset-4 hover:underline"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div> */}

          {/* Company Details Section on the right */}
          <div className="flex flex-col h-full justify-center text-sm text-primary-800 col-span-1 xl:text-right">
            <h3 className="text-base font-semibold leading-5 text-primary-900 mb-1">Support</h3>
            <div className="space-y-1 mt-2">
              <div>
                <span className="font-semibold">Address:</span> SF 25-26 Aristo Aura, TP-2 Bhayli <br/>
                Vadodara, Gujarat India 391410
              </div>
              <div>
                <span className="font-semibold">Email:</span>
                <a href="mailto:sales@aspiretechno.co.in" className="underline hover:text-primary-600"> sales@aspiretechno.co.in</a>
              </div>
              <div>
                <span className="font-semibold">Phone:</span>
                <a href="tel:+91 26535 16805" className="underline hover:text-primary-600"> +91 26535 16805</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive Blue Waves SVG Footer Background */}
      <div className="w-full overflow-hidden leading-none pointer-events-none" style={{height: '10rem'}}>
        <svg
          viewBox="0 0 1600 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ display: 'block', width: '100vw', height: '100%' }}
        >
          <defs>
            <linearGradient id="footerWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#15315B" stopOpacity="1"/>
              <stop offset="100%" stopColor="#15315B" stopOpacity="1"/>
            </linearGradient>
          </defs>
          <path d="M0 120 Q400 160 800 120 T1600 120 V160 H0 Z" fill="url(#footerWave)"/>
          <path d="M0 100 Q400 140 800 100 T1600 100 V160 H0 Z" fill="url(#footerWave)" fillOpacity="0.9"/>
          <path d="M0 80 Q400 120 800 80 T1600 80 V160 H0 Z" fill="url(#footerWave)" fillOpacity="0.8"/>
          <path d="M0 60 Q400 100 800 60 T1600 60 V160 H0 Z" fill="url(#footerWave)" fillOpacity="0.7"/>
          <path d="M0 40 Q400 80 800 40 T1600 40 V160 H0 Z" fill="url(#footerWave)" fillOpacity="0.6"/>
        </svg>
      </div>
      {/* Copyright Bar (overlay, does not increase footer height) */}
      <div className="w-full bg-[#15315B] text-white text-center text-sm py-3 absolute left-0 bottom-0 z-50 pointer-events-none">
      ©2025 Rudraksha Solutions. All Rights Reserved
      </div>
    </footer>
  );
} 