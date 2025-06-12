'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// This would typically come from a CMS or database
// const caseStudies = [
//   {
//     slug: 'digital-transformation',
//     title: "Digital Transformation Journey",
//     client: "Aaradhya Associates",
//     industry: "Software Development",
//     duration: "6 Months",
//     thumbnail: "/images/case-studies/aaradhya-hero.jpg",
//     excerpt: "A comprehensive digital transformation that modernized IT infrastructure, reduced costs by 30%, and improved system performance by 200%.",
//     metrics: [
//       { label: "Cost Reduction", value: "30%" },
//       { label: "Performance", value: "200%" }
//     ]
//   },
//   {
//     slug: 'cloud-migration-fintrust',
//     title: "Cloud Migration for Financial Services",
//     client: "FinTrust Bank",
//     industry: "Financial Services",
//     duration: "4 Months",
//     thumbnail: "/images/case-studies/fintrust-hero.jpg",
//     excerpt: "A seamless migration of core banking systems to the cloud, improving uptime, security, and reducing operational costs by 25%.",
//     metrics: [
//       { label: "Cost Savings", value: "25%" },
//       { label: "Uptime", value: "99.99%" }
//     ]
//   },
//   {
//     slug: 'ai-customer-support-retailx',
//     title: "AI-Powered Customer Support Automation",
//     client: "RetailX",
//     industry: "Retail & E-commerce",
//     duration: "3 Months",
//     thumbnail: "/images/case-studies/retailx-hero.jpg",
//     excerpt: "Deployed an AI-driven chatbot and support automation platform, reducing response times by 80% and increasing customer satisfaction.",
//     metrics: [
//       { label: "Time Reduction", value: "80%" },
//       { label: "Customer Satisfaction", value: "95%" }
//     ]
//   }
//   // Add more case studies here as they become available
// ];

const caseStudies: any[] = []
export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-network-mesh opacity-10"></div>
      <div className="absolute inset-0 bg-glow-primary"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary-500 to-transparent opacity-30 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent-500 to-transparent opacity-30 rounded-tr-full"></div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
        <div className="absolute inset-0 bg-network-mesh opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary-500 to-transparent opacity-30 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent-500 to-transparent opacity-30 rounded-tr-full"></div>
        <div className="absolute inset-0 bg-glow-primary"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center py-24 sm:py-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Transforming Businesses Through Innovation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover how we've helped organizations transform their IT infrastructure and achieve remarkable results.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <Link href={`/case-studies/${study.slug}`} className="block h-full">
                {/* Image with fixed aspect ratio and fallback */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100">
                  {study.thumbnail ? (
                    <Image
                      src={study.thumbnail}
                      alt={study.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-3xl">No Image</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-900 font-medium shadow">
                        {study.industry}
                      </span>
                      <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-900 font-medium shadow">
                        {study.duration}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Card Body */}
                <div className="flex flex-col flex-1 p-6 min-h-[220px]">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary-500 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
                    {study.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-6 mt-auto">
                    {study.metrics.map((metric: any, idx: number) => (
                      <div key={idx} className="text-center min-w-[80px]">
                        <div className="text-lg font-bold text-primary-600">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {caseStudies.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              No case studies available yet
            </h3>
            <p className="text-gray-500">
              Check back soon for our success stories and client transformations.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section (About style, full width) */}
      <div className="relative w-full py-12 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 mt-24 overflow-hidden">
        <div className="absolute inset-0 bg-network-mesh opacity-10"></div>
        <div className="absolute inset-0 bg-glow-primary"></div>
        <div className="w-full relative">
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
    </div>
  );
} 