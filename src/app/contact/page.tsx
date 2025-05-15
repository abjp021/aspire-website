'use client';

import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { HiOutlineLightBulb, HiOutlineChartBar, HiOutlineShieldCheck } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceType: string;
  budget: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const scrollToForm = (serviceType?: string) => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (serviceType) {
        const select = document.getElementById('serviceType') as HTMLSelectElement;
        if (select) {
          select.value = serviceType;
          const event = new Event('change', { bubbles: true });
          select.dispatchEvent(event);
        }
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xpwdlbrq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'Contact Form',
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          serviceType: data.serviceType,
          budget: data.budget,
          message: data.message
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-white/90 text-xl mb-4 max-w-3xl mx-auto">
              Whether you need a custom solution or want to explore our services, we're here to help transform your ideas into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: HiOutlineLightBulb,
                title: "Innovation Hub",
                description: "Explore cutting-edge solutions and discover how we can help you stay ahead of the curve.",
                cta: "Start Innovating",
                color: "yellow",
                gradient: "from-blue-500/20 to-purple-500/20",
                serviceType: "digital-transformation"
              },
              {
                icon: HiOutlineChartBar,
                title: "Growth Strategy",
                description: "Scale your business with data-driven insights and strategic technology solutions.",
                cta: "Scale Up",
                color: "green",
                gradient: "from-green-500/20 to-teal-500/20",
                serviceType: "consulting"
              },
              {
                icon: HiOutlineShieldCheck,
                title: "Secure Solutions",
                description: "Protect your business with enterprise-grade security and compliance solutions.",
                cta: "Secure Now",
                color: "red",
                gradient: "from-red-500/20 to-orange-500/20",
                serviceType: "cybersecurity"
              }
            ].map((card) => (
              <div
                key={card.title}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="text-white mb-6">
                    <card.icon className={`w-12 h-12 mb-4 text-${card.color}-300`} />
                    <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                    <p className="text-white/80 mb-6">{card.description}</p>
                  </div>
                  <button
                    onClick={() => scrollToForm(card.serviceType)}
                    className="inline-flex items-center justify-center w-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 group-hover:bg-white group-hover:text-primary-600"
                  >
                    {card.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have a project in mind? We're here to help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Company Details */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-3 top-0 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-300 rounded-full"></div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">Connect With Us</span>
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-400 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-gray-900 mb-1">Visit Our Office</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                          SF 25-26 Aristo Aura, OPP Shanghani Skyz, <br />
                          Priya Cinema to Navrachana Uni.Road,<br />
                          TP-2 Bhayli, Vadodara, Gujarat India 391410
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-400 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-gray-900 mb-1">Call Us</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            <a href="tel:+918012345678" className="hover:text-primary-600 transition-colors">+91 26535 16805</a><br />
                            {/* <a href="tel:+919876543210" className="hover:text-primary-600 transition-colors">+91 98765 43210</a> */}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-400 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-gray-900 mb-1">Email Us</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            <a href="mailto:contact@aspiretechno.com" className="hover:text-primary-600 transition-colors">sales@aspiretechno.co.in</a><br />
                            {/* <a href="mailto:support@aspiretechno.com" className="hover:text-primary-600 transition-colors">support@aspiretechno.com</a> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">Business Hours</h3>
                    <div className="space-y-3 bg-white rounded-xl p-4 shadow-lg shadow-gray-100/50">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600 font-medium">Monday - Friday</span>
                        <span className="text-sm text-gray-900 font-semibold bg-primary-50 px-2 py-0.5 rounded-full">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600 font-medium">Saturday</span>
                        <span className="text-sm text-gray-900 font-semibold bg-primary-50 px-2 py-0.5 rounded-full">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 font-medium">Sunday</span>
                        <span className="text-sm text-red-600 font-semibold bg-red-50 px-2 py-0.5 rounded-full">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef} className="relative">
              <div className="relative bg-white rounded-xl shadow-xl p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-4">
                    {[
                      {
                        name: 'name',
                        label: 'Full Name',
                        type: 'text',
                        placeholder: 'John Doe',
                        required: true
                      },
                      {
                        name: 'email',
                        label: 'Email Address',
                        type: 'email',
                        placeholder: 'john@company.com',
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      },
                      {
                        name: 'company',
                        label: 'Company Name',
                        type: 'text',
                        placeholder: 'Your Company'
                      },
                      {
                        name: 'phone',
                        label: 'Phone Number',
                        type: 'tel',
                        placeholder: '+91 98765 43210'
                      }
                    ].map((field) => (
                      <div key={field.name} className="relative">
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          {...register(field.name as keyof FormData, {
                            required: field.required ? `${field.label} is required` : false,
                            pattern: field.pattern
                          })}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white text-sm"
                          placeholder={field.placeholder}
                        />
                        {errors[field.name as keyof FormData] && (
                          <p className="mt-1 text-xs text-red-600 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors[field.name as keyof FormData]?.message}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Type
                      </label>
                      <select
                        id="serviceType"
                        {...register('serviceType')}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white text-sm appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: `right 0.5rem center`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em'
                        }}
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="cloud-services">Cloud Services</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="relative">
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        {...register('budget')}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white text-sm appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: `right 0.5rem center`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em'
                        }}
                      >
                        <option value="">Select budget range</option>
                        <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                        <option value="100000-250000">₹1,00,000 - ₹2,50,000</option>
                        <option value="250000-500000">₹2,50,000 - ₹5,00,000</option>
                        <option value="500000+">₹5,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      {...register('message', { required: 'Project details are required' })}
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white resize-none text-sm"
                      placeholder="Tell us about your project requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold hover:from-primary-700 hover:to-primary-600 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transform hover:-translate-y-0.5 transition-all duration-200 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {submitSuccess && (
                    <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-100 flex items-start text-sm">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">Thank you for your message!</p>
                        <p className="mt-0.5">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}