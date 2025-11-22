import React, { useState } from 'react'
import SEO from '@/components/SEO'
import ContactInfo from '@/components/ContactInfo'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <SEO
        title="Contact Us — Hillside Dhaka Pharmacy"
        description="Contact Hillside Dhaka Pharmacy at 17014 Hillside Ave, Jamaica, NY. Call 718-526-2300. MON-SAT 10AM-7PM. Free delivery available."
        keywords="contact pharmacy, Jamaica NY pharmacy, 17014 Hillside Ave, pharmacy hours, phone number"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Contact <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're here to help! Reach out with any questions about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="bg-white">
        <div className="section section-y">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                    placeholder="(718) 526-2300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-lg text-white/90 mb-6">Call us directly or send an email</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7185262300"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[color:var(--primary)] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                📞 718-526-2300
              </a>
              <a
                href="mailto:dhakapharma17014@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                ✉️ dhakapharma17014@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}