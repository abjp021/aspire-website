'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    name: string;
    description: string;
    pdfUrl: string;
  } | null;
}

export default function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  // Add parameters to hide PDF controls
  const pdfUrl = certificate?.pdfUrl ? `${certificate.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0` : '';

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all w-full max-w-6xl">
                <div className="absolute right-2 top-2 z-10">
                  <button
                    type="button"
                    className="rounded-md bg-white/80 backdrop-blur-sm text-gray-400 hover:text-gray-500 focus:outline-none p-1"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="p-2">
                  <div className="text-center mb-2">
                    <Dialog.Title as="h3" className="text-lg font-semibold text-gray-900">
                      {certificate?.name}
                    </Dialog.Title>
                    <p className="text-sm text-gray-500">
                      {certificate?.description}
                    </p>
                  </div>
                  <div className="w-full rounded-lg overflow-hidden bg-gray-100">
                    <iframe
                      src={pdfUrl}
                      className="w-full h-[85vh]"
                      title={certificate?.name}
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
} 