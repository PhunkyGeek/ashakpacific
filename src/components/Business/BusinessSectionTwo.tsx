import Image from "next/image";

const BusinessSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2.png"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
            <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Who We Are
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Ashak Pacific is a visionary AIoT company at the forefront of shaping intelligent ecosystems. We build scalable, future-ready platforms that seamlessly integrate artificial intelligence with the Internet of Things across Mobility, Agriculture, E-commerce, Automobiles, Business, and Education.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Our Mission
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  To empower industries with connected intelligence, accelerating innovation, enhancing operational efficiency, and enabling data-driven growth for a smarter, more sustainable future.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Our Vision
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  To lead the transformation of industries worldwide by delivering cutting-edge AIoT solutions that bridge technology and human ingenuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSectionTwo;
