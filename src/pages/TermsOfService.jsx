import React from 'react';
import SEO from '../components/SEO';

const TermsOfService = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - LUZORION"
        description="Terms of service for LUZORION healthcare IT services. Read our terms and conditions for using our services."
      />
      
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to <strong>LUZORION</strong>. These Terms of Service ("Terms") govern your access to and use of our website, services, and solutions. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            {/* Acceptance of Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the LUZORION website and services, you accept and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            {/* Use of Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are intended for healthcare professionals, organizations, and businesses. You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Transmit any viruses, malware, or other harmful code</li>
                <li>Use our services to transmit spam or unsolicited communications</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, features, and functionality on our website, including but not limited to text, graphics, logos, images, and software, are the exclusive property of LUZORION and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
              </p>
            </section>

            {/* Service Agreements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Agreements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Specific services provided by LUZORION may be subject to additional terms and conditions as outlined in separate service agreements. In the event of a conflict between these Terms and a service agreement, the service agreement shall prevail.
              </p>
            </section>

            {/* HIPAA Compliance */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. HIPAA Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When LUZORION acts as a Business Associate under HIPAA, we will enter into a separate Business Associate Agreement (BAA) with our clients. Protected Health Information (PHI) will be handled in accordance with HIPAA regulations and the terms of the BAA.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, LUZORION shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Any content obtained from our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            {/* Disclaimer of Warranties */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. LUZORION does not warrant that our services will be uninterrupted, secure, or error-free.
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless LUZORION and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of our services or your violation of these Terms.
              </p>
            </section>

            {/* Modifications to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                LUZORION reserves the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Indiana, without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising out of or relating to these Terms or our services shall be resolved through good faith negotiation. If a resolution cannot be reached, disputes may be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            {/* Severability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Severability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:luzorionhealth@gmail.com" className="text-[#8FA63A] hover:underline">luzorionhealth@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+13174576497" className="text-[#8FA63A] hover:underline">+1 (317) 457-6497</a></p>
                <p><strong>Address:</strong></p>
                <p className="pl-4">India: TGIIC Layout Hyderabad 500081</p>
                <p className="pl-4">USA: Fort Wayne, Indiana, Zipcode: 46835</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
