import React, { useState } from 'react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  FaStethoscope, 
  FaFileMedical, 
  FaFileInvoiceDollar, 
  FaChartLine, 
  FaChevronDown, 
  FaChevronUp,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa';

const services = [
  {
    icon: <FaStethoscope className="w-8 h-8" />,
    title: "Medical Scribing",
    description: "Live or asynchronous scribing to capture clinical encounters with precision and confidentiality.",
    details: "Real-time or after-visit scribing tailored to your specialty and EHR. Reduce late-night charting and capture complete histories, exams, and plans with consistency.",
    path: "/services/medical-scribing",
    features: [
      "Live virtual scribing or audio-based async support",
      "Standardized templates and physician preferences",
      "HIPAA-compliant, audited processes"
    ],
    accent: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FaFileMedical className="w-8 h-8" />,
    title: "Medical Coding",
    description: "Expert coding that maximizes revenue and reduces claim denials.",
    details: "Certified coders ensure compliant, accurate coding to maximize revenue and minimize denials, aligned to payer policies and documentation guidelines.",
    path: "/services/medical-coding",
    features: [
      "Specialty-aligned CPT/ICD-10/HCPCS expertise",
      "Pre- and post-bill audits, denial trend analysis",
      "Education feedback loops to providers"
    ],
    accent: "from-emerald-500 to-teal-500"
  },
  {
    icon: <FaFileInvoiceDollar className="w-8 h-8" />,
    title: "Medical Billing",
    description: "End-to-end billing solutions that speed collections and lower administrative burden.",
    details: "Full-cycle billing from charge entry to A/R follow-up with transparent reporting and KPI tracking so you stay in control of cash flow.",
    path: "/services/medical-billing",
    features: [
      "Claims scrubbing and clean submission",
      "Denial management and appeals",
      "Patient statements and support"
    ],
    accent: "from-violet-500 to-indigo-500"
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Healthcare Data Analytics",
    description: "Actionable insights from your clinical data to improve operations and outcomes.",
    details: "Turn raw clinical and financial data into actionable insights that improve operations, quality measures, and reimbursement.",
    path: "/services/healthcare-data-analytics",
    features: [
      "Dashboards for throughput, revenue, and quality",
      "Custom data pipelines and reports",
      "Operational recommendations and monitoring"
    ],
    accent: "from-amber-500 to-orange-500"
  }
];

export default function Services() {
  const [expandedCard, setExpandedCard] = useState(0);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-[color:var(--primary-light)] to-white">
      {/* Page SEO */}
      <SEO 
        title="LUZORION Healthcare Services — Medical Documentation Solutions" 
        description="LUZORION provides comprehensive medical scribing, coding, billing, and analytics services designed to streamline your practice and improve patient care. HIPAA compliant healthcare documentation solutions."
        keywords="LUZORION, medical services, healthcare documentation, medical scribing, medical coding, medical billing, healthcare analytics, HIPAA compliant services, RCM solutions"
      />
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[color:var(--primary)] mb-6 md:mb-8 leading-tight">
            Our Services
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[color:var(--primary)] mb-6 md:mb-8 leading-tight">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg sm:text-xl text-[color:var(--primary)]/80 font-medium leading-relaxed">
            Streamline your practice with our end-to-end medical support services
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 ${
                expandedCard === index 
                  ? 'shadow-2xl ring-2 ring-[color:var(--primary-light)] scale-[1.02]' 
                  : 'hover:shadow-xl hover:scale-[1.01]'
              }`}
            >
              <div 
                className="p-10 cursor-pointer group"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-6 md:space-x-8">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br ${service.accent} flex items-center justify-center text-white shadow-md`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-[color:var(--primary)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <button 
                    className="text-slate-400 hover:text-[color:var(--primary)] transition-colors"
                    aria-label={expandedCard === index ? "Collapse" : "Expand"}
                  >
                    {expandedCard === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              <div 
                className={`px-6 sm:px-10 overflow-hidden transition-all duration-700 ease-in-out ${
                  expandedCard === index ? 'max-h-[1200px] pb-10' : 'max-h-0'
                }`}
              >
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-slate-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                    {service.details}
                  </p>
                  <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.accent} text-white flex items-center justify-center mr-4 shadow-sm`}>
                          <FaCheck className="w-4 h-4" />
                        </div>
                        <span className="text-base sm:text-lg text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                    <Link 
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className={`px-6 py-4 sm:px-10 sm:py-5 bg-gradient-to-r ${service.accent} text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center text-base sm:text-lg`}
                    >
                      Get Started
                      <FaArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                    <Link 
                      to={service.path}
                      className="px-6 py-4 sm:px-10 sm:py-5 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors text-base sm:text-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 sm:mt-24 text-center bg-gradient-to-r from-[color:var(--primary-light)] to-[color:var(--primary)]/10 rounded-3xl p-8 sm:p-16 shadow-md">
          <p className="text-2xl sm:text-3xl font-bold text-[color:var(--primary)] mb-4 sm:mb-6">
            Need a custom solution? Our team is ready to help.
          </p>
          <p className="text-base sm:text-xl text-[color:var(--primary)]/80 mb-6 sm:mb-10 max-w-2xl mx-auto">
            Let's discuss how we can tailor our services to meet your specific needs and challenges.
          </p>
          <Link 
            to="/contact"
            className="px-6 py-4 sm:px-10 sm:py-5 bg-white border-2 border-[color:var(--primary)] text-[color:var(--primary)] rounded-xl font-semibold hover:bg-[color:var(--primary-light)]/30 transition-all shadow-sm hover:shadow-lg flex items-center mx-auto text-base sm:text-lg"
          >
            Contact Our Experts
            <FaArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
