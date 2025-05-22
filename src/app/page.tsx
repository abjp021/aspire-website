'use client';

import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ClientSection from '@/components/home/ClientSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import CallToActionSection from '@/components/home/CallToActionSection';
import { HiOutlinePhone } from 'react-icons/hi2';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ClientSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      {/* <BlogSection /> */}
      <CallToActionSection />
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
        <a
          href="/contact"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 text-primary-600 hover:text-primary-700 transition-all hover:scale-110"
        >
          <HiOutlinePhone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
