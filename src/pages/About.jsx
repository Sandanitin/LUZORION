import React from "react";
import SEO from "@/components/SEO";
import { FaShieldAlt, FaUserMd, FaClipboardCheck } from "react-icons/fa";

export default function About() {
  return (
    <>
      <SEO
        title="About — LUZORION"
        description="We help practices streamline documentation and revenue cycle with secure, reliable services."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)] text-white overflow-hidden py-20">
        <div className="section relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              About Us
            </h1>
       <p className="mt-4 text-lg text-white/90 leading-relaxed transition-all duration-500 hover:text-white hover:scale-[1.01]">
  <span className="font-medium text-white">Luzorion</span> unites expert clinical scribes, certified medical coders,
  and billing specialists to streamline documentation and revenue
  cycle management. We empower physicians and care teams to focus on
   exceptional patient care
</p>

          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="section">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white mb-6">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[color:var(--primary)] mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-[color:var(--primary)]/80 max-w-3xl mx-auto leading-relaxed">
              Empower clinicians with reliable documentation and revenue
              services that reduce burnout, improve cash flow, and elevate the
              patient experience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "100+", label: "Healthcare clients" },
              { value: "98%", label: "Accuracy across services" },
              { value: "24/7", label: "Support coverage" },
              { value: "3-5x", label: "Faster chart closure" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <p className="text-4xl font-bold text-[color:var(--primary)] mb-2">
                  {stat.value}
                </p>
                <p className="text-[color:var(--primary)]/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="section">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[color:var(--primary)] mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-[color:var(--primary)]/80">
              We're committed to delivering exceptional service with a focus on
              quality and security.
            </p>
          </div>
          {/* Leadership / Who We Are */}
          <div className="max-w-5xl mx-auto mb-16">
  <div className="text-center mb-12">
    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Who We Are
    </h3>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Meet our leadership team dedicated to excellence and innovation
    </p>
  </div>
  
  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <li className="group p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
      <div className="flex flex-col text-center">
        <div className="mb-6 pb-6 border-b border-gray-100">
          <p className="font-bold text-xl text-gray-900 mb-2">
            Thammi Babu Chattu
          </p>
          <p className="text-blue-600 font-medium mb-2">CPC, CCS</p>
          <p className="text-gray-600">CEO and Founder</p>
        </div>
        <div className="flex space-x-3 justify-center">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <i className="fab fa-linkedin-in text-sm"></i>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <i className="far fa-envelope text-sm"></i>
          </button>
        </div>
      </div>
    </li>
    
    <li className="group p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
      <div className="flex flex-col text-center">
        <div className="mb-6 pb-6 border-b border-gray-100">
          <p className="font-bold text-xl text-gray-900 mb-2">
            Anil Thippireddy
          </p>
          <p className="text-blue-600 font-medium mb-2">CPC</p>
          <p className="text-gray-600">Co-founder and Coding Manager</p>
        </div>
        <div className="flex space-x-3 justify-center">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <i className="fab fa-linkedin-in text-sm"></i>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <i className="far fa-envelope text-sm"></i>
          </button>
        </div>
      </div>
    </li>
    
    <li className="group p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
      <div className="flex flex-col text-center">
        <div className="mb-6 pb-6 border-b border-gray-100">
          <p className="font-bold text-xl text-gray-900 mb-2">
            Burlakunta Kiran Kumar
          </p>
          <p className="text-blue-600 font-medium mb-2">Director</p>
          <p className="text-gray-600">Director Of Client Services</p>
        </div>
        <div className="flex space-x-3 justify-center">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <i className="fab fa-linkedin-in text-sm"></i>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <i className="far fa-envelope text-sm"></i>
          </button>
        </div>
      </div>
    </li>
  </ul>
</div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaShieldAlt className="w-8 h-8" />,
                title: "Security-First Operations",
                description:
                  "HIPAA safeguards and audited processes ensure your data is always protected.",
              },
              {
                icon: <FaUserMd className="w-8 h-8" />,
                title: "Clinically Fluent Teams",
                description:
                  "Our specialists are trained on your EHR workflows for seamless integration.",
              },
              {
                icon: <FaClipboardCheck className="w-8 h-8" />,
                title: "Proactive Communication",
                description:
                  "Clear SLAs and continuous QA ensure consistent, high-quality service.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-100 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[color:var(--primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[color:var(--primary)]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
