import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Ashak Pacific LLC",
  description: "This is our Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Ready to build the future together? Reach out to us, let's connect ideas, technology, and opportunities."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
