import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function Immunizations() {
  return (
    <>
      <SEO
        title="Immunizations & Vaccines — Hillside Dhaka Pharmacy"
        description="Flu shots, COVID-19, RSV, Shingles, Pneumonia vaccines and more. Walk-ins welcome or schedule an appointment. Most insurances accepted."
        keywords="flu shots, COVID vaccine, immunizations, vaccines, Jamaica NY, shingles vaccine, pneumonia shot"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Immunizations & <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">Vaccines</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Protect yourself and your family with our comprehensive immunization services. Walk-ins welcome!
            </p>
          </div>
        </div>
      </section>

      {/* Available Vaccines */}
      <section className="bg-white">
        <div className="section section-y">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Available Vaccines</h2>
            <p className="text-xl text-slate-600">Protecting your health is our priority</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                name: 'Flu (Influenza)',
                icon: '💉',
                color: 'from-blue-500 to-blue-600',
                description: 'Annual flu vaccine for all ages 6 months and up'
              },
              {
                name: 'COVID-19',
                icon: '🦠',
                color: 'from-green-500 to-green-600',
                description: 'Latest COVID-19 vaccines and boosters available'
              },
              {
                name: 'RSV',
                icon: ' 🫁',
                color: 'from-purple-500 to-purple-600',
                description: 'Respiratory Syncytial Virus vaccine for eligible patients'
              },
              {
                name: 'Shingles',
                icon: '🩹',
                color: 'from-orange-500 to-orange-600',
                description: 'Shingrix vaccine for adults 50 and older'
              },
              {
                name: 'Pneumonia',
                icon: '🫁',
                color: 'from-red-500 to-red-600',
                description: 'Pneumococcal vaccines for adults and children'
              },
              {
                name: 'Travel Vaccines',
                icon: '✈️',
                color: 'from-teal-500 to-teal-600',
                description: 'Vaccines for international travel destinations'
              }
            ].map((vaccine, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${vaccine.color} text-white text-2xl mb-4`}>
                  {vaccine.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{vaccine.name}</h3>
                <p className="text-slate-600">{vaccine.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Walk-Ins Welcome</h3>
              <p className="text-slate-600">No appointment necessary for most vaccines. Stop by during operating hours.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
              <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Insurance Billing</h3>
              <p className="text-slate-600">We bill most insurance plans directly. Most vaccines covered at no cost.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
              <svg className="w-12 h-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Immunization Records</h3>
              <p className="text-slate-600">We maintain detailed records and can provide documentation when needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Your Vaccines Today</h2>
          <p className="text-xl text-slate-600 mb-8">Walk-ins welcome or call to schedule</p>
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