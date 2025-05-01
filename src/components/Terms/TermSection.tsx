import SectionTitle from "../Common/SectionTitle";

const TermsSection = () => {
  return (
    <section id="terms" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              {/* <SectionTitle
                title="Terms & Conditions"
                paragraph="These Terms and Conditions govern your use of Ashak Pacific’s website and services. By accessing or using our Services, you agree to be bound by these Terms."
                mb="44px"
                center
              /> */}

              <div className="text-body-color text-base leading-relaxed font-medium max-w-3xl mx-auto space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">1. Introduction</h3>
                  <p>Welcome to Ashak Pacific LLC! These Terms and Conditions govern your use of our website, products, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part, please do not use our Services.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">2. Definitions</h3>
                  <p>"Company," "we," "us," and "our" refer to Ashak Pacific LLC. "You" means the individual or entity accessing or using our Services.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">3. Use of Services</h3>
                  <p>Our AIoT solutions cover Mobility, Agriculture, E-commerce, Automotives, Business, and Education sectors. You agree to use our Services only for lawful purposes and to respect all intellectual property rights associated with our content.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">4. Intellectual Property</h3>
                  <p>All content, logos, software, and materials are owned by Ashak Pacific LLC. Unauthorized use, reproduction, or distribution is prohibited without written consent.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">5. Privacy and Data Protection</h3>
                  <p>We value your privacy. By using our Services, you consent to the collection and use of information as outlined in our Privacy Policy. We do not sell or share your data with third parties.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">6. Payment and Refunds</h3>
                  <p>Payments must be made as specified. Refunds are granted only if services were not delivered as agreed. See our Refund Policy for full details.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">7. Disclaimers</h3>
                  <p>Services are provided "as is" without warranties of any kind. We can guarantee 97.8% uninterrupted or error-free service. We have trained personnels to assist when you encounter a service fault.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">8. Limitation of Liability</h3>
                  <p>Ashak Pacific LLC shall not be liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount you paid us for the service.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">9. Third-Party Links and Services</h3>
                  <p>We are not responsible for the content, privacy, or practices of third-party websites linked from our Services.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">10. Changes to Terms</h3>
                  <p>We may update these Terms periodically. Continued use of our Services after changes implies acceptance of the new Terms.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">11. Governing Law</h3>
                  <p>These Terms shall be governed in accordance with the laws of your operational jurisdiction (e.g., Nigeria, SouthAfrica, USA, UK, China, Japan, North/South Korea... and All other Countries).</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">12. Contact Information</h3>
                  <p>For any questions regarding these Terms, please email us at <a href="mailto:ashakpacific@gmail.com" className="text-primary underline">ashakpacific@gmail.com</a>.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
