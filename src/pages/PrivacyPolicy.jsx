import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - LUZORION"
        description="Privacy policy for LUZORION healthcare IT services. Learn how we collect, use, and protect your personal information."
      />
      
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to <strong>LUZORION</strong> ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit{' '}
              <a href="https://www.luzorion.com" className="text-[#8FA63A] hover:underline">www.luzorion.com</a> (the "Website"). Please read this notice carefully to understand how we handle your personal and professional data.
            </p>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This privacy notice discloses the practices of <strong>LUZORION</strong> regarding data collected through this website. It applies solely to information gathered online and will inform you about:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>What personally identifiable information is collected from you and how it is used.</li>
                <li>With whom your data may be shared.</li>
                <li>The choices available to you regarding the use of your information.</li>
                <li>The security procedures we use to protect your data.</li>
                <li>How you can correct or update any information.</li>
              </ul>
            </section>

            {/* Information Collection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection, Use, and Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information in two ways: directly from you and automatically through website analytics tools.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information you provide directly:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you contact us, request a consultation, download resources, or fill out forms, we may collect personal details such as your name, email address, phone number, organization name, and role. We use this information to respond to your inquiries, provide requested services, and improve our offerings.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are the sole owners of the data collected on this site. We only access information you voluntarily provide via email or forms, and we do not sell or rent this data to anyone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will not share your information with any third party outside our organization except when necessary to fulfill a request (for example, to process a service engagement or send materials). Any vendors or partners who access this information are required to adhere to <strong>LUZORION's</strong> data security and confidentiality standards.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Note:</strong> We do not share mobile numbers or messaging data with affiliates or third parties for marketing purposes.
              </p>
            </section>

            {/* Healthcare IT and HIPAA */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthcare IT and EHR/EMR Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                LUZORION provides Electronic Medical Record (EMR) and Electronic Health Record (EHR) implementation, optimization, and training services. In delivering these services, we may handle client data that falls under the protection of the <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When acting as a <strong>Business Associate</strong> under HIPAA, LUZORION strictly follows all applicable federal laws and client agreements to safeguard Protected Health Information (PHI).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Personal data collected through this website (e.g., contact forms) is <strong>not subject to HIPAA</strong>, and this Privacy Policy governs such information.
              </p>
            </section>

            {/* Cookies and Analytics */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Website Analytics</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Like most modern websites, LUZORION uses cookies, log files, and tracking technologies to improve your browsing experience. These tools help us analyze website usage, remember user preferences, and enhance functionality.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can manage cookie preferences in your browser settings. Disabling cookies may limit some features of our site.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use anonymized, aggregated data from cookies to monitor traffic, performance, and usage trends without identifying specific visitors.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services and Advertising</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may use third-party analytics tools and online advertising networks to display relevant content or ads. These third parties may collect data through cookies or similar technologies. You can opt out by adjusting your browser settings or through third-party opt-out tools.
              </p>
            </section>

            {/* User Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Access to and Control Over Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may opt out of future communications at any time. You can also:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Request to see what data we have about you.</li>
                <li>Correct or update your information.</li>
                <li>Request deletion of your data.</li>
                <li>Express concerns about our data practices.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:luzorionhealth@gmail.com" className="text-[#8FA63A] hover:underline">luzorionhealth@gmail.com</a> or{' '}
                <a href="tel:+13174576497" className="text-[#8FA63A] hover:underline">+1 (317) 457-6497</a>.
              </p>
            </section>

            {/* Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take data security seriously. Your information is protected both online and offline.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sensitive data (such as financial information) is encrypted during transmission using SSL (Secure Socket Layer) technology. Only authorized employees who need access to perform specific functions (e.g., client support, billing) can access personally identifiable information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our servers are maintained in a secure environment with industry-standard safeguards.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you believe we are not abiding by this policy, please contact us immediately at{' '}
                <a href="mailto:luzorionhealth@gmail.com" className="text-[#8FA63A] hover:underline">luzorionhealth@gmail.com</a>.
              </p>
            </section>

            {/* Registration and Forms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration and Forms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use certain parts of our website, you may be asked to complete a registration or contact form. This may include basic contact details such as your name and email. Additional optional fields may help us tailor responses based on your organization type, specialty, or project requirements.
              </p>
            </section>

            {/* Surveys and Feedback */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Surveys and Feedback</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                From time to time, we may request feedback through surveys or polls. Participation is completely voluntary. The collected data is used solely to improve our website, services, and client experience.
              </p>
            </section>

            {/* Links to Other Websites */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Links to Other Websites</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party sites. LUZORION is not responsible for the content or privacy practices of those websites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As part of our global operations, your information may be transferred to our offices or service providers in other countries. By using our site, you consent to such transfers, provided that data protection standards are upheld to meet or exceed those required by law.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are intended for professionals and organizations, not for children under 13. We do not knowingly collect personal information from minors.
              </p>
            </section>

            {/* Anonymized and Aggregated Data */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Anonymized and Aggregated Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use de-identified and aggregated information for research, analytics, or service improvement. Such data will never identify an individual or organization.
              </p>
            </section>

            {/* Business Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business. The new entity will be bound by this Privacy Policy or an updated version with equivalent protection standards.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                LUZORION may update this Privacy Policy from time to time. Significant changes will be announced via email, website notification, or banner alerts. Continued use of our site after such updates constitutes acceptance of the revised policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
