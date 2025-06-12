'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HiOutlineShieldCheck, 
  HiOutlineQrCode, 
  HiOutlineCloud, 
  HiOutlinePhone, 
  HiOutlineStar, 
  HiOutlineCheckCircle, 
  HiOutlineSquares2X2,
  HiOutlineServerStack,
  HiOutlineVideoCameraSlash,
  HiOutlineSignal,
  HiOutlineWrench
} from 'react-icons/hi2';
import { useInView } from 'react-intersection-observer';
import { services, stats, testimonials, Service } from './servicesData';
import { serviceIcons, statIcons } from './iconMappings';

interface AnimatedNumberProps {
  value: string | number;
  suffix?: string;
}

const AnimatedNumber = ({ value, suffix = '' }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;
      const numericValue = typeof value === 'string' ? parseFloat(value) : value;

      const timer = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / steps;
        const easedProgress = easeOutQuad(progress);
        setDisplayValue(Math.floor(easedProgress * numericValue));

        if (currentStep >= steps) {
          clearInterval(timer);
          setDisplayValue(numericValue);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  const easeOutQuad = (t: number) => t * (2 - t);

  return (
    <span ref={ref} className="text-4xl font-bold text-gray-900">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-8 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Network Mesh Background */}
          <div className="absolute inset-0 bg-network-mesh opacity-10"></div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary-500 to-transparent opacity-30 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent-500 to-transparent opacity-30 rounded-tr-full"></div>

          {/* Glow Effects */}
          <div className="absolute inset-0 bg-glow-primary"></div>
          <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-glow-secondary"></div>

          {/* Dotted pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: '0.1'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-8 py-2 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white bg-clip-text max-w-4xl mx-auto">
              Empowering Your Digital Future with{' '}
              <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
                Cutting-Edge Solutions
              </span>
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-3 max-w-7xl mx-auto relative">
            {services.map((service: Service) => {
              const IconComponent = serviceIcons[service.iconKey];
              return (
                <div
                  key={service.id}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <Link
                    href={`/services/${service.id}`}
                    className="block relative flex-1 flex flex-col"
                  >
                    <div className="flex items-center mb-2">
                      <IconComponent className={`w-5 h-5 text-white mr-2 flex-shrink-0`} />
                      <h3 className="text-base font-medium text-white line-clamp-1">{service.title}</h3>
                    </div>
                    <p className="text-white/80 text-sm mb-2 line-clamp-2 flex-1">{service.description}</p>
                    <div className="flex items-center text-sm text-white/90 hover:text-white mt-auto">
                      Learn more
                      <span className="ml-1">→</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const StatIcon = statIcons[stat.iconKey as keyof typeof statIcons];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl`} />
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-xl ${stat.color} mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <StatIcon className="w-10 h-10" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-base text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Us Now Section */}
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

      {/* Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
        <Link
          href="/contact"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 text-primary-600 hover:text-primary-700 transition-all hover:scale-110"
        >
          <HiOutlinePhone className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
} 