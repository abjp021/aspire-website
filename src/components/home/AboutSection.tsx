'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-primary-600 mb-4">About Aspiretechno Global</h2>
          <p className="text-lg text-gray-700 mb-6">
            Aspiretechno Global is a leading provider of innovative IT solutions, empowering organizations to thrive in the digital era. With a passion for technology and a commitment to excellence, we deliver tailored services in networking, cybersecurity, cloud, and IT infrastructure.
          </p>
          <p className="text-gray-600 mb-4">
            Our team of certified professionals partners with clients across industries, helping them achieve operational efficiency, security, and growth. We believe in building long-term relationships based on trust, transparency, and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <div className="bg-white rounded-xl shadow p-6 flex-1 border-l-4 border-primary-500">
              <h3 className="text-xl font-bold text-primary-600 mb-2">Our Mission</h3>
              <p className="text-gray-600 text-base">
                To enable businesses to reach their full potential through secure, scalable, and future-ready technology solutions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex-1 border-l-4 border-secondary-500">
              <h3 className="text-xl font-bold text-secondary-600 mb-2">Our Vision</h3>
              <p className="text-gray-600 text-base">
                To be the most trusted technology partner, driving digital transformation and innovation worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/about.jpg"
            alt="About Aspiretechno Global"
            width={400}
            height={400}
            className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
} 