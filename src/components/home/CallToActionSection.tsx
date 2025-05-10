'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlinePlay, HiOutlineClipboardDocument, HiOutlineChatBubbleLeftRight, HiXMark, HiOutlineLightBulb, HiOutlineChartBar, HiOutlineShieldCheck, HiArrowLongRight } from 'react-icons/hi2';
import Select from 'react-select';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
              }
            }}
            exit={{ 
              opacity: 0,
              scale: 0.95,
              y: 20,
              transition: {
                duration: 0.2
              }
            }}
            className="relative w-full max-w-xl mx-4 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="sticky top-0 flex justify-between items-center p-6 border-b bg-white z-10">
              <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <HiXMark className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const solutions = [
  { value: 'cloud', label: 'Cloud Solutions' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'digital-transformation', label: 'Digital Transformation' },
  { value: 'it-infrastructure', label: 'IT Infrastructure' },
  { value: 'data-analytics', label: 'Data Analytics' },
  { value: 'ai-ml', label: 'AI & Machine Learning' }
];

interface FormData {
  email: string;
  phone: string;
  solutions?: { value: string; label: string }[];
  projectTypes?: { value: string; label: string }[];
  areasOfInterest?: { value: string; label: string }[];
  budgetRange?: string;
  companySize?: string;
  additionalRequirements?: string;
  preferredDate?: string;
  preferredTime?: string;
}

interface FormErrors {
  [key: string]: string;
}

interface LoadingState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

const logFormSubmission = (formType: string, data: FormData) => {
  console.log('='.repeat(50));
  console.log(`Form Submission - ${formType.toUpperCase()}`);
  console.log('='.repeat(50));
  console.log('Timestamp:', new Date().toISOString());
  console.log('Form Data:', data);
  console.log('='.repeat(50));
};

const useFormValidation = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone validation (Indian mobile number)
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid Indian mobile number';
    }

    // Date and time validation
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | { name: string; value: any }
  ) => {
    if ('target' in e) {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    } else {
      const { name, value } = e;
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleSelectChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return { formData, errors, handleChange, handleSelectChange, validateForm };
};

const timeSlots = [
  { value: 'morning', label: 'Morning (9:00 AM - 12:00 PM)' },
  { value: 'afternoon', label: 'Afternoon (12:00 PM - 4:00 PM)' },
  { value: 'evening', label: 'Evening (4:00 PM - 6:00 PM)' }
];

const FormFooter = ({ onClose, isLoading, error, success, successMessage }: { onClose: () => void, isLoading: boolean, error: string | null, success: boolean, successMessage: string }) => (
  <div className="sticky bottom-0 left-0 right-0 bg-white border-t p-6 mt-6">
    <div className="flex gap-4">
      <button
        type="submit"
        className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Submit Request'}
      </button>
      <button
        type="button"
        onClick={onClose}
        className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Cancel
      </button>
    </div>
    {success && (
      <div className="mt-4 text-center text-green-500">
        {successMessage}
      </div>
    )}
    {error && (
      <div className="mt-4 text-center text-red-500">
        {error}
      </div>
    )}
  </div>
);

interface FormProps {
  onClose: () => void;
  type: 'demo' | 'quote' | 'consultation';
}

const getFormTitle = (type: FormProps['type']) => {
  switch (type) {
    case 'demo':
      return 'Schedule a Demo';
    case 'quote':
      return 'Request a Quote';
    case 'consultation':
      return 'Book a Consultation';
  }
};

const DemoForm = ({ onClose, type }: FormProps) => {
  const { formData, errors, handleChange, handleSelectChange, validateForm } = useFormValidation({
    email: '',
    phone: '',
    solutions: [],
    companySize: '',
    additionalRequirements: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    error: null,
    success: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoadingState({ isLoading: true, error: null, success: false });

    try {
      const response = await fetch('https://formspree.io/f/xpwdlbrq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: getFormTitle(type),
          email: formData.email,
          phone: formData.phone,
          solutions: formData.solutions?.map(s => s.label).join(', '),
          companySize: formData.companySize,
          additionalRequirements: formData.additionalRequirements,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime
        }),
      });

      if (response.ok) {
        setLoadingState({ isLoading: false, error: null, success: true });
        setTimeout(onClose, 2000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setLoadingState({ 
        isLoading: false, 
        error: 'Failed to submit form. Please try again.', 
        success: false 
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.email 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
          } shadow-sm transition-colors duration-200`}
          placeholder="your@email.com"
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <span className="mr-1">•</span>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.phone 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
            } shadow-sm transition-colors duration-200`}
            placeholder="+91 9876543210"
            required
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <span className="mr-1">•</span>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Solutions of Interest <span className="text-red-500">*</span>
        </label>
        <Select
          isMulti
          name="solutions"
          value={formData.solutions}
          options={solutions}
          onChange={(value: any) => handleSelectChange('solutions', value)}
          className="rounded-lg"
          classNamePrefix="select"
          placeholder="Select solutions..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Company Size
        </label>
        <select
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="">Select company size...</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-500">201-500 employees</option>
          <option value="500+">500+ employees</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Requirements
        </label>
        <textarea
          name="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="Tell us about your specific needs..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Demo Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          min={new Date().toISOString().split('T')[0]}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Time <span className="text-red-500">*</span>
        </label>
        <select 
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        >
          <option value="">Select preferred time...</option>
          {timeSlots.map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.label}
            </option>
          ))}
        </select>
      </div>

      <FormFooter 
        onClose={onClose} 
        isLoading={loadingState.isLoading}
        error={loadingState.error}
        success={loadingState.success}
        successMessage="Request submitted successfully!"
      />
    </form>
  );
};

const projectTypes = [
  { value: 'new-implementation', label: 'New Implementation' },
  { value: 'system-upgrade', label: 'System Upgrade' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'integration', label: 'System Integration' },
  { value: 'migration', label: 'Data Migration' }
];

const QuoteForm = ({ onClose, type }: FormProps) => {
  const { formData, errors, handleChange, handleSelectChange, validateForm } = useFormValidation({
    email: '',
    phone: '',
    projectTypes: [],
    budgetRange: '',
    additionalRequirements: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    error: null,
    success: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoadingState({ isLoading: true, error: null, success: false });

    try {
      const response = await fetch('https://formspree.io/f/xpwdlbrq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: getFormTitle(type),
          email: formData.email,
          phone: formData.phone,
          projectTypes: formData.projectTypes?.map(p => p.label).join(', '),
          budgetRange: formData.budgetRange,
          additionalRequirements: formData.additionalRequirements,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime
        }),
      });

      if (response.ok) {
        setLoadingState({ isLoading: false, error: null, success: true });
        setTimeout(onClose, 2000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setLoadingState({ 
        isLoading: false, 
        error: 'Failed to submit form. Please try again.', 
        success: false 
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.email 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
          } shadow-sm transition-colors duration-200`}
          placeholder="your@email.com"
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <span className="mr-1">•</span>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.phone 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
            } shadow-sm transition-colors duration-200`}
            placeholder="+91 9876543210"
            required
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <span className="mr-1">•</span>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Types <span className="text-red-500">*</span>
        </label>
        <Select
          isMulti
          name="projectTypes"
          value={formData.projectTypes}
          options={projectTypes}
          onChange={(value: any) => handleSelectChange('projectTypes', value)}
          className="rounded-lg"
          classNamePrefix="select"
          placeholder="Select project types..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Budget Range
        </label>
        <select
          name="budgetRange"
          value={formData.budgetRange}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="">Select budget range...</option>
          <option value="50000-100000">₹50,000 - ₹1,00,000</option>
          <option value="100000-250000">₹1,00,000 - ₹2,50,000</option>
          <option value="250000-500000">₹2,50,000 - ₹5,00,000</option>
          <option value="500000+">₹5,00,000+</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          min={new Date().toISOString().split('T')[0]}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Time <span className="text-red-500">*</span>
        </label>
        <select 
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        >
          <option value="">Select preferred time...</option>
          {timeSlots.map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Description
        </label>
        <textarea
          rows={4}
          name="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="Describe your project requirements..."
        />
      </div>
      <FormFooter 
        onClose={onClose} 
        isLoading={loadingState.isLoading}
        error={loadingState.error}
        success={loadingState.success}
        successMessage="Quote request submitted successfully!"
      />
    </form>
  );
};

const challenges = [
  { value: 'digital-transformation', label: 'Digital Transformation' },
  { value: 'it-infrastructure', label: 'IT Infrastructure' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'cloud-migration', label: 'Cloud Migration' },
  { value: 'data-analytics', label: 'Data Analytics' },
  { value: 'automation', label: 'Process Automation' },
  { value: 'other', label: 'Other' }
];

const ConsultationForm = ({ onClose, type }: FormProps) => {
  const { formData, errors, handleChange, handleSelectChange, validateForm } = useFormValidation({
    email: '',
    phone: '',
    areasOfInterest: [],
    additionalRequirements: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    error: null,
    success: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoadingState({ isLoading: true, error: null, success: false });

    try {
      const response = await fetch('https://formspree.io/f/xpwdlbrq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: getFormTitle(type),
          email: formData.email,
          phone: formData.phone,
          areasOfInterest: formData.areasOfInterest?.map(a => a.label).join(', '),
          additionalRequirements: formData.additionalRequirements,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime
        }),
      });

      if (response.ok) {
        setLoadingState({ isLoading: false, error: null, success: true });
        setTimeout(onClose, 2000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setLoadingState({ 
        isLoading: false, 
        error: 'Failed to submit form. Please try again.', 
        success: false 
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.email 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
          } shadow-sm transition-colors duration-200`}
          placeholder="your@email.com"
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <span className="mr-1">•</span>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.phone 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
            } shadow-sm transition-colors duration-200`}
            placeholder="+91 9876543210"
            required
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <span className="mr-1">•</span>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Areas of Interest <span className="text-red-500">*</span>
        </label>
        <Select
          isMulti
          name="areasOfInterest"
          value={formData.areasOfInterest}
          options={challenges}
          onChange={(value: any) => handleSelectChange('areasOfInterest', value)}
          className="rounded-lg"
          classNamePrefix="select"
          placeholder="Select areas..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Consultation Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          min={new Date().toISOString().split('T')[0]}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Time <span className="text-red-500">*</span>
        </label>
        <select 
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        >
          <option value="">Select preferred time...</option>
          {timeSlots.map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Brief Description
        </label>
        <textarea
          rows={3}
          name="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="Tell us about your business challenges..."
        />
      </div>
      <FormFooter 
        onClose={onClose} 
        isLoading={loadingState.isLoading}
        error={loadingState.error}
        success={loadingState.success}
        successMessage="Consultation request submitted successfully!"
      />
    </form>
  );
};

export default function CallToActionSection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="py-20 bg-primary-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485-1.414 1.414L40.97 0H32zM0 5.373l.828-.83L2.243 5.96 0 8.2V5.374zm0 5.656l.828-.829 5.657 5.657-1.414 1.414L0 11.03v-2.83zm0 5.657l.828-.828 8.485 8.485-1.414 1.414L0 16.687v-2.83zm0 5.657l.828-.828 11.314 11.314-1.414 1.414L0 22.343v-2.83zm0 5.657l.828-.828 14.142 14.142-1.414 1.414L0 28v-2.83zm0 5.657l.828-.828 16.97 16.97-1.414 1.414L0 33.657v-2.83zm0 5.657l.828-.828 19.8 19.8-1.414 1.414L0 39.314v-2.83zm0 5.657l.828-.828 22.627 22.627-1.414 1.414L0 44.97v-2.83zm0 5.657l.828-.828 25.456 25.456-1.414 1.414L0 50.627v-2.83zm0 5.657l.828-.828 28.284 28.284-1.414 1.414L0 56.284v-2.83zm0 5.657l.828-.828 31.112 31.112-1.414 1.414L0 61.94v-2.83zm0 5.657l.828-.828 33.94 33.94-1.414 1.414L0 67.597v-2.83zm0 5.657l.828-.828 36.77 36.77-1.414 1.414L0 73.254v-2.83zm0 5.657l.828-.828 39.598 39.598-1.414 1.414L0 78.91v-2.83zm0 5.657l.828-.828 42.426 42.426-1.414 1.414L0 84.568v-2.83zm0 5.657l.828-.828 45.254 45.254-1.414 1.414L0 90.225v-2.83zm0 5.657l.828-.828 48.083 48.083-1.414 1.414L0 95.882v-2.83zm0 5.657l.828-.828 50.912 50.912-1.414 1.414L0 101.54v-2.83z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-xl mb-4 max-w-3xl mx-auto">
            Take the first step towards digital transformation. Choose the option that best suits your needs.
          </p>
          <p className="text-white/80 text-lg">
            Join hundreds of businesses that trust us with their technology needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Request Demo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="text-white mb-4">
              <HiOutlinePlay className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Request a Demo</h3>
              <p className="text-white/80 mb-4">
                See our solutions in action with a personalized demo tailored to your needs.
              </p>
            </div>
            <button
              onClick={() => setIsDemoOpen(true)}
              className="inline-flex items-center justify-center w-full bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition group"
            >
              Schedule Demo
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </button>
          </motion.div>

          {/* Request Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="text-white mb-4">
              <HiOutlineClipboardDocument className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Request a Quote</h3>
              <p className="text-white/80 mb-4">
                Get a detailed quote for your project with our transparent pricing.
              </p>
            </div>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center justify-center w-full bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition group"
            >
              Get Quote
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </button>
          </motion.div>

          {/* Consultation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="text-white mb-4">
              <HiOutlineChatBubbleLeftRight className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="text-white/80 mb-4">
                Discuss your requirements with our experts and get personalized advice.
              </p>
            </div>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="inline-flex items-center justify-center w-full bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition group"
            >
              Book Consultation
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 group"
          >
            Looking for more options? Visit our contact page
            <HiArrowLongRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-white/70 text-sm mt-4">
            Need immediate assistance? Call us at <span className="font-semibold text-white">1-800-ASPIRE</span> or email{' '}
            <a href="mailto:contact@aspiretechno.com" className="text-white underline hover:text-white/90">
              contact@aspiretechno.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        title={getFormTitle('demo')}
      >
        <DemoForm onClose={() => setIsDemoOpen(false)} type="demo" />
      </Modal>

      <Modal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        title={getFormTitle('quote')}
      >
        <QuoteForm onClose={() => setIsQuoteOpen(false)} type="quote" />
      </Modal>

      <Modal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        title={getFormTitle('consultation')}
      >
        <ConsultationForm onClose={() => setIsConsultationOpen(false)} type="consultation" />
      </Modal>
    </div>
  );
} 