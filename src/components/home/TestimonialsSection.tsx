'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi2';

const testimonials = [
  {
    id: 1,
    content: "Aspiretechno Global transformed our entire IT infrastructure. Their team's expertise and dedication to excellence made the transition seamless. We've seen a 40% improvement in system performance.",
    author: "Sarah Chen",
    position: "CTO",
    company: "TechVision Inc.",
    image: "/clients/client-2.jpg",
    rating: 5,
    tags: ["Cloud Migration", "Infrastructure"]
  },
  {
    id: 2,
    content: "The cybersecurity solutions implemented by Aspiretechno have given us peace of mind. Their proactive approach to security and 24/7 monitoring has prevented several potential breaches.",
    author: "Michael Rodriguez",
    position: "Head of Security",
    company: "SecureBank",
    image: "/clients/client-1.jpg",
    rating: 5,
    tags: ["Cybersecurity", "Monitoring"]
  },
  {
    id: 3,
    content: "Working with Aspiretechno has been a game-changer for our business. Their cloud solutions have improved our efficiency by 50% and significantly reduced our operational costs.",
    author: "Emily Watson",
    position: "Operations Director",
    company: "GlobalTech Solutions",
    image: "/clients/client-3.jpg",
    rating: 5,
    tags: ["Cloud Solutions", "Optimization"]
  }
];

// Custom hook to detect mobile view
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered, paginate]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const progressVariants = {
    empty: {
      width: "0%"
    },
    full: {
      width: "100%"
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Elements (SVGs) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-tech-pattern"
      />

      {/* Split background with more contrast */}
      <div className="absolute inset-0 h-1/2 bg-primary-600" style={{ zIndex: 0 }} />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" style={{ zIndex: 0 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">What do our clients say?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
              <p className="text-gray-600 mb-8 flex-1">{t.content}</p>
              <div className="flex flex-col items-center mt-auto">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 mb-4 border border-gray-200">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.author}
                      width={80}
                      height={80}
                      className="object-cover rounded-full w-20 h-20"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <HiUser className="w-10 h-10 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="font-bold text-gray-900 text-lg">{t.author}</div>
                <div className="text-gray-500 text-base">{t.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative SVGs for background, not overlapping cards */}
      <svg className="absolute top-10 left-10 w-24 h-24 opacity-10 text-white pointer-events-none z-0" fill="none" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" />
      </svg>
      <svg className="absolute bottom-10 right-10 w-32 h-32 opacity-10 text-primary-900 pointer-events-none z-0" fill="none" viewBox="0 0 120 120">
        <rect x="10" y="10" width="100" height="100" rx="20" stroke="currentColor" strokeWidth="10" />
      </svg>
    </section>
  );
} 