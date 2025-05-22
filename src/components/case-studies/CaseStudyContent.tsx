'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CaseStudyContentProps {
  title: string;
  client: string;
  industry: string;
  duration: string;
  heroImage: string;
  problemImage: string;
  solutionImage: string;
  impactImage: string;
  problem: {
    title: string;
    description: string;
    challenges: string[];
  };
  solution: {
    title: string;
    description: string;
    steps: string[];
  };
  impact: {
    title: string;
    description: string;
    metrics: {
      label: string;
      value: string;
      unit?: string;
    }[];
  };
}

export default function CaseStudyContent({
  title,
  client,
  industry,
  duration,
  heroImage,
  problemImage,
  solutionImage,
  impactImage,
  problem,
  solution,
  impact,
}: CaseStudyContentProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Problem Section */}
        <section className="relative">
          <motion.div 
            {...fadeInUp}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <div className="space-y-6 flex flex-col h-full justify-center">
              <h2 className="text-3xl font-bold text-gray-900">{problem.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {problem.description}
              </p>
              <ul className="space-y-3">
                {problem.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-secondary-500 mt-1">•</span>
                    <span className="text-gray-600">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden bg-gray-50 flex items-stretch">
              <Image
                src={problemImage}
                alt="Problem illustration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Solution Section */}
        <section className="relative">
          <motion.div 
            {...fadeInUp}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden bg-gray-50 order-2 md:order-1 flex items-stretch">
              <Image
                src={solutionImage}
                alt="Solution illustration"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2 flex flex-col h-full justify-center">
              <h2 className="text-3xl font-bold text-gray-900">{solution.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {solution.description}
              </p>
              <div className="space-y-4">
                {solution.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-500 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-600">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Impact Section */}
        <section className="relative">
          <motion.div 
            {...fadeInUp}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <div className="space-y-6 flex flex-col h-full justify-center">
              <h2 className="text-3xl font-bold text-gray-900">{impact.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {impact.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {impact.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-xl text-center"
                  >
                    <div className="text-3xl font-bold text-secondary-500 mb-2">
                      {metric.value}
                      {metric.unit && <span className="text-lg ml-1">{metric.unit}</span>}
                    </div>
                    <div className="text-gray-500">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden bg-gray-50 flex items-stretch">
              <Image
                src={impactImage}
                alt="Impact illustration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>
      </div>
      {/* CTA Section (full width, outside card) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-24"
      >
        <div className="relative w-full py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 overflow-hidden">
          <div className="absolute inset-0 bg-network-mesh opacity-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-glow-primary pointer-events-none"></div>
          <div className="w-full px-4 sm:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how our services can help you achieve your goals. Our team of experts is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Contact Us Now
              </a>
              <a
                href="/contact?type=consultation"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-center backdrop-blur-sm border border-white/20"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 