'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { 
  HiOutlineShieldCheck, 
  HiOutlineLightBulb, 
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineCheckCircle,
  HiOutlineLockClosed,
  HiOutlineServer,
  HiOutlinePhone
} from 'react-icons/hi2';
import { useState } from 'react';
import CertificateModal from '@/components/certificates/CertificateModal';

const values = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technology solutions',
    icon: HiOutlineLightBulb,
    color: 'text-yellow-500',
    gradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    title: 'Excellence',
    description: 'Delivering superior quality in every project',
    icon: HiOutlineChartBar,
    color: 'text-blue-500',
    gradient: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    title: 'Integrity',
    description: 'Building trust through honest and ethical practices',
    icon: HiOutlineShieldCheck,
    color: 'text-green-500',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve extraordinary results',
    icon: HiOutlineUserGroup,
    color: 'text-purple-500',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Global Vision',
    description: 'Thinking globally while acting locally',
    icon: HiOutlineGlobeAlt,
    color: 'text-cyan-500',
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    title: 'Customer First',
    description: 'Putting our clients at the heart of everything we do',
    icon: HiOutlineHeart,
    color: 'text-red-500',
    gradient: 'from-red-500/20 to-pink-500/20'
  }
];

const timeline = [
  {
    year: '2020',
    title: 'Our Beginning',
    description: 'Founded with a vision to transform IT infrastructure solutions'
  },
  {
    year: '2021',
    title: 'Expansion',
    description: 'Launched our first international operations'
  },
  {
    year: '2022',
    title: 'Innovation Hub',
    description: 'Established our research and development center'
  },
  {
    year: '2023',
    title: 'Global Recognition',
    description: 'Received industry awards for excellence in IT solutions'
  },
  {
    year: '2027',
    title: 'Future Forward',
    description: 'Pioneering next-generation technology solutions'
  }
];

const director = {
  name: 'Pramod Ojha',
  role: 'Director & Founder',
  image: '../pramod-ojha.jpeg',
  bio: 'A visionary entrepreneur and technology pioneer, Mr. Pramod Ojha has been at the forefront of IT innovation for over two decades. His deep understanding of technology and unwavering commitment to excellence has transformed Aspiretechno Global into a beacon of trust and innovation in the IT industry.',
  vision: 'To empower businesses with cutting-edge technology solutions that not only meet today\'s challenges but anticipate tomorrow\'s opportunities. We believe in building lasting partnerships where your success becomes our shared story of achievement.',
  achievements: [
    'Pioneered innovative IT infrastructure solutions for enterprises across India',
    'Established strategic partnerships with global technology leaders',
    'Led the development of award-winning cybersecurity frameworks',
    'Recognized for excellence in enterprise IT solutions and customer service'
  ]
};

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    icon: HiOutlineCheckCircle,
    details: 'Certified for our commitment to quality management and customer satisfaction',
    pdfUrl: '/certificates/iso-9001.pdf' // Dummy PDF path
  },
  {
    name: 'ISO 27001:2022',
    description: 'Information Security Management',
    icon: HiOutlineLockClosed,
    details: 'Recognized for our robust information security management system',
    pdfUrl: '/certificates/iso-27001.pdf' // Dummy PDF path
  },
  {
    name: 'ISO 20000-1:2018',
    description: 'IT Service Management',
    icon: HiOutlineServer,
    details: 'Accredited for our excellence in IT service management and delivery',
    pdfUrl: '/certificates/iso-20000.pdf' // Dummy PDF path
  }
];

export default function About() {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certifications[0] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Reduced padding */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
        <div className="absolute inset-0 bg-network-mesh opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary-500 to-transparent opacity-30 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent-500 to-transparent opacity-30 rounded-tr-full"></div>
        <div className="absolute inset-0 bg-glow-primary"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center py-24 sm:py-32">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Empowering businesses with innovative IT solutions since 2015. 
              We're on a mission to transform the digital landscape.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ISO Certifications Section - Now First */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is validated by internationally recognized ISO certifications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary-600 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {cert.name}
                </h3>
                <p className="text-primary-600 font-medium text-center mb-2">
                  {cert.description}
                </p>
                <p className="text-gray-600 text-center text-sm">
                  {cert.details}
                </p>
                <div className="mt-3 text-center">
                  <span className="text-sm text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                    Click to view certificate →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Creative Company Journey Section - 2 Columns */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Left: Modern Vertical Timeline */}
            <div className="relative flex flex-col items-center h-full">
              {/* Central vertical line */}
              <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-primary-400 to-primary-200 z-0" />
              <div className="relative w-full max-w-xs mx-auto z-10 flex flex-col justify-between h-full">
                {timeline.map((item, idx) => (
                  <div key={item.year} className="flex items-center mb-3 group" style={{ minHeight: '36px' }}>
                    {/* Timeline line and year badge */}
                    <div className="flex flex-col items-center mr-4 relative">
                      <div
                        className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 shadow-xl border-4 border-transparent group-hover:scale-110 transition-transform duration-300 p-2 z-10"
                        style={{
                          boxShadow: '0 4px 24px 0 rgba(0, 80, 200, 0.18), 0 1.5px 6px 0 rgba(0,0,0,0.10)'
                        }}
                      >
                        {/* Glassmorphism overlay */}
                        <span className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-md border-2 border-white/30" />
                        {/* Gradient border effect */}
                        <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 opacity-60 blur-sm" />
                        {/* Year text */}
                        <span className="relative z-10 text-white font-extrabold text-lg drop-shadow-lg tracking-wide">
                          {item.year}
                        </span>
                      </div>
                      {idx < timeline.length - 1 && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-10 bg-gradient-to-b from-primary-400 to-primary-200 z-0" />
                      )}
                    </div>
                    {/* Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white rounded-xl shadow p-2 max-w-xs border border-gray-100 group-hover:shadow-lg transition"
                    >
                      <h4 className="text-sm font-bold text-primary-700 mb-0.5">{item.title}</h4>
                      <p className="text-gray-600 text-xs">{item.description}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Narrative Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-700 mb-6">
                Since our inception in 2015, Aspiretechno Global has been on a relentless pursuit of innovation and excellence. What began as a vision to transform IT infrastructure has blossomed into a journey marked by bold milestones, global expansion, and a passion for empowering businesses. <br /><br />
                Our story is one of resilience, adaptability, and a commitment to staying ahead of the technology curve. From launching our first international operations to establishing a cutting-edge R&D center, every chapter has been driven by our core values and a desire to make a meaningful impact. <br /><br />
                Today, we stand as a trusted partner to organizations worldwide, recognized for our expertise, customer-centric approach, and unwavering integrity. As we look to the future, we remain dedicated to pioneering next-generation solutions and building lasting partnerships that fuel success for years to come.
              </p>
              <p className="text-base text-gray-600">
                Explore the milestones that have shaped our journey and discover how Aspiretechno Global continues to lead the way in digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                To empower organizations with cutting-edge technology solutions that drive growth, 
                enhance security, and enable digital transformation. We believe in creating lasting 
                partnerships that help our clients achieve their full potential.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence and innovation has made us a trusted partner for 
                businesses worldwide, helping them navigate the complex digital landscape with 
                confidence and success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80"
                  alt="Our Mission"
                  width={1200}
                  height={675}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from how we work with clients 
              to how we develop our solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${value.color} mb-3`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Visionary Leader
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the driving force behind Aspiretechno Global's success story
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={director.image}
                  alt={director.name}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full opacity-20 blur-2xl"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {director.name}
                </h3>
                <p className="text-primary-600 font-medium text-lg mb-4">
                  {director.role}
                </p>
                <p className="text-gray-600 text-lg mb-6">
                  {director.bio}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Vision Statement
                </h4>
                <p className="text-gray-600 italic mb-6">
                  "{director.vision}"
                </p>
                <div className="space-y-3">
                  {director.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                      </div>
                      <p className="ml-3 text-gray-600">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        certificate={selectedCertificate}
      />

      {/* CTA Section */}
      <div className="relative py-12 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
        <div className="absolute inset-0 bg-network-mesh opacity-10"></div>
        <div className="absolute inset-0 bg-glow-primary"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-6 max-w-3xl mx-auto">
              Join the growing list of organizations that trust us with their IT infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-primary-600 bg-white hover:bg-white/90 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium rounded-xl text-white bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
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