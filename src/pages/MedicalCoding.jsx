import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function MedicalCoding() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Medical Coding — LUZORION" 
        description="Your partner in reimbursement excellence with accurate, compliant coding that drives revenue." 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0F7E9] to-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Your Partner in <span className="text-[#8FA63A]">Reimbursement Excellence</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Maximize revenue with LUZORION's medical coding solutions. Improve coding accuracy with our attention to detail and rapid turnaround.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-[#8FA63A] hover:bg-[#7A8F32] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a 
                href="#why-choose-us" 
                className="px-8 py-3 bg-white border-2 border-[#8FA63A] text-[#8FA63A] font-medium rounded-lg hover:bg-[#F0F7E9] transition-all flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">Trusted by leading healthcare providers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['AAPC', 'AHIMA', 'KLAS 2025', 'SOC 2'].map((badge, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-sm font-medium text-gray-700">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Charts Coded Per Year' },
              { number: '98%', label: 'Coding Accuracy' },
              { number: '1M+', label: 'Encounters Supported' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#8FA63A]">{stat.number}</div>
                <p className="mt-2 text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#8FA63A]">LUZORION</span> for Medical Coding?
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive solution is designed to address the unique challenges of modern healthcare documentation and revenue cycle management.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '✓',
                title: 'Certified Coders',
                description: 'AAPC & AHIMA certified professionals ensuring accuracy and compliance.'
              },
              {
                icon: '✓',
                title: 'Rapid Turnaround',
                description: 'Efficient processes that deliver quick results without sacrificing quality.'
              },
              {
                icon: '✓',
                title: 'Specialty-Specific',
                description: 'Expertise across all major medical specialties and subspecialties.'
              },
              {
                icon: '✓',
                title: 'Compliance Focused',
                description: 'Strict adherence to HIPAA, CMS, and other regulatory requirements.'
              },
              {
                icon: '✓',
                title: 'Technology Driven',
                description: 'Advanced tools and EHR integration for seamless workflow.'
              },
              {
                icon: '✓',
                title: 'Dedicated Support',
                description: 'Personalized service with a dedicated account manager.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#F0F7E9] text-[#8FA63A] text-xl font-bold flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8FA63A] to-[#7A8F32] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Revenue Cycle?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Partner with LUZORION for accurate, compliant medical coding that drives results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-[#8FA63A] font-medium rounded-lg shadow-md hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              to="/demo" 
              className="px-8 py-3 bg-transparent border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}