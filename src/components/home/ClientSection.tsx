'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoInformationCircle } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

interface ClientInfo {
  id: number;
  logo: string;
  name: string;
  summary: string;
  workDone: string;
}

const clientData: ClientInfo[] = [
  {
    id: 1,
    logo: '/images/L1.jpeg',
    name: 'TechCorp Solutions',
    summary: 'Leading software development company',
    workDone: 'Implemented comprehensive IT infrastructure upgrade, including cloud migration and security enhancement. Reduced operational costs by 30% and improved system efficiency.',
  },
  {
    id: 2,
    logo: '/images/L2.jpeg',
    name: 'InnovateX',
    summary: 'Innovation-driven technology firm',
    workDone: 'Deployed advanced cybersecurity solutions and established 24/7 monitoring system. Enhanced data protection and prevented potential security breaches.',
  },
  {
    id: 3,
    logo: '/images/L3.jpeg',
    name: 'InnovateX',
    summary: 'Innovation-driven technology firm',
    workDone: 'Deployed advanced cybersecurity solutions and established 24/7 monitoring system. Enhanced data protection and prevented potential security breaches.',
  },
  {
    id: 4,
    logo: '/images/L4.jpeg',
    name: 'InnovateX',
    summary: 'Innovation-driven technology firm',
    workDone: 'Deployed advanced cybersecurity solutions and established 24/7 monitoring system. Enhanced data protection and prevented potential security breaches.',
  },
  {
    id: 5,
    logo: '/images/L5.jpeg',
    name: 'InnovateX',
    summary: 'Innovation-driven technology firm',
    workDone: 'Deployed advanced cybersecurity solutions and established 24/7 monitoring system. Enhanced data protection and prevented potential security breaches.',
  },
  {
    id: 6,
    logo: '/images/L6.jpeg',
    name: 'InnovateX',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
];

export default function ClientSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ClientInfo | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const clientLogos = [
    '/images/L1.jpeg',
    '/images/L2.jpeg',
    '/images/L3.jpeg',
    '/images/L4.jpeg',
    '/images/L5.jpeg',
    '/images/L6.jpeg',
    '/images/L7.jpeg',
    '/images/L8.jpeg',
    '/images/L9.jpeg',
    '/images/L10.jpeg',
    '/images/L11.jpeg',
    '/images/L12.jpeg',
    '/images/L13.jpeg',
    '/images/L14.jpeg',
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const Modal = ({ client, onClose }: { client: ClientInfo; onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl relative"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <IoClose size={24} />
        </button>
        
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
            <p className="text-gray-600">{client.summary}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Work Together</h4>
          <p className="text-gray-700 leading-relaxed">{client.workDone}</p>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-500 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with innovative companies across various sectors, delivering excellence in every project.
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="infinite-scroll-container">
            <div 
              className={`scroll-content flex space-x-8 ${isHovered ? 'paused' : ''}`}
            >
              {/* First set */}
              {clientData.map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="flex-shrink-0 w-64 h-40 flex items-center justify-center bg-white rounded-2xl shadow-soft-lg p-6 border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-glow-primary relative">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={idx < 4}
                        loading={idx < 4 ? 'eager' : 'lazy'}
                      />
                      <button
                        onClick={() => setSelectedClient(client)}
                        className="absolute top-0 right-0 p-1 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                      >
                        <IoInformationCircle className="w-5 h-5 text-primary-500" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Second set */}
              {clientData.map((client, idx) => (
                <motion.div
                  key={`second-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="flex-shrink-0 w-64 h-40 flex items-center justify-center bg-white rounded-2xl shadow-soft-lg p-6 border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-glow-primary relative">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <button
                        onClick={() => setSelectedClient(client)}
                        className="absolute top-0 right-0 p-1 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                      >
                        <IoInformationCircle className="w-5 h-5 text-primary-500" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Third set for seamless loop */}
              {clientData.map((client, idx) => (
                <motion.div
                  key={`third-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="flex-shrink-0 w-64 h-40 flex items-center justify-center bg-white rounded-2xl shadow-soft-lg p-6 border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-glow-primary relative">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <button
                        onClick={() => setSelectedClient(client)}
                        className="absolute top-0 right-0 p-1 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                      >
                        <IoInformationCircle className="w-5 h-5 text-primary-500" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {!isLoaded && (
          <div className="flex justify-center items-center h-32">
            <div className="animate-pulse w-48 h-32 bg-white/20 rounded-2xl"></div>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedClient && (
            <Modal client={selectedClient} onClose={() => setSelectedClient(null)} />
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .infinite-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .scroll-content {
          display: flex;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .scroll-content.paused {
          animation-play-state: paused;
          transition: transform 0.3s ease-out;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .scroll-content:hover {
          transition: transform 0.3s ease-out;
        }

        .scroll-content:not(.paused) {
          transition: transform 0.3s ease-in;
        }
      `}</style>
    </div>
  );
} 