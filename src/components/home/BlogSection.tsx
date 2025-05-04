'use client';

import Link from 'next/link';

export default function BlogSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-dark-500 text-center">Latest Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">5 IT Trends to Watch in 2024</h3>
            <p className="text-gray-500 text-sm mb-2">Stay ahead of the curve with these emerging technology trends.</p>
            <Link href="/blog/it-trends-2024" className="text-secondary-500 font-medium text-sm hover:underline">
              Read More →
            </Link>
          </div>
          <div className="bg-gray-50 rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">How to Secure Your Business Data</h3>
            <p className="text-gray-500 text-sm mb-2">Practical tips for keeping your company's information safe.</p>
            <Link href="/blog/business-data-security" className="text-secondary-500 font-medium text-sm hover:underline">
              Read More →
            </Link>
          </div>
          <div className="bg-gray-50 rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">The Power of Cloud Computing</h3>
            <p className="text-gray-500 text-sm mb-2">Discover how cloud solutions can transform your operations.</p>
            <Link href="/blog/cloud-computing-power" className="text-secondary-500 font-medium text-sm hover:underline">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 