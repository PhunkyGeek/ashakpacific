import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const BusinessSectionThree = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="partnerships" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="Our Ideal Partners"
              paragraph="Ashak Pacific partners with organizations who are driven by innovation. We collaborate with mobility leaders, agricultural disruptors, smart home brands, educational innovators, and enterprises seeking intelligent automation to build scalable AIoT-powered ecosystems."
              mb="44px"
            />

            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Transport & Logistics Firms" />
                  <List text="Agriculture Technology Innovators" />
                  <List text="Smart Home & E-commerce Brands" />
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Automobile & Electric Car Companies" />
                  <List text="Educational Institutions" />
                  <List text="Enterprise Solution Providers" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
              <Image
                src="/images/about/about-image.png"
                alt="partners-image"
                fill
                className="drop-shadow-three mx-auto max-w-full lg:mr-0 dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image.png"
                alt="partners-image"
                fill
                className="drop-shadow-three mx-auto hidden max-w-full lg:mr-0 dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
            Ready to Shape the Future Together?
          </h3>
          <p className="text-body-color mb-8 text-base leading-relaxed dark:text-body-color-dark">
            Partner with Ashak Pacific to pioneer the next wave of AIoT-driven innovation across industries.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-yellow-400 px-8 py-4 text-base font-semibold text-black transition hover:bg-yellow-500"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default BusinessSectionThree;
