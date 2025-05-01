import Breadcrumb from "@/components/Common/Breadcrumb";
import TermsSection from "@/components/Terms/TermSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Condition Page | Ashak Pacific LLC",
  description: "This is our Terms & Condition Page",
  // other metadata
};

const TermsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms & Condition Page"
        description="These terms govern your use of Ashak Pacific's services and website. By accessing our platform, you agree to follow the conditions stated here. We encourage you to read them carefully to understand your rights and obligations."
      />
      <TermsSection />
    </>
  );
};

export default TermsPage;
