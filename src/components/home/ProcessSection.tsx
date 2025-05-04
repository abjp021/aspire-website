'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiOutlineChatAlt, 
  HiOutlineClipboardCheck, 
  HiOutlineCog,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We start by understanding your business needs and challenges through detailed discussions.',
    icon: <HiOutlineChatAlt className="w-4 h-4" />,
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'We design a tailored solution and roadmap for your success, considering all requirements.',
    icon: <HiOutlineClipboardCheck className="w-4 h-4" />,
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our expert team delivers and implements the solution with precision and care.',
    icon: <HiOutlineCog className="w-4 h-4" />,
  },
  {
    number: '04',
    title: 'Support & Optimization',
    description: 'We provide ongoing support and continuously optimize your technology solution.',
    icon: <HiOutlineCheckCircle className="w-4 h-4" />,
  },
];

export default function ProcessSection() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '-30% 0px',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <div ref={ref} className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-tr-full"></div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Our Proven Process for
                <span className="block text-blue-600">Delivering Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We follow a systematic approach to understand, plan, and implement solutions that drive your business forward. Our process ensures transparency, efficiency, and successful outcomes for every project.
              </p>
            </div>
            

            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-2xl">25+</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5">Years Experience</h3>
                  <p className="text-base text-gray-600 leading-relaxed">Industry expertise and knowledge</p>
                </div>
              </div>
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-2xl">400+</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5">Happy Clients</h3>
                  <p className="text-base text-gray-600 leading-relaxed">Trust us for their success</p>
                </div>
              </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-2xl">98%</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5">Client Satisfaction</h3>
                  <p className="text-base text-gray-600 leading-relaxed">Based on successful project deliveries</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-2xl">250+</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5">Projects Completed</h3>
                  <p className="text-base text-gray-600 leading-relaxed">Across various industries</p>
                </div>
              </div>


              
            </div>
          </motion.div>

          {/* Right Timeline */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative"
          >
            {/* Vertical Line */}
            <motion.div 
              initial={{ height: "0%" }}
              animate={inView ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-blue-500/20 transform"
            ></motion.div>

            {/* Steps */}
            <div className="space-y-8 pl-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative pl-8"
                >
                  {/* Circle on the line */}
                  <div className="absolute left-0 top-0 transform -translate-x-[15px]">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-white shadow-sm border border-blue-200 flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.2 }
                      }}
                      style={{ originX: 0.5, originY: 0.5 }}
                    >
                      <span className="text-lg font-bold text-blue-600">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 