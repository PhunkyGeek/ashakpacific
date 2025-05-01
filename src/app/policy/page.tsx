import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/Policies/PrivacyPolicy";
import RefundPolicy from "@/components/Policies/RefundPolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Refund Policy Page | Ashak Pacific LLC",
  description: "This is our Privacy Policy Page",
  // other metadata
};

const TermsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy & Refund Policy Page"
        description="Ashak Pacific LLC is committed to protecting your privacy and handling your data with transparency and care. This policy outlines how we collect, use, and protect personal information when you use our services."
      />
      <PrivacyPolicy />
      <RefundPolicy />
    </>
  );
};

export default TermsPage;
