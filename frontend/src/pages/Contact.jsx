import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";
const Contact = () => {
  return (
    <div className="border-t">
      <Title text1={"CONTACT"} text2={"US"} className="justify-center my-10" />
      <div className="flex flex-col lg:flex-row gap-8 mt-10 mb-20 justify-center items-center">
        <img
          src={assets.contact_img}
          alt="contact_image"
          className="lg:w-96 w-72"
        />
        <div className="flex flex-col gap-4 justify-center">
          <p className="font-semibold text-gray-700 text-lg">Our Store</p>
          <div className="flex flex-col gap-2 text-gray-500">
            <p>2138 Hudson Avenue</p>
            <p>Suite 120, New York, USA</p>
            <p>Tel: (212) 555-0184</p>
            <p>Email: support@stark.com</p>
          </div>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
