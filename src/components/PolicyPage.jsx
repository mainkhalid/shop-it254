// File: src/components/PolicyPage.js
import React from "react";

const policies = {
  privacy: {
    title: "Privacy Policy",
    content: `
      We value your privacy. We collect necessary data to provide and improve our services.
      All data collection complies with applicable laws such as GDPR and CCPA.
      You can read our detailed privacy practices below.
    `,
  },
  returns: {
    title: "Return & Refund Policy",
    content: `
      Items can be returned within 14 days of purchase for a full refund.
      Ensure the item is in its original packaging and condition. For defects, contact support.
    `,
  },
  shipping: {
    title: "Shipping Policy",
    content: `
      Free standard shipping on orders above $50. Expect delivery within 5-7 business days.
      Tracking information will be emailed after your purchase.
    `,
  },
  terms: {
    title: "Terms of Service",
    content: `
      By using this site, you agree to the terms and conditions outlined here. 
      Payment security is guaranteed, and you may cancel orders under specified conditions.
    `,
  },
  support: {
    title: "Support Policy",
    content: `
      Our customer support is available via email, live chat, and phone.
      Typical response times are within 24 hours.
    `,
  },
};

const PolicyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-20 font-sans mt-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Our Policies
      </h1>
      <div className="space-y-6">
        {Object.keys(policies).map((key) => (
          <div
            key={key}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {policies[key].title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{policies[key].content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyPage;
