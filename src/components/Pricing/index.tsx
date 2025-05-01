"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Our flexible and affordabel pricing plans are for AI Agent setup, whether you’re a startup, enterprise, or visionary builder. Choose the best fit and let's engineer your AI Agent worker together."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "text-primary pointer-events-none"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              One-time
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 bg-primary absolute top-[-4px] left-0 flex h-7 w-7 items-center justify-center rounded-full transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "text-primary pointer-events-none"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "299" : "189"}
            duration={isMonthly ? "purchase" : "mo"}
            subtitle="Perfect for small teams starting their AIoT transformation journey, with an AI Agent."
          >
            <OfferList text="Core AIoT Features" status="active" />
            <OfferList text="Single AI Agent" status="active" />
            <OfferList text="Basic Analytics" status="active" />
            <OfferList text="Standard Work Support" status="active" />
            <OfferList text="Advanced AI Modules" status="inactive" />
            <OfferList text="24/7 Priority Assistance" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "599" : "489"}
            duration={isMonthly ? "purchase" : "mo"}
            subtitle="For growing businesses ready to deploy intelligent, scalable AI Agent systems."
          >
            <OfferList text="Full AIoT Suite Access" status="active" />
            <OfferList text="Multiple AI Agents" status="active" />
            <OfferList text="Enhanced Data Insights" status="active" />
            <OfferList text="Premium Work Support" status="active" />
            <OfferList text="Advanced AI Modules" status="active" />
            <OfferList text="24/7 Priority Assistance" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "999" : "789"}
            duration={isMonthly ? "purchase" : "mo"}
            subtitle="Enterprise-grade AI Agent solutions crafted for maximum impact and growth."
          >
            <OfferList text="Unlimited AIoT Integrations" status="active" />
            <OfferList text="Enterprise level AI Agents" status="active" />
            <OfferList text="Advanced Predictive Analytics" status="active" />
            <OfferList text="Dedicated Work Management" status="active" />
            <OfferList text="Custom AI Model Training" status="active" />
            <OfferList text="24/7 Priority Assistance" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD700" />
              <stop offset="1" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD700" />
              <stop offset="1" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
