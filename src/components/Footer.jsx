import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" alt="LUZORION logo" className="h-10 w-10 rounded" loading="lazy" />
              <span className="font-bold text-2xl text-white">LUZORION</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Transforming healthcare documentation with AI-powered solutions for medical scribing, coding, billing, and analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[color:var(--primary)] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[color:var(--primary)] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[color:var(--primary)] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-[color:var(--primary)] transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[color:var(--primary)] transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[color:var(--primary)] transition-colors duration-200">Services</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-[color:var(--primary)] transition-colors duration-200">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[color:var(--primary)] transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/medical-scribing" className="text-gray-300 hover:text-[color:var(--primary)] transition-colors duration-200">Medical Scribing</Link></li>
              <li><Link to="/services/medical-coding" className="text-gray-300 hover:text-[color:var(--primary)] transition-colors duration-200">Medical Coding</Link></li>
              <li><Link to="/services/medical-billing" className="text-gray-300 hover:text-[color:var(--primary)] transition-colors duration-200">Medical Billing</Link></li>
              <li><Link to="/services/healthcare-data-analytics" className="text-gray-300 hover:text-[color:var(--primary)] transition-colors duration-200">Healthcare Analytics</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[color:var(--primary)]/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[color:var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-300 text-sm">India: TGIIC Layout Hyderabad 500081</p>
                <p className="text-gray-300 text-sm">USA: Fort Wayne, Indiana, Zipcode: 46835</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[color:var(--primary)]/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[color:var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-300 text-sm">+1 (317) 457-6497</p>
                <p className="text-gray-300 text-sm">Mon-Fri, 9am-6pm EST</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[color:var(--primary)]/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[color:var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-300 text-sm">luzorionhealth@gmail.com</p>
                <p className="text-gray-300 text-sm">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} LUZORION. All rights reserved. <span className="inline-block ml-2">DESIGNED AND DEVELOPED BY <a href="https://www.vikrin.com/" target="_blank" rel="noopener noreferrer" className="text-[color:var(--primary)] hover:underline">Vikrin</a></span></p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-[color:var(--primary)] text-sm transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-[color:var(--primary)] text-sm transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}