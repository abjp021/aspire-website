'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { services } from '@/app/services/page';
import React from 'react';

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <span>Our Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-tight text-dark-500 sm:text-4xl font-heading"
          >
            Comprehensive Technology Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-500"
          >
            Discover our range of cutting-edge services designed to empower your business in the digital age.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl bg-white p-8 shadow-soft-lg transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-1"
            >
              <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 shadow-soft-lg group-hover:shadow-glow-primary transition-all duration-300">
                {React.createElement(service.icon)}
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-dark-500 font-heading">{service.title}</h3>
                <p className="mt-3 text-base text-gray-500">{service.description}</p>
                <div className="mt-6">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center rounded-md bg-secondary-500 px-4 py-2 text-sm font-medium text-white hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-glow-secondary"
                  >
                    Know More
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center rounded-md bg-primary-500 px-6 py-3 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-glow-primary"
          >
            View All Services
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 