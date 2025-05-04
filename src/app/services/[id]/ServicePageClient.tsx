"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Service, services } from '../servicesData';
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

  // Related services: same category, not current
  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div ref={ref} className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-primary-500">
        <div className="absolute inset-0 bg-network-mesh opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary-500 to-transparent opacity-30 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent-500 to-transparent opacity-30 rounded-tr-full"></div>
        <div className="absolute inset-0 bg-glow-primary"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-heading"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Introduction and Sub-services Section */}
      <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-16">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-64 w-64 rounded-full bg-primary-500/5 blur-2xl"></div>
          <div className="absolute -right-1/4 bottom-0 h-64 w-64 rounded-full bg-secondary-500/5 blur-2xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-16">
            {/* Left Side - Introduction */}
            <div className="lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative h-full rounded-2xl bg-white/50 backdrop-blur-sm p-8 shadow-soft-lg flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold text-dark-500 font-heading mb-6">
                    About Our {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    At Aspiretechno Global, we understand that every business has unique technology needs. Our {service.title.toLowerCase()} solutions are designed to be flexible, scalable, and tailored to your specific requirements.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    We combine industry best practices with cutting-edge technology to deliver solutions that drive your business forward. Our team of experts ensures seamless integration and ongoing support for all your {service.title.toLowerCase()} needs.
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Expert Consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Fast Implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Enterprise-Grade Solutions</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Sub Services */}
            <div className="lg:w-3/5 mt-12 lg:mt-0">
              <div className="grid grid-cols-1 gap-6 h-full">
                {subServices.map((subService, index) => (
                  <motion.div
                    key={subService.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white rounded-xl p-8 shadow-soft-lg transition-all duration-300 hover:shadow-soft-xl flex-1"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative h-12 w-12">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-80 blur-sm transition-all duration-300 group-hover:opacity-100" />
                          <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-white shadow-sm">
                            <div className="text-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:text-primary-700">
                              {subService.icon}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-dark-500 font-heading group-hover:text-primary-600 transition-colors duration-300">
                          {subService.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          {subService.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-dark-500 mb-8">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => {
            const RelIcon = serviceIcons[rel.iconKey];
            return (
              <Link key={rel.id} href={`/services/${rel.id}`} className="block bg-white rounded-xl p-6 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-50 text-primary-600 shadow-soft-sm group-hover:scale-110 transition-all duration-300">
                    <RelIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-500 ml-3 group-hover:text-primary-600 transition-colors duration-300">{rel.title}</h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{rel.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Ready to Transform Your Business Section (copied from services page) */}
      <div className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
        <div className="absolute inset-0 bg-network-mesh opacity-10"></div>
        <div className="absolute inset-0 bg-glow-primary"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your goals. Our team of experts is ready to assist you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              Contact Us Now
            </Link>
            <Link
              href="/contact?type=consultation"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-center backdrop-blur-sm border border-white/20"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 