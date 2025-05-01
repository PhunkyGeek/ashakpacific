import Breadcrumb from "@/components/Common/Breadcrumb";
import BusinessSectionOne from "@/components/Business/BusinessSectionOne";
import BusinessSectionTwo from "@/components/Business/BusinessSectionTwo";
import BusinessSectionThree from "@/components/Business/BusinessSectionThree";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Page | Ashak Pacific LLC",
  description: "This is our Business Page",
  // other metadata
};

const BusinessPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Business Page"
        description="We engineer intelligent solutions that reshape industries and open new frontiers for growth. Partner with us to drive the future of AIoT innovation, where visionary ideas meet scalable, real-world impact."
      />

      <BusinessSectionOne />
      <BusinessSectionTwo />
      <div className="mx-auto my-8 w-342 border-t-1 border-body-color/[.15] dark:border-white/[.15]"></div>
      <BusinessSectionThree />
    </>
  );
};

export default BusinessPage;
