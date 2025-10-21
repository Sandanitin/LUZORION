import React from 'react'
import SEO from '@/components/SEO'

export default function Resources() {
  const phases = [
    { title: 'Strategy', body: 'Align stakeholders, define scope, success metrics, and governance for an achievable roadmap.' },
    { title: 'Pre‑Planning', body: 'Environment readiness, data sources, integration points, risk register, and resource plans.' },
    { title: 'Workflow Assessment', body: 'Shadow clinicians, map current vs. future state, standardize order sets, notes, and handoffs.' },
    { title: 'System Build', body: 'Configure templates, dictionaries, roles, security, interfaces, and decision support content.' },
    { title: 'Testing & QA', body: 'Unit, integration, and UAT across clinical and revenue cycles with defect triage and sign‑off.' },
    { title: 'Training & Activation', body: 'Role‑based training, command‑center support, cutover plan, and go‑live readiness checks.' },
    { title: 'Post Go‑Live Monitoring', body: 'Stabilization with hypercare, issue resolution, KPI tracking, and feedback loops.' },
    { title: 'Optimization', body: 'Optimize your system to fit your needs. Maximize efficiency and ensure you are getting the most out of your EHR.' }
  ]

  const faqItems = [
    {
      question: 'Do you support multiple EHR vendors?',
      answer: 'Yes. Our team has experience with leading EHRs including Epic Systems, Cerner (Oracle Health), MEDITECH, Allscripts (Veradigm), eClinicalWorks, NextGen, Athenahealth, Greenway Health, Kareo, Practice Fusion, and AdvancedMD. We adapt to your vendor stack and governance.'
    },
    {
      question: 'How do you measure success?',
      answer: 'We baseline KPIs before go‑live and track chart closure time, coding accuracy, claims denials, and throughput post go‑live. Our focus is on measurable outcomes including reduced chart closure time, improved coding accuracy, lower denials, and increased provider productivity.'
    },
    {
      question: 'Can you train providers remotely?',
      answer: 'Absolutely. We deliver role‑based, remote or on‑site training with super‑user enablement. Our scalable training programs are designed for both on‑site and remote delivery, including simulation & mock go-lives to prepare your team for a seamless transition.'
    },
    {
      question: 'What is your experience with EHR implementations?',
      answer: 'LUZORION has been providing EMR implementation and training support since 2023 with experience in both short and long‑term project plans. Our healthcare-centric team has experience across hospitals, clinics, and ambulatory care settings with both clinical and revenue-cycle workflows.'
    },
    {
      question: 'What training programs do you offer?',
      answer: 'We offer system-specific training for major EHR platforms, role-based learning for clinicians and staff, simulation & mock go-lives, super-user development, and post-training support with ongoing refresher sessions and feedback loops to maintain high adoption rates.'
    },
    {
      question: 'How do you handle data migration and integration?',
      answer: 'We ensure seamless interoperability between EHRs, billing, and ancillary systems (ADT, HL7, FHIR, lab, pharmacy, imaging). Our team handles data migration scope and validation, working with realistic data to ensure accuracy and compliance.'
    },
    {
      question: 'What are your engagement models?',
      answer: 'We offer flexible engagement models — from short-term implementations to managed EHR optimization services. We partner with you to ensure a seamless transition from strategy through activation and optimization.'
    },
    {
      question: 'How do you ensure compliance with healthcare regulations?',
      answer: 'Our implementations consistently align with HIPAA, HITECH, and CMS regulatory requirements. We conduct security role mapping and HIPAA risk assessments as part of our comprehensive implementation checklist.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Resources — LUZORION" description="Guides and best practices for EMR/EHR implementation, training, and optimization." />

      {/* Hero */}
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-[color:var(--primary)]/20 to-[color:var(--accent)]/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-[color:var(--accent)]/20 to-[color:var(--primary)]/20 blur-3xl"></div>
        </div>
        <div className="section">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
                EMR/EHR <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">Application</span>
              </h1>
              <div className="p-6 sm:p-8 rounded-2xl ring-1 ring-slate-200 bg-white/80 backdrop-blur">
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                  <span className="font-semibold text-[color:var(--primary)]">LUZORION</span> has been providing EMR implementation and training support since <span className="font-semibold">2023</span> with experience in both short and long‑term project plans. Our experienced healthcare IT professionals have built careers on successful EHR deployments across diverse care settings. We provide end‑to‑end planning and implementation services to guide you through strategy, planning, workflow assessment, build, activation, and post go‑live monitoring. Our experience translates to lessons learned and practical solutions. We collaborate closely, learn your needs, and integrate our product knowledge to achieve your expected results.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Strategy', 'Workflow', 'Build', 'Training', 'Go‑Live', 'Optimization'].map((chip) => (
                    <span key={chip} className="px-3 py-1 rounded-full text-sm font-medium bg-[color:var(--primary)]/10 text-[color:var(--primary)] border border-[color:var(--primary)]/20">{chip}</span>
                  ))}
                </div>
              </div>
            
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[color:var(--primary)]/15 to-[color:var(--accent)]/15 rounded-2xl blur-xl"></div>
                <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-white to-slate-50 ring-1 ring-slate-200 p-6 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {['Strategy','Pre‑Planning','Workflow','Build','Testing & QA','Training & Activation','Post Go‑Live','Optimization'].map((t,i)=>(
                      <div key={i} className="p-3 rounded-xl bg-white ring-1 ring-slate-200 text-sm text-slate-700">{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="section">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {phases.map((p, i) => (
              <article key={i} className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      

      {/* Supported Platforms */}
      <section className="py-12 bg-[color:var(--neutral)]">
        <div className="section">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Supported EHR/EMR Platforms</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Epic Systems', 'Cerner (Oracle Health)', 'MEDITECH', 'Allscripts (Veradigm)', 
              'eClinicalWorks', 'NextGen', 'Athenahealth', 'Greenway Health', 
              'Kareo', 'Practice Fusion', 'AdvancedMD'
            ].map((platform, index) => (
              <div key={index} className="p-4 rounded-xl bg-white border border-slate-200 text-center text-sm font-medium text-slate-700 hover:shadow-md transition-shadow">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Wins & Checklist */}
      <section className="py-12 bg-white">
        <div className="section grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick wins for a successful EHR go‑live</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[color:var(--primary)]"></span> Standardize note templates and order sets before build freeze.</li>
              <li className="flex gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[color:var(--primary)]"></span> Identify super users and backfill their schedules for go‑live.</li>
              <li className="flex gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[color:var(--primary)]"></span> Dry‑run integrations (ADT, orders, charges) with realistic data.</li>
              <li className="flex gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[color:var(--primary)]"></span> Track 10–12 KPIs: chart closure time, coding accuracy, denials, charges/day.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Implementation checklist</h3>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700">
              <li>Stakeholder matrix and governance charter approved</li>
              <li>Data migration scope and validation plan finalized</li>
              <li>Security roles mapped; HIPAA risk assessment complete</li>
              <li>Training catalog and schedules published</li>
              <li>Cutover plan, command‑center staffing, escalation paths</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Training & Development */}
      <section className="py-12 bg-[color:var(--neutral)]">
        <div className="section">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Training & Development</h2>
            <p className="text-slate-700 max-w-3xl mx-auto">
              LUZORION's Training & Development Division equips healthcare professionals with the skills and confidence needed to use their EHR systems efficiently and accurately. Whether your team is preparing for a new system implementation, version upgrade, or optimization phase, we offer structured training that ensures long-term success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'System-Specific Training',
                description: 'Tailored sessions for Epic, Cerner, MEDITECH, Allscripts, Athenahealth, eClinicalWorks, and other leading systems.'
              },
              {
                title: 'Role-Based Learning',
                description: 'Dedicated learning paths for clinicians, nurses, medical coders, front-desk staff, and administrators.'
              },
              {
                title: 'Simulation & Mock Go-Lives',
                description: 'Real-world scenario training to prepare your team for a seamless transition on go-live day.'
              },
              {
                title: 'Super-User Development',
                description: 'Identifying and empowering key team members to act as internal EHR champions.'
              },
              {
                title: 'Post-Training Support',
                description: 'Ongoing refresher sessions, video guides, and feedback loops to maintain high adoption rates.'
              },
              {
                title: 'Benefits of Training',
                description: 'Faster EHR adoption, improved documentation accuracy, reduced downtime, and stronger compliance.'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="section max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqItems.map((faq, i) => (
              <details key={i} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold">
                  {faq.question}
                  <svg className="ml-4 h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p className="mt-3 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white">
        <div className="section text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Need help planning your EHR project?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">Talk to our experts about strategy, build, training, and optimization tailored to your workflows.</p>
          <a href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-[color:var(--primary)] rounded-xl font-semibold hover:bg-slate-50 transition">Contact Us</a>
        </div>
      </section>
    </div>
  )
}