export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 border-b">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="prose prose-gray max-w-none">

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              DevRhylme is a Section 8 registered organization that operates an 
              event listing and management platform. These Terms and Conditions 
              govern your use of our website, services, and platform. By accessing 
              or using DevRhylme, you agree to comply with these terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              2. Platform Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              DevRhylme provides a platform for discovering, hosting, and managing 
              events including hackathons, workshops, conferences, and community 
              programs. Users may browse events, register, and organizers may 
              create and manage event listings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              3. User Eligibility
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By using this platform, you confirm that you are legally capable 
              of entering into binding agreements. You agree to provide accurate 
              information when registering for events.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              4. Event Listings
            </h2>
            <p className="text-gray-600 leading-relaxed">
              DevRhylme acts as a platform provider. Event organizers are solely 
              responsible for event details, communication, execution, and 
              compliance. DevRhylme is not responsible for third-party event 
              cancellations or changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              5. Organizer Responsibilities
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Organizers must ensure accuracy of event information, maintain 
              communication with participants, and comply with applicable laws. 
              Misleading or fraudulent events may be removed.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              6. User Conduct
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Users agree not to misuse the platform, including posting spam, 
              false events, illegal content, or harmful behavior. DevRhylme 
              reserves the right to remove content or suspend accounts.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              7. Payments & Pricing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Some features may require payment. Pricing plans may change at any 
              time. Payments are non-refundable unless otherwise stated.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              8. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content, branding, and platform design belong to DevRhylme. 
              Users may not copy, distribute, or reuse content without permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              9. Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of the platform is also governed by our Privacy Policy. 
              We collect limited information required for event participation 
              and platform functionality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              DevRhylme shall not be liable for any damages resulting from 
              participation in events or use of the platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              11. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend accounts violating these terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              12. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              DevRhylme may update these terms at any time. Continued use 
              of the platform indicates acceptance of updated terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              13. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These terms shall be governed by applicable laws. Any disputes 
              shall be resolved under jurisdiction applicable to the organization.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              14. Contact
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="font-semibold text-gray-900">
                DevRhylme Foundation
              </p>
              <p className="text-gray-600">
                Section 8 Registered Organization
              </p>
              <p className="text-gray-600">
                Email: hello@devrhylme.org
              </p>
            </div>

          </section>

        </div>
      </div>
    </div>
  );
}