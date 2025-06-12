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
    logo: '/images/logos/aaradhya.png',
    name: 'Aaradhya Associates',
    summary: 'Leading software development company',
    workDone: 'Implemented comprehensive IT infrastructure upgrade, including cloud migration and security enhancement. Reduced operational costs by 30% and improved system efficiency.',
  },
  {
    id: 2,
    logo: '/images/logos/aluplast.png',
    name: 'Alu Plast',
    summary: 'Innovation-driven technology firm',
    workDone: 'Deployed advanced cybersecurity solutions and established 24/7 monitoring system. Enhanced data protection and prevented potential security breaches.',
  },
  {
    id: 3,
    logo: '/images/logos/arm_war_college.png',
    name: 'Army War College',
    summary: 'Innovation-driven technology firm',
    workDone: 'Deployed advanced cybersecurity solutions and established 24/7 monitoring system. Enhanced data protection and prevented potential security breaches.',
  },
  {
    id: 4,
    logo: '/images/logos/Aura_Lifecare.png',
    name: 'Aura Life Care',
    summary: 'Innovation-driven technology firm',
    workDone: 'Deployed advanced cybersecurity solutions and established 24/7 monitoring system. Enhanced data protection and prevented potential security breaches.',
  },
  {
    id: 5,
    logo: '/images/logos/bhilosa.png',
    name: 'Bhilosa',
    summary: 'Innovation-driven technology firm',
    workDone: 'Deployed advanced cybersecurity solutions and established 24/7 monitoring system. Enhanced data protection and prevented potential security breaches.',
  },
  {
    id: 6,
    logo: '/images/logos/birla.png',
    name: 'Birla Industries',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 7,
    logo: '/images/logos/BITS_Pilani.png',
    name: 'BITs Pilani',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 8,
    logo: '/images/logos/checkmate.png',
    name: 'Checkmate',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 9,
    logo: '/images/logos/falcon.png',
    name: 'Falcon',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 10,
    logo: '/images/logos/GACL.png',
    name: 'GACL',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 11,
    logo: '/images/logos/galpha.png',
    name: 'G-Alpha',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 12,
    logo: '/images/logos/GTU.png',
    name: 'Gujarat Technology University',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 13,
    logo: '/images/logos/HE.png',
    name: 'Hindustan Equipments',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 14,
    logo: '/images/logos/falcon.png',
    name: 'Falcon',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 15,
    logo: '/images/logos/IAF.png',
    name: 'Indian Air Force',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 16,
    logo: '/images/logos/kpgu.png',
    name: 'KPGU',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 17,
    logo: '/images/logos/Ld.png',
    name: 'LF College of Engineering',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 18,
    logo: '/images/logos/marsh.png',
    name: 'Marsh',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 19,
    logo: '/images/logos/mayr.png',
    name: 'MAYR',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 20,
    logo: '/images/logos/MCTE_MHOW.png',
    name: 'MCTE MHOW',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 21,
    logo:   '/images/logos/navine flourine.png',
    name: 'Navine Flourine',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 22,
    logo: '/images/logos/ntpc.png',
    name: 'NTPC',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 23,
    logo: '/images/logos/panchmahal.png',
    name: 'Panch Mahala',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 24,
    logo: '/images/logos/rusan.png',
    name: 'RUSAN',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 25,
    logo: '/images/logos/sify.png',
    name: 'SIFY',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 26,
    logo: '/images/logos/talbros.png',
    name: 'TALBROS',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 27,
    logo: '/images/logos/TBEA.png',
    name: 'TBEA',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 28,
    logo: '/images/logos/VB.png',
    name: 'Varun Beverages',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 29,
    logo: '/images/logos/widar.png',
    name: 'WIDAR',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },
  {
    id: 30,
    logo: '/images/logos/wuling.png',
    name: 'WULING',
    summary: 'Innovation-driven technology firm',
    workDone: 'Implemented comprehensive network infrastructure and cloud solutions, improving system reliability and performance.',
  },

];

export default function ClientSection() {
  const [selectedClient, setSelectedClient] = useState<ClientInfo | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Modal component
  const Modal = ({ client, onClose }: { client: ClientInfo; onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <IoClose size={24} />
        </button>
        <div className="flex flex-row items-center gap-6 mb-4">
          <div className="flex items-center w-24 h-24 bg-white">
            <Image
              src={client.logo}
              alt={client.name}
              width={96}
              height={96}
              className="object-contain w-24 h-24"
            />
          </div>
          <div className="flex flex-col justify-center text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{client.name}</h3>
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
    <div className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left: Heading/Subheading */}
        <div className="w-full md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-gray-700 mb-2 text-left">
            Helping <span className="font-bold text-gray-900">industry leaders</span> like these get more from their technology.
          </h2>
          <p className="text-gray-500 text-left text-base max-w-xs">
            We're proud to partner with innovative companies across various sectors.
          </p>
        </div>
        {/* Right: Infinite Scroll Logos */}
        <div className="w-full md:flex-1 overflow-hidden relative">
          <div className="marquee-container">
            <div className={`marquee-track${isHovered ? ' paused' : ''}`}>
              {clientData.concat(clientData).map((client, idx) => (
                <motion.div
                  key={client.id + '-' + idx}
                  whileHover={{ scale: 1.12, boxShadow: '0 4px 32px 0 rgba(80,120,255,0.10)' }}
                  className="flex items-center justify-center mx-10 cursor-pointer transition-transform"
                  // onClick={() => setSelectedClient(client)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={90}
                    className="object-contain h-24 w-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedClient && (
          <Modal client={selectedClient} onClose={() => setSelectedClient(null)} />
        )}
      </AnimatePresence>
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          animation: marquee 60s linear infinite;
          width: max-content;
          transition: animation-play-state 0.3s;
          will-change: transform;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
} 