import SectionTitle from "../Common/SectionTitle";

const RefundSection = () => {
  return (
    <section id="refund" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <SectionTitle
                title="Refund Policy"
                paragraph="Ashak Pacific is committed to delivering high-quality AIoT solutions. This policy explains when and how refunds apply, ensuring transparency and trust between us and our valued clients."
                mb="44px"
                center
              />

              <div className="text-body-color text-base leading-relaxed font-medium max-w-3xl mx-auto space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">1. Eligibility for Refund</h3>
                  <p>We offer refunds in cases where a service or product you purchased from us was not delivered as promised or agreed upon. If a service was successfully delivered, it will generally not be eligible for a refund.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">2. Valid Refund Scenarios</h3>
                  <ul className="list-disc list-inside">
                    <li>You did not receive access to a purchased service.</li>
                    <li>We were unable to fulfill a delivery obligation due to internal error.</li>
                    <li>The service materially deviated from its described scope and no resolution was provided.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">3. Non-Refundable Situations</h3>
                  <ul className="list-disc list-inside">
                    <li>You changed your mind after successful delivery of a service.</li>
                    <li>The issue was due to customer-side delays, missing information, or misuse of the platform.</li>
                    <li>You failed to request a refund within the allowable window (14 days from delivery date).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">4. Request Process</h3>
                  <p>To request a refund, please email us at <a href="mailto:ashakpacific@gmail.com" className="text-primary underline">ashakpacific@gmail.com</a> with the following details:</p>
                  <ul className="list-disc list-inside">
                    <li>Your full name and email used for the purchase</li>
                    <li>Date and name of the purchased service</li>
                    <li>A brief explanation of the issue and why you believe a refund is warranted</li>
                  </ul>
                  <p>Our support team will review your request and respond within 7 business days.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">5. Refund Method</h3>
                  <p>Approved refunds will be returned using the original method of payment. Processing time may vary depending on your payment provider.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">6. Policy Changes</h3>
                  <p>Ashak Pacific reserves the right to update or modify this refund policy at any time without prior notice. We recommend checking this page periodically for any changes.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-4">7. Contact Information</h3>
                  <p>For any questions or concerns regarding this policy, please reach out to <a href="mailto:ashakpacific@gmail.com" className="text-primary underline">ashakpacific@gmail.com</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundSection;
