export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 border-b">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
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
              event listing and management platform. This Privacy Policy explains 
              how we collect, use, and protect your information when you use 
              our platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect personal information such as name, email address, 
              organization details, and event participation data when you register 
              for events or interact with the platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              3. How We Use Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use your information to manage events, communicate updates, 
              improve platform experience, and provide support.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              4. Event Registration Data
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When you register for events, your information may be shared 
              with event organizers for communication and event management.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              5. Cookies & Analytics
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may use cookies and analytics tools to improve platform 
              performance and user experience.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              6. Data Protection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your 
              personal information from unauthorized access.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              7. Third Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our platform may integrate with third-party services such as 
              payment gateways, analytics providers, and communication tools.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              8. User Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Users may request access, update, or deletion of their personal 
              information by contacting us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              9. Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain data only as long as necessary for platform functionality 
              and legal compliance.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              10. Children's Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our platform is not intended for children under 13 years of age.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              11. Changes to Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this policy from time to time. Continued use of 
              the platform means acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary-600 mb-3">
              12. Contact Information
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