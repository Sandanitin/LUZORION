import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function SpecialtyServices() {
  return (
    <>
      <SEO
        title="Specialty Services — Hillside Dhaka Pharmacy"
        description="DME supplies, blister packaging, workers' comp support, special medication orders, and LTC services."
        keywords="DME supplies, blister pack, workers compensation pharmacy, specialty pharmacy, Jamaica NY"
      />

      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Specialty <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-slate-600">Specialized pharmacy services to meet your unique needs</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section section-y">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: '📦', title: 'DME Supplies', desc: 'Durable medical equipment and supplies available. Ask our team about what we have in stock.' },
              { icon: '💊', title: 'Blister Packaging', desc: 'Organize your medications with blister packs for easy daily management and compliance.' },
              { icon: '👷', title: 'Workers\' Compensation Support', desc: 'We handle workers\' comp prescriptions and coordinate with your employer.' },
              { icon: '🔬', title: 'Special Orders', desc: 'Hard-to-find medications? We accept special orders to get you what you need.' }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Something Special?</h2>
          <p className="text-xl text-slate-600 mb-8">Contact us about our specialty services</p>
          <a href="tel:7185262300" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl">
            📞 718-526-2300
          </a>
        </div>
      </section>
    </>
  )
}