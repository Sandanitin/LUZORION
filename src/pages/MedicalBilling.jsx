import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function MedicalBilling() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO 
        title="Medical Billing — LUZORION" 
        description="Comprehensive, accurate, and scalable Revenue Cycle Management solutions to maximize reimbursements." 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Comprehensive <span className="text-green-600">Medical Billing</span> Solutions
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Accurate, efficient, and scalable Revenue Cycle Management solutions that maximize your practice's financial health.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Contact Us
            </Link>
            <a 
              href="#why" 
              className="px-8 py-3 bg-white border-2 border-green-600 text-green-600 font-medium rounded-xl hover:bg-green-50 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-10">
            Trusted by leading healthcare providers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['HIPAA Compliant', 'ICD-10 Certified', '98% Accuracy', '24/7 Support'].map((badge, i) => (
              <div 
                key={i} 
                className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:shadow-sm transition"
              >
                <span className="text-sm font-medium text-gray-700">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">LUZORION</span> for Medical Billing?
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive solutions are designed to meet the complex challenges of modern healthcare revenue cycle management.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💡',
                title: 'Reduced Denials',
                description: 'Minimize claim rejections with our thorough verification processes.'
              },
              {
                icon: '⚡',
                title: 'Faster Payments',
                description: 'Accelerate your revenue cycle with efficient claim processing.'
              },
              {
                icon: '🛡️',
                title: 'Compliance First',
                description: 'Stay protected with HIPAA-compliant billing practices.'
              },
              {
                icon: '📊',
                title: 'Transparent Reporting',
                description: 'Real-time insights into your practice\'s financial health.'
              },
              {
                icon: '🤝',
                title: 'Dedicated Support',
                description: 'Your personal account manager ensures seamless operations.'
              },
              {
                icon: '🚀',
                title: 'Scalable Solutions',
                description: 'Grow your practice with our flexible billing services.'
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 text-2xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Billing Process?</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10">
            Partner with LUZORION for accurate, compliant, and efficient medical billing that drives results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-green-600 font-medium rounded-xl shadow-md hover:bg-gray-50 transition-all"
            >
              Get Started
            </Link>
            <Link 
              to="/demo" 
              className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
