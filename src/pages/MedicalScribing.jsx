import React from 'react';
import SEO from '@/components/SEO';
import { 
  FaUserMd, 
  FaChartLine, 
  FaShieldAlt, 
  FaHandHoldingMedical,
  FaCog,
  FaGraduationCap,
  FaRocket,
  FaCheck
} from 'react-icons/fa';

export default function MedicalScribing() {
  return (
    <div className="bg-white">
      <SEO 
        title="Medical Scribing Services — LUZORION Healthcare"
        description="AI-powered, HIPAA-compliant virtual medical scribing that enhances clinical documentation and workflow efficiency. Reduce physician burnout and improve patient care with our advanced scribing solutions."
        keywords="medical scribing, virtual scribing, clinical documentation, physician scribing, healthcare documentation, HIPAA compliant scribing, EHR scribing, reduce physician burnout"
        type="article"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0F7E9] to-white py-28 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F0F7E9] text-[#8FA63A] text-sm font-medium mb-6">
            <FaHandHoldingMedical className="mr-2" />
            Transforming Healthcare Documentation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Advanced Medical Scribing <span className="text-[#8FA63A]">Solutions</span> for Modern Practices
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Reduce documentation time by up to 40% with our AI-powered virtual scribing platform, designed to enhance accuracy and efficiency in clinical documentation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-[#8FA63A] hover:bg-[#7A8F32] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              Schedule a Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white border-2 border-[#8FA63A] text-[#8FA63A] font-semibold rounded-xl hover:bg-[#F0F7E9] transition-all flex items-center justify-center"
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    

      {/* Value Proposition */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Revolutionizing Healthcare Documentation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our AI-powered platform combines cutting-edge technology with human expertise to deliver accurate, efficient, and secure medical documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUserMd className="w-8 h-8 text-[#8FA63A]" />,
                title: "Provider-Centric",
                desc: "Designed by clinicians, for clinicians to reduce burnout and increase face-to-face time with patients."
              },
              {
                icon: <FaChartLine className="w-8 h-8 text-[#8FA63A]" />,
                title: "Efficiency Boost",
                desc: "Dramatically reduce documentation time while improving accuracy and completeness."
              },
              {
                icon: <FaShieldAlt className="w-8 h-8 text-[#8FA63A]" />,
                title: "Enterprise Security",
                desc: "HIPAA-compliant with enterprise-grade security protocols to protect sensitive patient data."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#F0F7E9] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Simple, Streamlined Process
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Get up and running quickly with our seamless onboarding and implementation process.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#8FA63A]/30 to-[#F0F7E9] -ml-px" />
            <div className="space-y-16">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  desc: "We learn about your practice's unique needs and documentation challenges.",
                  icon: <FaUserMd className="w-6 h-6" />
                },
                {
                  step: "2",
                  title: "Custom Setup",
                  desc: "Our team configures the platform to match your specialty and EMR workflow.",
                  icon: <FaCog className="w-6 h-6" />
                },
                {
                  step: "3",
                  title: "Training & Onboarding",
                  desc: "Comprehensive training for your team to ensure smooth adoption.",
                  icon: <FaGraduationCap className="w-6 h-6" />
                },
                {
                  step: "4",
                  title: "Go Live & Support",
                  desc: "Full support during launch and ongoing optimization.",
                  icon: <FaRocket className="w-6 h-6" />
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="relative flex flex-col lg:flex-row items-center group"
                >
                  <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 lg:text-right">
                    {i % 2 === 0 && (
                      <div className="lg:pr-12 transition-all duration-300 group-hover:translate-x-2">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F0F7E9] border-2 border-[#8FA63A]/30 text-[#8FA63A] text-lg font-bold mb-4 lg:ml-auto group-hover:bg-[#8FA63A]/10 group-hover:border-[#8FA63A]/50 transition-colors">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-1/2 lg:mr-[-1px] z-10 w-8 h-8 rounded-full bg-white border-4 border-[#8FA63A] flex items-center justify-center">
                    <span className="text-[#8FA63A] font-bold text-sm">{item.step}</span>
                  </div>

                  <div className="lg:w-1/2 lg:pl-16">
                    {i % 2 !== 0 && (
                      <div className="lg:pl-12 transition-all duration-300 group-hover:-translate-x-2">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F0F7E9] border-2 border-[#8FA63A]/30 text-[#8FA63A] text-lg font-bold mb-4 group-hover:bg-[#8FA63A]/10 group-hover:border-[#8FA63A]/50 transition-colors">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose LUZORION?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our comprehensive solution is designed to address the unique challenges of modern healthcare documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Reduced Burnout",
                desc: "Alleviate physician burnout by minimizing administrative burdens."
              },
              {
                title: "Increased Revenue",
                desc: "Maximize reimbursement with accurate, complete documentation."
              },
              {
                title: "Improved Accuracy",
                desc: "AI-assisted documentation reduces errors and improves quality."
              },
              {
                title: "Seamless Integration",
                desc: "Works with your existing EMR and practice management systems."
              },
              {
                title: "24/7 Support",
                desc: "Dedicated support team available around the clock."
              },
              {
                title: "Scalable Solution",
                desc: "Grows with your practice's needs and patient volume."
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#F0F7E9] text-[#8FA63A] flex items-center justify-center">
                    <FaCheck className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#8FA63A] to-[#7A8F32] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Join hundreds of healthcare providers who trust LUZORION for their medical documentation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-[#8FA63A] font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="/demo" 
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}