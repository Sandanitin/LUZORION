import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '@/components/SEO';
import ContactInfo from '@/components/ContactInfo';
import { FiSend, FiLoader, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

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

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("ZD_JLHs4OkMV0eIJ0");
  }, []);

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

  // Clear validation errors after a few seconds
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // Auto-hide success/error message
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear specific error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Function to save to Google Sheets
  const saveToGoogleSheet = async (data) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxDnwv2-jsK66MKj6vwO_5k7eJrGOFrz6Df1exmS4erU2nPQIxP8KX8trYjM1vINANE/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ...data,
          timestamp: new Date().toISOString(),
        }).toString(),
      });

      // Since we're using no-cors mode, we can't read the response
      // But we assume it's successful if no network error occurs
      console.log('Data saved to Google Sheet');
      return true;
    } catch (error) {
      console.error('Error saving to Google Sheet:', error);
      return false;
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
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: 'LUZORION Team',
        reply_to: formData.email
      };

      // Send email using EmailJS
      const emailPromise = emailjs.send(
        'service_48mvqs9',
        'template_s85u808',
        templateParams,
        'ZD_JLHs4OkMV0eIJ0'
      );

      // Save to Google Sheets (run in parallel)
      const sheetPromise = saveToGoogleSheet(formData);

      // Wait for both operations (but don't fail if sheet save fails)
      const [emailResult] = await Promise.all([
        emailPromise,
        sheetPromise.catch(error => {
          console.log('Google Sheet save failed but continuing:', error);
        })
      ]);

      console.log('Email sent successfully:', emailResult);

      // Show success message
      setStatus({
        type: 'success',
        message: "Your message has been received! We'll get back to you soon."
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
      console.error("EmailJS Error details:", err);

      // If email fails, try to at least save to Google Sheets
      try {
        await saveToGoogleSheet(formData);
        console.log('Data saved to Google Sheet as fallback');
        
        // Show success message even if email failed but sheet saved
        setStatus({
          type: 'success',
          message: "Your message has been received! We'll get back to you soon."
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Medical Scribing',
          message: ''
        });

      } catch (sheetError) {
        console.error('Both email and sheet save failed:', sheetError);

        // Show appropriate error message
        let errorMessage = "Sorry, there was a problem sending your message. Please try again later.";
        
        if (err.text) {
          errorMessage = err.text;
        } else if (err.message) {
          errorMessage = err.message;
        }

        setStatus({
          type: 'error',
          message: errorMessage
        });
      }
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Get in <span className="text-[#8FA63A]">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or ready to get started? Our team is here to help you with all your healthcare documentation needs.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Contact Form */}
          <div className="lg:pr-12 max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

            {/* Status Banner */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-md mb-6 border text-center ${
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
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-[#8FA63A] focus:border-transparent`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:ring-2 focus:ring-[#8FA63A] focus:border-transparent`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:ring-2 focus:ring-[#8FA63A] focus:border-transparent`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FA63A] focus:border-transparent bg-white"
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
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-[#8FA63A] focus:border-transparent`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center px-6 py-3 text-base font-medium rounded-md text-white bg-[#8FA63A] hover:bg-[#7a8f33] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8FA63A] transition duration-200 shadow-md hover:shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {loading ? (
                    <>
                      <FiLoader className="animate-spin mr-2 w-5 h-5" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <ContactInfo />
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