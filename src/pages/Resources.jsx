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

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Resources — LUZORION" description="Guides and best practices for EMR/EHR implementation, training, and optimization." />

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

      {/* Quick Wins & Checklist */}
      <section className="py-12 bg-[color:var(--neutral)]">
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

      {/* EMR/EHR Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Implementation Services */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">EMR Implementation</h3>
              <p className="text-gray-600 mb-6">
                End-to-end electronic medical records system implementation with customized clinical workflows.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  System selection & configuration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Clinical workflow design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Data migration & conversion
                </li>
              </ul>
            </div>

            {/* Integration Services */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Integration</h3>
              <p className="text-gray-600 mb-6">
                Seamless integration with existing healthcare systems and third-party applications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  HL7 & FHIR integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Lab & pharmacy systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Practice management systems
                </li>
              </ul>
            </div>

            {/* Training & Support */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Training & Support</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive training programs and ongoing support for clinical and administrative staff.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Clinical staff training
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Physician super-users
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  24/7 technical support
                </li>
              </ul>
            </div>

            {/* Customization */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customization</h3>
              <p className="text-gray-600 mb-6">
                Tailored EMR solutions to match your specialty-specific requirements and workflows.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Specialty templates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Custom reports & dashboards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Workflow automation
                </li>
              </ul>
            </div>

            {/* Compliance & Security */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>
              <p className="text-gray-600 mb-6">
                Ensure HIPAA compliance and robust data security for your patient health information.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  HIPAA compliance audit
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Data encryption
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Access controls & audit trails
                </li>
              </ul>
            </div>

            {/* Optimization */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Optimization</h3>
              <p className="text-gray-600 mb-6">
                Continuous improvement and optimization of your EMR system for peak performance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Performance monitoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Workflow efficiency analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  System upgrades & patches
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-[color:var(--neutral)]">
        <div className="section max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">FAQ</h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {[
              ['Do you support multiple EHR vendors?', 'Yes. Our team has experience with leading EHRs and ancillary systems. We adapt to your vendor stack and governance.'],
              ['How do you measure success?', 'We baseline KPIs before go‑live and track chart closure time, coding accuracy, claims denials, and throughput post go‑live.'],
              ['Can you train providers remotely?', 'Absolutely. We deliver role‑based, remote or on‑site training with super‑user enablement.']
            ].map((qa, i) => (
              <details key={i} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold">
                  {qa[0]}
                  <svg className="ml-4 h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p className="mt-3 text-slate-700">{qa[1]}</p>
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