import SectionTitle from "../Common/SectionTitle";

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <SectionTitle
                title="Privacy Policy"
                paragraph="We are committed to safeguarding your personal information and handling your data with transparency, integrity, and care. This policy explains how we collect, use, and protect your information whenever you engage with our services."
                mb="44px"
                center
              />

              <div className="text-body-color text-base leading-relaxed font-medium max-w-3xl mx-auto space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">1. Information We Collect</h3>
                  <p>We collect personal information that you provide directly to us such as your name, email address, company name, and any other details shared via forms, emails, or service inquiries. We may also collect usage data through cookies and analytics tools to improve our service delivery.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">2. How We Use Your Data</h3>
                  <p>Your data is used to:</p>
                  <ul className="list-disc list-inside">
                    <li>Provide and maintain our services</li>
                    <li>Respond to your inquiries and support requests</li>
                    <li>Send updates or marketing communications (only if opted in)</li>
                    <li>Analyze usage trends and improve performance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">3. Data Protection and Security</h3>
                  <p>We use secure technologies and access controls to protect your personal information. Only authorized personnel have access to data and all third-party processors are GDPR-compliant (where applicable).</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">4. Cookies and Tracking Technologies</h3>
                  <p>We use cookies to enhance user experience, track website usage, and serve relevant content. You may control or disable cookies through your browser settings at any time.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">5. Sharing of Information</h3>
                  <p>We do <strong>not</strong> sell, rent, or share your personal data with third parties. Data is only shared when legally required or to fulfill service obligations via vetted processors.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">6. Your Rights</h3>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Withdraw consent to data processing at any time</li>
                  </ul>
                  <p>To exercise your rights, contact us at <a href="mailto:ashakpacific@gmail.com" className="text-primary underline">ashakpacific@gmail.com</a>.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">7. International Data Transfers</h3>
                  <p>Since we operate globally, your data may be processed outside your country of residence. We ensure that appropriate data protection standards are applied in all jurisdictions where data is handled.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">8. Retention of Data</h3>
                  <p>We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Data no longer needed is securely deleted or anonymized.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">9. Changes to This Policy</h3>
                  <p>This Privacy Policy may be updated from time to time. The latest version will always be available on our website and marked with an effective date.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">10. Contact Us</h3>
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at <a href="mailto:ashakpacific@gmail.com" className="text-primary underline">ashakpacific@gmail.com</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
