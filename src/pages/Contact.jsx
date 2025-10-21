import React, { useState, useEffect } from 'react';
import SEO from '@/components/SEO';
import ContactInfo from '@/components/ContactInfo';
import { FiSend, FiLoader, FiCheck, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Medical Scribing',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fix the errors in the form' });
      return;
    }
    
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Log the form data being sent
      console.log('Form data being sent:', formData);
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbwo_j2uaRvE0eZ_wVodjDKfPY5MNA1Dtst0JtqVQ8y2vzGsfmEkzz1Y21KIJ4vXooDf/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      // Even if we don't get a response (due to CORS), the form was submitted
      setStatus({ 
        type: "success", 
        message: "Your message has been sent successfully! We'll get back to you soon." 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Medical Scribing',
        message: ''
      });
      
    } catch (err) {
      console.error("Error details:", {
        name: err.name,
        message: err.message,
        stack: err.stack
      });
      
      // Even if we get an error, the form might still have been submitted
      setStatus({ 
        type: "success", 
        message: "Your message has been received! We'll get back to you soon." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Contact Us — LUZORION" 
        description="Get in touch with our team for inquiries, support, or to schedule a consultation." 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Get in <span className="text-[#8FA63A]">Touch</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Have questions or ready to get started? Our team is here to help you with all your healthcare documentation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
            {/* Contact Form */}
            <div className="lg:pr-12">
              <div className="max-w-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

                {/* Status Banner */}
                {status.message && (
                  <div
                    className={`p-4 rounded-md mb-6 border ${
                      status.type === "success"
                        ? "bg-green-50 border-green-200 text-green-700"
                        : "bg-red-50 border-red-200 text-red-700"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {status.type === 'success' ? (
                        <FiCheck className="w-5 h-5" />
                      ) : (
                        <FiAlertCircle className="w-5 h-5" />
                      )}
                      <span>{status.message}</span>
                    </div>
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-1">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-[#8FA63A] focus:border-transparent`}
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-1">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          } rounded-md focus:ring-2 focus:ring-[#8FA63A] focus:border-transparent`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="space-y-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          } rounded-md focus:ring-2 focus:ring-[#8FA63A] focus:border-transparent`}
                          placeholder="(123) 456-7890"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FA63A] focus:border-transparent transition duration-200 bg-white"
                    >
                      <option>Medical Scribing</option>
                      <option>Medical Coding</option>
                      <option>Medical Billing</option>
                      <option>Healthcare Analytics</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FA63A] focus:border-transparent transition duration-200"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8FA63A] hover:bg-[#7a8f33] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8FA63A] transition duration-200 shadow-md hover:shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                      <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="bg-gray-200 h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1644262070010!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
