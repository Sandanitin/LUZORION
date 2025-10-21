import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function Home() {
  return (
    <>
      <SEO title="LUZORION — Medical documentation that works for your practice." description="Accurate scribing, coding, and billing services that free clinicians to focus on patients — delivered securely and on time." />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary)]/5 via-transparent to-[color:var(--accent)]/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[color:var(--primary)]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[color:var(--accent)]/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="bg-transparent">
          <div className="section section-y grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-sm font-medium text-slate-700">
                {/* <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> */}
                {/* Healthcare · HIPAA Compliant */}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Medical documentation that works for your{' '}
                <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">
                  practice
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Accurate scribing, coding, and billing services that free clinicians to focus on patients — delivered securely and on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Removed 'Get a Quote' CTA per request */}
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[color:var(--primary)]/20 to-[color:var(--accent)]/20 rounded-2xl blur-xl"></div>
                <img
  src="/images/4b9a7b8ab18ba1ced90d9fa6a0172833.jpg"
  alt="Modern healthcare team with digital technology and medical documentation"
  className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-slate-200"
  fetchpriority="high"
  decoding="async"
  width="1600"
  height="1200"
  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1600&auto=format&fit=crop'; }}
/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-y border-slate-200">
        <div className="section py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="relative mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=200&auto=format&fit=crop" 
                    alt="Happy healthcare clients"
                    className="w-12 h-12 rounded-full object-cover mx-auto border-2 border-[color:var(--primary)]/20"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <p className="text-3xl font-bold text-slate-900">100+</p>
                <p className="text-sm text-slate-600 font-medium">Happy Clients</p>
              </div>
            </div>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-50 mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="text-3xl font-bold text-slate-900">98%</p>
                <p className="text-sm text-slate-600 font-medium">Accuracy Rate</p>
              </div>
            </div>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="text-3xl font-bold text-slate-900">24/7</p>
                <p className="text-sm text-slate-600 font-medium">Support</p>
              </div>
            </div>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <p className="text-3xl font-bold text-slate-900">HIPAA</p>
                <p className="text-sm text-slate-600 font-medium">Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section section-y">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive healthcare documentation solutions designed to streamline your practice and improve patient care.</p>
            <Link to="/services" className="inline-flex items-center mt-6 text-[color:var(--primary)] hover:text-[color:var(--primary-hover)] font-semibold">
              View all services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Medical Scribing',
                body: 'Well-trained, remote medical scribes provide real-time clinical documentation with quick turnaround and precision.',
                href: '/services/medical-scribing',
                icon: '📝',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Medical Coding',
                body: 'Dedicated, certified medical coders assign the right codes to each diagnosis and treatment to reduce errors and optimize revenue.',
                href: '/services/medical-coding',
                icon: '🔢',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Medical Billing',
                body: 'End-to-end Revenue Cycle Management (RCM) to help healthcare providers optimize collections and reduce administrative burden.',
                href: '/services/medical-billing',
                icon: '💰',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Healthcare Data Analytics',
                body: 'Advanced analytics and reporting solutions to help healthcare organizations make data-driven decisions and improve outcomes.',
                href: '/services/healthcare-data-analytics',
                icon: '📊',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((card, idx) => (
              <Link key={idx} to={card.href} className="group relative">
                <div className="relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-bl-2xl rounded-tr-2xl"></div>
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} text-white text-2xl mb-6 shadow-lg`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[color:var(--primary)] transition-colors duration-200">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{card.body}</p>
                    <div className="flex items-center text-[color:var(--primary)] font-semibold group-hover:translate-x-1 transition-transform duration-200">
                      Learn more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="section section-y">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our streamlined process ensures seamless integration with your practice and maximum efficiency.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[color:var(--primary)] via-[color:var(--accent)] to-[color:var(--primary)] transform -translate-y-1/2"></div>
            <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
              {[
                { 
                  title: 'Discover', 
                  body: 'We learn your workflows, EHR, and goals.',
                  icon: '🔍',
                  color: 'from-blue-500 to-blue-600'
                },
                { 
                  title: 'Deploy', 
                  body: 'We onboard securely and align on SLAs.',
                  icon: '🚀',
                  color: 'from-green-500 to-green-600'
                },
                { 
                  title: 'Deliver', 
                  body: 'Consistent turnaround with quality checks.',
                  icon: '✅',
                  color: 'from-purple-500 to-purple-600'
                }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="relative p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-xl font-bold shadow-lg`}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="text-center mb-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[color:var(--primary)]/10 text-[color:var(--primary)] font-bold text-sm">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{step.title}</h3>
                      <p className="text-slate-600 text-center leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features alternating */}
      <section className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section section-y">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why choose LUZORION</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">We deliver measurable results that transform your practice operations.</p>
          </div>
          <div className="space-y-20">
            {[
              {
                title: 'Reduce charting time',
                body: 'Our team captures the encounter so clinicians can close charts faster and see more patients.',
                img: '/images/45d81e1fbb574e26971763052abdc99c.jpg',
                alt: 'Medical professional using tablet for patient documentation',
                icon: '⏱️',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Improve revenue integrity',
                body: 'Accurate coding and clean claims help maximize collections with fewer denials.',
                img: '/images/2037599facb6c9af343ed4bc36dcf993.jpg',
                alt: 'Healthcare analytics dashboard showing revenue metrics and data visualization',
                icon: '📈',
                color: 'from-green-500 to-green-600'
              }
            ].map((f, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[color:var(--primary)]/10 to-[color:var(--accent)]/10 rounded-2xl blur-xl"></div>
                    <img
                      src={f.img}
                      srcSet={f.img.startsWith('http') ? `${f.img}&w=800 800w, ${f.img}&w=1200 1200w, ${f.img}&w=1600 1600w` : undefined}
                      sizes={f.img.startsWith('http') ? "(min-width: 1024px) 48vw, 100vw" : undefined}
                      alt={f.alt}
                      className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-slate-200"
                      loading="lazy"
                      decoding="async"
                      width="1400"
                      height="1050"
                      onError={(e) => { e.currentTarget.src = '/images/feature-1.svg'; e.currentTarget.srcset = ''; }}
                    />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="max-w-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[color:var(--primary)]/10 to-[color:var(--accent)]/10 mb-6">
                      <span className="text-3xl">{f.icon}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{f.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">{f.body}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to="/services/medical-scribing" 
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
                      >
                        Explore Scribing
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </Link>
                      <Link 
                        to="/services/medical-coding" 
                        className="inline-flex items-center px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-all duration-200"
                      >
                        Explore Coding
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials removed per request */}

      {/* Resources teaser + subscribe */}
      <section className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section section-y">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Resources & Insights</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Stay updated with the latest healthcare documentation trends and best practices.</p>
            <Link to="/resources" className="inline-flex items-center mt-6 text-[color:var(--primary)] hover:text-[color:var(--primary-hover)] font-semibold">
              View all resources
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Medical Coding Best Practices 2024",
                summary: "Essential guidelines for accurate medical coding to maximize revenue and minimize denials.",
                category: "Coding",
                readTime: "5 min read",
                image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "HIPAA Compliance in Virtual Healthcare",
                summary: "Comprehensive guide to maintaining patient privacy in digital healthcare environments.",
                category: "Compliance",
                readTime: "8 min read",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Streamlining Practice Workflows",
                summary: "How to optimize your practice operations for better patient care and efficiency.",
                category: "Workflow",
                readTime: "6 min read",
                image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop"
              }
            ].map((resource, i) => (
              <article key={i} className="group bg-white rounded-2xl border border-slate-200 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={resource.image}
                    alt={`${resource.title} - Healthcare documentation and medical services`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[color:var(--primary)]/90 text-white text-xs font-semibold rounded-full">
                      {resource.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[color:var(--primary)]/10 text-[color:var(--primary)] text-xs font-semibold rounded-full">
                      {resource.category}
                    </span>
                    <span className="text-sm text-slate-500">{resource.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[color:var(--primary)] transition-colors duration-200">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{resource.summary}</p>
                  <Link to="/resources" className="inline-flex items-center text-[color:var(--primary)] font-semibold group-hover:translate-x-1 transition-transform duration-200">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">Get the latest insights on healthcare documentation, coding updates, and practice management tips delivered to your inbox.</p>
            <form className="max-w-md mx-auto flex gap-3" aria-label="Subscribe to newsletter">
              <input 
                type="email" 
                required 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-xl border-0 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-white/50" 
                aria-label="Email address" 
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-[color:var(--primary)] font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1920&auto=format&fit=crop"
            alt="Healthcare professionals working with technology"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary)]/30 to-[color:var(--accent)]/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[color:var(--primary)]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[color:var(--accent)]/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative section py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to transform your practice?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Request a free consultation and discover how LUZORION can streamline your documentation, improve accuracy, and boost your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}


