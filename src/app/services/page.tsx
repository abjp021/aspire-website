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

export const services = [
  {
    id: 'networking',
    title: 'Networking',
    category: 'networking',
    description: 'In today\'s interconnected world, reliable and secure networking solutions are essential for businesses to operate smoothly. We offer end-to-end networking services, from consultation and design to implementation and ongoing management.',
    icon: HiOutlineQrCode,
    color: 'blue',
    gradient: 'from-blue-500/20 to-purple-500/20',
    features: [
      'Network Design and Architecture - Custom-designed architecture optimizing data flow and scalability',
      'Network Monitoring and Management - 24/7 proactive monitoring and management',
      'Implementation and Integration - Seamless deployment and system integration',
      'Network Security - Advanced security with firewalls, intrusion detection, and VPN'
    ]
  },
  {
    id: 'data-centre',
    title: 'Data Centre and Server Solutions',
    category: 'infrastructure',
    description: 'Scalable, resilient, and high-performing infrastructure solutions with comprehensive security measures and compliance management.',
    icon: HiOutlineCloud,
    color: 'green',
    gradient: 'from-green-500/20 to-teal-500/20',
    features: [
      'Firewall and Intrusion Prevention - Blocking unauthorized access',
      'Endpoint Security - Protection for all connected devices',
      'Security Information and Event Management (SIEM) - Real-time threat analysis',
      'Risk Assessment and Compliance - Meeting industry standards'
    ]
  },
  {
    id: 'data-storage',
    title: 'Data Storage Solutions',
    category: 'infrastructure',
    description: 'Protecting your critical data with efficient and secure storage solutions that ensure accessibility and security.',
    icon: HiOutlineSquares2X2,
    color: 'yellow',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    features: [
      'High-Performance Storage - Rapid data access and processing',
      'Backup and Disaster Recovery - Business continuity assurance',
      'Data Archiving - Secure long-term storage solutions',
      'Secure & Scalable Solutions - Safe and accessible data management'
    ]
  },
  {
    id: 'virtualization',
    title: 'Virtualization',
    category: 'infrastructure',
    description: 'Advanced virtualization solutions to optimize resource utilization and enhance operational efficiency.',
    icon: HiOutlineServerStack,
    color: 'purple',
    gradient: 'from-purple-500/20 to-indigo-500/20',
    features: [
      'Server Virtualization - Consolidate physical servers to reduce costs',
      'Desktop Virtualization - Access desktops from any device',
      'Network Virtualization - Enhanced security and traffic management',
      'Storage Virtualization - Optimized resource pooling'
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber-Security',
    category: 'security',
    description: 'Comprehensive protection for your digital assets and data with advanced security measures.',
    icon: HiOutlineShieldCheck,
    color: 'red',
    gradient: 'from-red-500/20 to-pink-500/20',
    features: [
      'Firewall and Intrusion Prevention - Advanced threat protection',
      'Endpoint Security - Complete device protection',
      'Security Information and Event Management - Swift threat response',
      'Risk Assessment and Compliance - Industry standard compliance'
    ]
  },
  {
    id: 'backup-solution',
    title: 'Backup Solutions',
    category: 'infrastructure',
    description: 'Safeguarding your business continuity with reliable and automated backup solutions.',
    icon: HiOutlineCloud,
    color: 'indigo',
    gradient: 'from-indigo-500/20 to-blue-500/20',
    features: [
      'Automated Backup - Scheduled, intervention-free backups',
      'Cloud Backup Solutions - Secure offsite storage',
      'Data Recovery Services - Rapid recovery capabilities',
      'Backup Monitoring - Continuous process verification'
    ]
  },
  {
    id: 'video-conferencing',
    title: 'Video Conferencing & CCTV',
    category: 'security',
    description: 'Advanced communication and security systems for modern business needs.',
    icon: HiOutlineVideoCameraSlash,
    color: 'teal',
    gradient: 'from-teal-500/20 to-green-500/20',
    features: [
      'High-Definition Video Conferencing - Crystal-clear communication',
      'IP-Based Camera Surveillance - Scalable monitoring solutions',
      'Remote Access - Anywhere, anytime accessibility',
      'Secure Data Storage - Long-term video storage'
    ]
  },
  {
    id: 'wireless-networking',
    title: 'Wireless & Structured Cabling',
    category: 'networking',
    description: 'Streamlined, future-proof connectivity solutions for your business infrastructure.',
    icon: HiOutlineSignal,
    color: 'cyan',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    features: [
      'Wi-Fi Network Design - Optimized coverage solutions',
      'Access Point Deployment - Strategic connectivity placement',
      'Wireless Security - Comprehensive threat protection',
      'Network Performance Optimization - Consistent reliability'
    ]
  },
  {
    id: 'maintenance',
    title: 'Annual Maintenance Contracts',
    category: 'infrastructure',
    description: 'Proactive IT support ensuring uninterrupted operations and peak system performance.',
    icon: HiOutlineWrench,
    color: 'amber',
    gradient: 'from-amber-500/20 to-yellow-500/20',
    features: [
      'Preventive Maintenance - Regular system check-ups',
      'Onsite and Remote Support - Quick issue resolution',
      'System Updates and Patches - Current security measures',
      'Performance Optimization - Regular system evaluation'
    ]
  }
] as const;

export type Service = typeof services[number];

const stats = [
  { 
    label: 'Network Uptime', 
    value: '99.99', 
    suffix: '%',
    icon: HiOutlineCheckCircle,
    color: 'text-emerald-500',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  { 
    label: 'Protected Endpoints', 
    value: '50', 
    suffix: 'K+',
    icon: HiOutlineShieldCheck,
    color: 'text-blue-500',
    gradient: 'from-blue-500/20 to-indigo-500/20'
  },
  { 
    label: 'Data Centers', 
    value: '10', 
    suffix: '+',
    icon: HiOutlineCloud,
    color: 'text-purple-500',
    gradient: 'from-purple-500/20 to-violet-500/20'
  },
  { 
    label: 'Client Satisfaction', 
    value: '99', 
    suffix: '%',
    icon: HiOutlineStar,
    color: 'text-amber-500',
    gradient: 'from-amber-500/20 to-yellow-500/20'
  }
];

const testimonials = [
  {
    quote: "Aspiretechno's comprehensive networking and security solutions have revolutionized our infrastructure. Their 24/7 monitoring and rapid response have eliminated downtime concerns.",
    author: "James Wilson",
    role: "CTO, Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    quote: "The virtualization and data centre solutions provided by Aspiretechno have significantly reduced our operational costs while improving performance.",
    author: "Michael Chen",
    role: "IT Director, Global Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    quote: "Their proactive maintenance and backup solutions ensure our systems are always running optimally. The peace of mind is invaluable.",
    author: "Emily Rodriguez",
    role: "Operations Manager, FinTech Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  }
];

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
            {services.map((service) => (
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
                    <service.icon className={`w-5 h-5 text-white mr-2 flex-shrink-0`} />
                    <h3 className="text-base font-medium text-white line-clamp-1">{service.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm mb-2 line-clamp-2 flex-1">{service.description}</p>
                  <div className="flex items-center text-sm text-white/90 hover:text-white mt-auto">
                    Learn more
                    <span className="ml-1">→</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
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
                    <stat.icon className="w-10 h-10" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white rounded-xl p-6 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/0 group-hover:from-primary-50/50 group-hover:to-transparent transition-all rounded-xl" />
                <div className="relative">
                  <p className="text-gray-600 text-sm mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                    />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-xs text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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