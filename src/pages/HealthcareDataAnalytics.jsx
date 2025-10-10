import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function HealthcareDataAnalytics() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO 
        title="Healthcare Data Analytics — LUZORION" 
        description="Transform your healthcare data into actionable insights with our advanced analytics solutions." 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Transform Healthcare with <span className="text-[#8FA63A]">Data Analytics</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock the power of your healthcare data with our advanced analytics solutions for better patient outcomes and operational efficiency.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-[#8FA63A] hover:bg-[#7a8f33] text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Get Started
              </Link>
              <a 
                href="#solutions" 
                className="px-8 py-3 bg-white border-2 border-[#8FA63A] text-[#8FA63A] font-medium rounded-xl hover:bg-[#8FA63A]/5 transition-all"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-10">
            Trusted by leading healthcare organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['HIPAA Compliant', 'Real-time Analytics', '98% Accuracy', '24/7 Support'].map((badge, i) => (
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

      {/* Solutions */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced <span className="text-[#8FA63A]">Healthcare Analytics</span> Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Our data analytics platform helps healthcare organizations make data-driven decisions for better patient care and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Predictive Analytics',
                description: 'Forecast patient outcomes and identify at-risk populations with our advanced predictive models.'
              },
              {
                icon: '📈',
                title: 'Performance Metrics',
                description: 'Track and analyze key performance indicators to improve operational efficiency.'
              },
              {
                icon: '🔍',
                title: 'Data Visualization',
                description: 'Interactive dashboards for clear insights into your healthcare data.'
              },
              {
                icon: '⚕️',
                title: 'Clinical Analytics',
                description: 'Improve patient care with insights from clinical data analysis.'
              },
              {
                icon: '📱',
                title: 'Mobile Access',
                description: 'Access critical analytics on-the-go with our mobile-friendly platform.'
              },
              {
                icon: '🔒',
                title: 'Secure & Compliant',
                description: 'Enterprise-grade security and HIPAA compliance for all your data.'
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8FA63A]/10 text-[#8FA63A] text-2xl flex items-center justify-center mb-4">
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
      <section className="py-24 bg-gradient-to-r from-[#8FA63A] to-[#7a8f33] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Data?</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10">
            Discover how our analytics solutions can help you make better decisions and improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-[#8FA63A] font-medium rounded-xl shadow-md hover:bg-gray-50 transition-all"
            >
              Request Demo
            </Link>
            <Link 
              to="/solutions" 
              className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}