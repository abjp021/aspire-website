'use client';

import React from 'react';

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-primary-600 mb-4">Case Study: Our Impactful Work</h1>
        <p className="text-lg text-gray-700">
          Discover how Aspiretechno Global delivers real results for clients. Watch the video below to see our solutions in action.
        </p>
      </div>
      <div className="max-w-4xl mx-auto flex justify-center">
        <div className="w-full aspect-video bg-black rounded-2xl shadow-lg overflow-hidden">
          {/* Replace the src with your actual video URL or embed code */}
          <video
            controls
            className="w-full h-full object-cover"
            poster="/images/video-poster.jpg" // Optional: a poster image before play
          >
            <source src="/videos/your-case-study.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* You can add more case study details, testimonials, or CTAs below */}
    </div>
  );
} 