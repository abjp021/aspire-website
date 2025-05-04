'use client';

import Link from 'next/link';

export default function CaseStudiesSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-dark-500 text-center">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">Cloud Migration for Retailer</h3>
            <p className="text-gray-500 text-sm mb-2">We helped a major retailer migrate to the cloud, improving scalability and reducing costs by 30%.</p>
            <Link href="/case-studies/cloud-migration" className="text-secondary-500 font-medium text-sm hover:underline">
              Read More →
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">Cybersecurity Overhaul</h3>
            <p className="text-gray-500 text-sm mb-2">A financial services client now enjoys robust protection after a full security audit and upgrade.</p>
            <Link href="/case-studies/cybersecurity" className="text-secondary-500 font-medium text-sm hover:underline">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 