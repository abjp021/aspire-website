'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi2';

const testimonials = [
  {
    id: 1,
    content: "Aspiretechno has been a reliable partner in managing and upgrading our entire IT infrastructure. Their team understands industry challenges and delivers solutions that are both scalable and secure. Their proactive support ensures that our operations run smoothly without interruption.",
    author: "Rakesh Mehta",
    position: "IT Head",
    company: "Windar India Pvt. Ltd",
    image: "/clients/client-2.jpg",
    rating: 5,
    tags: ["Cloud Migration", "Infrastructure"]
  },
  {
    id: 2,
    content: "We approached Aspiretechno for cybersecurity and network enhancements across our pharma facilities. Their team demonstrated in-depth technical knowledge and provided us with a future-ready solution aligned with compliance standards. The responsiveness and professionalism of their team have been exceptional.",
    author: "Om Bhatnagar",
    position: "Sr. Manager",
    company: "Rusan Pharma Ltd",
    image: "/clients/client-1.jpg",
    rating: 5,
    tags: ["Cybersecurity", "Monitoring"]
  },
  {
    id: 3,
    content: "From structured cabling to network optimization and ongoing AMC, Aspiretechno has delivered quality IT services with consistency. Their commitment to deadlines and hands-on approach has made them a trusted partner for our infrastructure needs. Highly recommended.",
    author: "Dhaval Dalwadi",
    position: "Sr. Manager, Information Technology",
    company: "Navin Fluorine International Ltd.",
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
            <div key={t.id} className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 border-t-4 border-primary-500 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-500 text-white rounded-full p-2 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25a2.25 2.25 0 1 1 0 4.5H6.75A2.25 2.25 0 0 1 4.5 10.5v-1.5A2.25 2.25 0 0 1 6.75 6.75h.75a2.25 2.25 0 0 1 2.25 2.25zm9 0a2.25 2.25 0 1 1 0 4.5h-.75A2.25 2.25 0 0 1 13.5 10.5v-1.5a2.25 2.25 0 0 1 2.25-2.25h.75a2.25 2.25 0 0 1 2.25 2.25z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-8 flex-1">{t.content}</p>
              <div className="flex flex-col items-center mt-auto gap-1">
                <div className="font-bold text-gray-900 text-lg">{t.author}</div>
                <div className="text-gray-500 text-base">{t.position}</div>
                <div className="text-xs text-primary-500 font-semibold mt-1">{t.company}</div>
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