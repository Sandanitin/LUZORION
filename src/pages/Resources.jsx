import React from 'react'
import SEO from '@/components/SEO'

export default function Resources() {
  return (
    <>
      <SEO
        title="Health Tips & Resources — Hillside Dhaka Pharmacy"
        description="Health tips, medication safety information, and wellness advice from Hillside Dhaka Pharmacy in Jamaica, NY."
        keywords="health tips, medication safety, wellness advice, pharmacy resources, health information"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Health Tips & <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Helpful information to keep you and your family healthy
            </p>
          </div>
        </div>
      </section>

      {/* Medication Safety */}
      <section className="bg-white">
        <div className="section section-y">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Medication Safety Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Take as Directed',
                tips: [
                  'Follow your doctor\'s and pharmacist\'s instructions exactly',
                  'Don\'t skip doses or stop early',
                  'Set reminders to take medications on time',
                  'Ask questions if you\'re unsure about anything'
                ]
              },
              {
                title: 'Store Properly',
                tips: [
                  'Keep medications in their original containers',
                  'Store in a cool, dry place away from moisture',
                  'Keep out of reach of children and pets',
                  'Check expiration dates regularly'
                ]
              },
              {
                title: 'Avoid Interactions',
                tips: [
                  'Tell your pharmacist about ALL medications you take',
                  'Include vitamins and supplements',
                  'Ask about food and drink interactions',
                  'Check before taking new medications'
                ]
              },
              {
                title: 'Know Your Medications',
                tips: [
                  'Understand what each medication is for',
                  'Know potential side effects',
                  'Be aware of warning signs',
                  'Keep an updated medication list'
                ]
              }
            ].map((section, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💊</span>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[color:var(--primary)] mt-1">✓</span>
                      <span className="text-slate-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Health */}
      <section className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section section-y">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Seasonal Health Tips</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                season: 'Fall/Winter',
                icon: '🍂',
                tips: [
                  'Get your flu shot early',
                  'Wash hands frequently',
                  'Stay hydrated',
                  'Get enough rest',
                  'Update vaccinations'
                ]
              },
              {
                season: 'Spring',
                icon: '🌸',
                tips: [
                  'Manage allergies proactively',
                  'Maintain outdoor activities',
                  'Review medication needs',
                  'Spring cleaning safety',
                  'Allergy medication ready'
                ]
              },
              {
                season: 'Summer',
                icon: '☀️',
                tips: [
                  'Use sunscreen daily',
                  'Stay hydrated in heat',
                  'Protect medications from heat',
                  'Travel medication planning',
                  'Insect bite prevention'
                ]
              }
            ].map((season, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3 text-center">{season.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{season.season}</h3>
                <ul className="space-y-2">
                  {season.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-[color:var(--primary)]">•</span>
                      <span className="text-slate-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Health Conditions */}
      <section className="bg-white">
        <div className="section section-y">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Managing Common Conditions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { condition: 'Diabetes', icon: '🩸', tips: 'Monitor blood sugar, take medications as directed, maintain healthy diet, exercise regularly' },
              { condition: 'High Blood Pressure', icon: '❤️', tips: 'Regular monitoring, low-sodium diet, stress management, consistent medication' },
              { condition: 'Asthma', icon: '🫁', tips: 'Avoid triggers, use inhaler correctly, track symptoms, keep rescue inhaler handy' },
              { condition: 'Allergies', icon: '🤧', tips: 'Identify triggers, preventive medications, keep windows closed, wash bedding weekly' },
              { condition: 'Arthritis', icon: '🦴', tips: 'Stay active, manage weight, use hot/cold therapy, take medications regularly' },
              { condition: 'Cholesterol', icon: '💓', tips: 'Heart-healthy diet, regular exercise, medication compliance, regular check-ups' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{item.condition}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.tips}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white">
        <div className="section py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Health Questions?</h2>
          <p className="text-xl text-white/90 mb-8">
            Our licensed pharmacists are here to help with free consultations
          </p>
          <a
            href="tel:7185262300"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[color:var(--primary)] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            📞 Call Us: 718-526-2300
          </a>
        </div>
      </section>
    </>
  )
}