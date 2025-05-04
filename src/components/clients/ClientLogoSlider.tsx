'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ClientLogo {
  src: string;
  alt: string;
}

const clients: ClientLogo[] = [
  { src: '/clients/techcorp.svg', alt: 'TechCorp' },
  { src: '/clients/techcorp.svg', alt: 'TechCorp' },
  { src: '/clients/techcorp.svg', alt: 'TechCorp' },
  { src: '/clients/techcorp.svg', alt: 'TechCorp' },
  { src: '/clients/techcorp.svg', alt: 'TechCorp' },
  { src: '/clients/techcorp.svg', alt: 'TechCorp' },
];

export default function ClientLogoSlider() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state immediately
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full overflow-hidden bg-gradient-to-r from-primary-50 to-accent-50 py-12">
        <div className="flex justify-center items-center h-32">
          <div className="animate-pulse w-32 h-32 bg-white/20 rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="relative flex">
        <div className="animate-slide flex space-x-16 items-center">
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-40 h-40 relative hover:scale-105 transition-all duration-300 bg-white rounded-xl shadow-soft-xl p-6"
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-contain p-2"
                priority={index < 3}
                loading={index < 3 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-40 h-40 relative hover:scale-105 transition-all duration-300 bg-white rounded-xl shadow-soft-xl p-6"
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-contain p-2"
                priority={index < 3}
                loading={index < 3 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 