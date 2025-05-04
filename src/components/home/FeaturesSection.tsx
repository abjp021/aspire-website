'use client';

import { Feature } from '@/types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features: Feature[] = [
  {
    name: 'Networking Solutions',
    description: 'Comprehensive networking solutions tailored to your business needs.',
    longDescription: 'Enterprise-grade networking infrastructure, including LAN/WAN setup, network security, and 24/7 monitoring for optimal performance.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    name: 'CCTV Surveillance',
    description: 'Advanced surveillance systems for comprehensive security monitoring.',
    longDescription: 'State-of-the-art CCTV solutions with AI-powered analytics, remote monitoring capabilities, and cloud storage for enhanced security.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Cybersecurity',
    description: 'Advanced security solutions to protect your digital assets.',
    longDescription: 'Comprehensive cybersecurity services including threat detection, prevention, and response, backed by 24/7 security operations center.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    name: 'IT Infrastructure',
    description: 'Comprehensive IT infrastructure management for modern businesses.',
    longDescription: 'End-to-end IT infrastructure solutions including cloud services, data center management, and disaster recovery planning.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-24 bg-white relative">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Right Circle */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[32px] border-orange-200/30"></div>
        
        {/* Bottom Left Square */}
        <div className="absolute -bottom-8 -left-8 w-48 h-48 border-[24px] border-blue-200/30 rotate-12"></div>
        
        {/* Middle Right Triangle */}
        <div className="absolute right-1/4 top-1/3 w-24 h-24 border-[16px] border-orange-200/30 transform rotate-45"></div>
        
        {/* Top Left Dots */}
        <div className="absolute top-32 left-32 grid grid-cols-3 gap-8">
          <div className="w-4 h-4 rounded-full bg-blue-200/30"></div>
          <div className="w-4 h-4 rounded-full bg-orange-200/30"></div>
          <div className="w-4 h-4 rounded-full bg-blue-200/30"></div>
        </div>
        
        {/* Bottom Right Dots */}
        <div className="absolute bottom-32 right-48 grid grid-cols-2 gap-6">
          <div className="w-3 h-3 rounded-full bg-orange-200/30"></div>
          <div className="w-3 h-3 rounded-full bg-blue-200/30"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Key Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology solutions that drive growth and innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-soft-lg hover:shadow-glow-primary transition-all duration-300 h-full">
                  <div className="relative">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-500 text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <p className="text-sm text-gray-500">
                      {feature.longDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 