'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services, Service } from '@/app/services/servicesData';

const categories = {
  all: 'All Services',
  infrastructure: 'Infrastructure',
  security: 'Security',
  networking: 'Networking',
} as const;

type Category = keyof typeof categories;

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter((service: Service) => service.category === activeCategory);

  return (
    <div className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Right Square */}
        <div className="absolute -top-8 -right-8 w-40 h-40 border-[20px] border-blue-200/20 rotate-12"></div>
        
        {/* Bottom Left Circle */}
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border-[28px] border-orange-200/20"></div>
        
        {/* Middle Left Triangle */}
        <div className="absolute left-1/4 top-1/3 w-20 h-20 border-[14px] border-blue-200/20 transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-3">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to help your business thrive in the digital age.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as Category)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-blue-500 text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {filteredServices.map((service: Service) => (
            <div
              key={service.id}
              className="group relative h-full"
            >
              <a
                href={`/services/${service.id}`}
                className="block relative bg-white rounded-lg p-4 shadow-soft-md transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 border border-gray-100 h-full flex flex-col"
              >
                <div className="flex items-center mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white shadow-soft-sm group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 ml-2">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-xs mb-2 flex-grow line-clamp-3">{service.description}</p>
                <div className="flex items-center text-blue-500 text-xs font-medium mt-auto">
                  Learn More
                  <svg className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 