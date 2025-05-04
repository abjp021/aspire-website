"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import CallToActionSection from '@/components/home/CallToActionSection';
import { Service } from '../servicesData';
import { serviceIcons } from '../iconMappings';

interface ServicePageClientProps {
  service: Service;
  subServices: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}

export default function ServicePageClient({ service, subServices }: ServicePageClientProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const IconComponent = serviceIcons[service.iconKey];

  return (
    <div ref={ref} className="relative overflow-hidden bg-gray-100">
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-glow-secondary"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-600"
          >
            <span className="mr-2">🚀</span>
            <span>{service.category}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-tight text-dark-500 sm:text-4xl font-heading"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-500"
          >
            {service.description}
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {subServices.map((subService, index) => (
            <motion.div
              key={subService.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl bg-white p-8 shadow-soft-lg transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-1"
            >
              <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 shadow-soft-lg group-hover:shadow-glow-primary transition-all duration-300">
                {subService.icon}
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-dark-500 font-heading">{subService.title}</h3>
                <p className="mt-3 text-base text-gray-500">{subService.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-secondary-500 px-6 py-3 text-base font-medium text-white hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-glow-secondary"
          >
            Get Started
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 