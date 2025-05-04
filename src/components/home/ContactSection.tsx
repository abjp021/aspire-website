'use client';

import { useState } from 'react';
import { HiOutlineEnvelope, HiOutlinePhone, HiArrowLongRight } from 'react-icons/hi2';

export default function ContactSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
              <HiOutlinePhone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Sales Support</h3>
            <p className="mt-2 text-base text-gray-500">
              Interested in our solutions? Let's discuss how we can help your business grow.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center text-primary-600 font-medium hover:text-primary-500"
            >
              Contact Sales
              <HiArrowLongRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
              <HiOutlineEnvelope className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Technical Support</h3>
            <p className="mt-2 text-base text-gray-500">
              Need technical assistance? Our support team is ready to help you.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center text-primary-600 font-medium hover:text-primary-500"
            >
              Get Support
              <HiArrowLongRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
