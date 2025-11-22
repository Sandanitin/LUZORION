import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function Prescriptions() {
  return (
    <>
      <SEO
        title="Prescription Services — Hillside Dhaka Pharmacy"
        description="Fast prescription filling in 10-15 minutes, free transfers, medication synchronization, automatic refill reminders. Most insurances accepted. Walk-ins welcome."
        keywords="prescription filling, medication transfer, prescription refills, Jamaica NY pharmacy, fast prescriptions"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Prescription <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Fast, accurate prescription filling with personalized service. Most prescriptions ready in 10-15 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className=" bg-white">
        <div className="section section-y">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: '⚡',
                title: 'Fast Prescription Filling',
                description: 'Most prescriptions ready in 10-15 minutes. Walk-ins welcome, no appointment necessary. Our team works quickly without compromising accuracy.'
              },
              {
                icon: '🔄',
                title: 'Hassle-Free Transfers',
                description: 'We handle the entire prescription transfer process. Just provide your information and we\'ll contact your previous pharmacy to transfer all your medications.'
              },
              {
                icon: '📅',
                title: 'Medication Synchronization',
                description: 'Sync all your medications to refill on the same day each month. One trip, all your meds — making your life easier.'
              },
              {
                icon: '🔔',
                title: 'Automatic Refill Reminders',
                description: 'Never run out of your medications. We\'ll remind you when it\'s time to refill and can have them ready when you need them.'
              },
              {
                icon: '📋',
                title: 'Prior Authorization Assistance',
                description: 'Our team helps with prior authorization requirements, working directly with your insurance and doctor to get approvals quickly.'
              },
              {
                icon: '💊',
                title: 'Special Orders',
                description: 'Hard-to-find medications? We accept special orders and work to get you what you need promptly.'
              }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">✓ We Accept Most Insurances</h2>
              <p className="text-lg mb-6 text-white/90">
                We accept Medicaid, Medicare Part D, and most private insurance plans. We also offer competitive cash pricing and discount programs for those without insurance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">Medicaid</div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">Medicare Part D</div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">Private Insurance</div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">Cash Pay Options</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Transfer Your Prescriptions?</h2>
          <p className="text-xl text-slate-600 mb-8">We make it easy and hassle-free</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Contact Us
            </Link>
            <a
              href="tel:7185262300"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-[color:var(--primary)] transition-all duration-200"
            >
              📞 718-526-2300
            </a>
          </div>
        </div>
      </section>
    </>
  )
}