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
    image: "/clients/sarah.png",
    rating: 5,
    tags: ["Cloud Migration", "Infrastructure"]
  },
  {
    id: 2,
    content: "The cybersecurity solutions implemented by Aspiretechno have given us peace of mind. Their proactive approach to security and 24/7 monitoring has prevented several potential breaches.",
    author: "Michael Rodriguez",
    position: "Head of Security",
    company: "SecureBank",
    image: "/clients/sarah.png",
    rating: 5,
    tags: ["Cybersecurity", "Monitoring"]
  },
  {
    id: 3,
    content: "Working with Aspiretechno has been a game-changer for our business. Their cloud solutions have improved our efficiency by 50% and significantly reduced our operational costs.",
    author: "Emily Watson",
    position: "Operations Director",
    company: "GlobalTech Solutions",
    image: "/clients/sarah.png",
    rating: 5,
    tags: ["Cloud Solutions", "Optimization"]
  }
];

const BackgroundShapes = () => {
  return (
    <>
      {/* Circuit-like lines */}
      <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 0.2, pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-48 h-48"
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M20 100h160M100 20v160M60 60l80 80M140 60l-80 80"
            stroke="currentColor"
            className="text-gray-300"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Hexagonal grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-0 w-64 h-64"
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagonPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M10 0l8.66 5v10L10 20l-8.66-5V5L10 0z"
              stroke="currentColor"
              className="text-blue-300"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagonPattern)" />
        </svg>
      </motion.div>

      {/* Floating tech elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="30" height="30" rx="2" stroke="currentColor" className="text-blue-200" strokeWidth="2" fill="none" />
          <path d="M15 20h10M20 15v10" stroke="currentColor" className="text-blue-200" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Animated dots grid */}
      <div className="absolute bottom-20 left-20 grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="w-2 h-2 bg-gray-400 rounded-full"
          />
        ))}
      </div>

      {/* Tech connection lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-72 h-72"
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M20 180l160-160M40 180l140-140M60 180l120-120"
            stroke="currentColor"
            className="text-gray-400"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Rotating squares */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-20"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="50" height="50" stroke="currentColor" className="text-gray-200" strokeWidth="1" fill="none" transform="rotate(45 30 30)" />
          <rect x="15" y="15" width="30" height="30" stroke="currentColor" className="text-gray-300" strokeWidth="1" fill="none" transform="rotate(-45 30 30)" />
        </svg>
      </motion.div>
    </>
  );
};

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
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-tech-pattern"
      />
      <BackgroundShapes />

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve their technology goals and drive success through innovative solutions.
          </p>
        </motion.div>

        <div 
          className="relative h-[450px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-soft-lg p-8 md:p-12 border border-gray-100 hover:shadow-soft-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative w-40 h-40 mx-auto"
                    >
                      {testimonials[currentIndex].image ? (
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].author}
                          fill
                          className="object-cover rounded-full ring-4 ring-white shadow-soft-lg hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full ring-4 ring-white shadow-soft-lg bg-gray-100 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                          <HiUser className="w-20 h-20 text-gray-400" />
                        </div>
                      )}
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-soft-md hover:shadow-soft-lg transition-all duration-300 whitespace-nowrap max-w-[140px] overflow-hidden text-ellipsis"
                      >
                        {testimonials[currentIndex].tags[0]}
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex gap-1 justify-center md:justify-start mb-6"
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.svg
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="w-6 h-6 text-yellow-400 fill-current transform hover:scale-110 transition-transform duration-200"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="relative"
                    >
                      <div className="absolute -left-4 top-0 text-6xl text-gray-100 font-serif">"</div>
                      <p className="text-xl text-gray-700 italic mb-8 leading-relaxed relative z-10">
                        {testimonials[currentIndex].content}
                      </p>
                      <div className="absolute -right-4 bottom-0 text-6xl text-gray-100 font-serif">"</div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="space-y-2"
                    >
                      <div className="font-bold text-gray-900 text-xl">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {testimonials[currentIndex].position} • {testimonials[currentIndex].company}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              key={currentIndex}
              initial="empty"
              animate={isHovered ? "empty" : "full"}
              variants={progressVariants}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-blue-500"
            />
          </div>

          {/* Navigation buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between z-10 px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:text-blue-500 transition-all duration-300 shadow-soft-md hover:shadow-soft-lg"
            >
              <HiOutlineChevronLeft className="w-7 h-7" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:text-blue-500 transition-all duration-300 shadow-soft-md hover:shadow-soft-lg"
            >
              <HiOutlineChevronRight className="w-7 h-7" />
            </motion.button>
          </div>
        </div>

        {/* Pagination dots */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-3 mt-12"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`relative h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-10' 
                  : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
            >
              {index === currentIndex && !isHovered && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 bg-blue-400 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
} 