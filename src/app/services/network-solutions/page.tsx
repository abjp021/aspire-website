import React from 'react';

const networkingFeatures = [
  'Network Design and Architecture - Custom-designed architecture optimizing data flow and scalability',
  'Network Monitoring and Management - 24/7 proactive monitoring and management',
  'Implementation and Integration - Seamless deployment and system integration',
  'Network Security - Advanced security with firewalls, intrusion detection, and VPN',
];

export default function NetworkSolutions() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 via-primary-700 to-secondary-700 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Network Solutions</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">Empowering your business with robust, scalable, and secure networking infrastructure for the digital age.</p>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-primary-900">Our Networking Services</h2>
        <ul className="grid gap-6 text-left">
          {networkingFeatures.map((feature, idx) => (
            <li key={idx} className="bg-blue-50 border-l-4 border-blue-500 rounded-md p-4 shadow-sm">
              <span className="text-blue-900 font-medium">{feature.split(' - ')[0]}</span>
              <span className="block text-blue-700 text-sm mt-1">{feature.split(' - ')[1]}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="max-w-4xl mx-auto py-8 px-4 text-center">
        <h2 className="text-xl font-semibold mb-4 text-primary-900">Our Approach</h2>
        <p className="text-gray-700 mb-8">We design, implement, and manage high-performance networks tailored to your business needs. From LAN/WAN to cloud connectivity, our solutions ensure reliability, security, and future-proof scalability.</p>
        <div className="text-gray-400 italic">(Add your detailed service content here...)</div>
      </section>
    </div>
  );
} 