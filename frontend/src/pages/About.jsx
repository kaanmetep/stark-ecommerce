import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";
const About = () => {
  return (
    <div className="border-t">
      <Title text1={"ABOUT"} text2={"US"} className="justify-center mt-10" />
      <div className="mt-20 mb-40">
        <div className="flex flex-col lg:flex-row gap-12 justify-center ">
          <img
            src={assets.about_img}
            alt="about_image"
            className="w-full lg:max-w-96 "
          />
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-gray-500 leading-8 ">
              Stark was born out of a passion for innovation and a commitment to
              transforming the online shopping experience. Our journey started
              with a simple vision: to create a platform where customers can
              effortlessly discover, explore, and purchase a wide variety of
              products from the comfort of their homes. Since our founding, we
              have dedicated ourselves to curating an extensive range of
              high-quality products that cater to every taste and need. From
              fashion and beauty to electronics and home essentials, our
              collection is carefully sourced from trusted brands and suppliers
              to ensure quality and satisfaction for every customer.
            </p>
            <p className="font-semibold  mt-3">Our Mission</p>
            <p className="text-gray-400 leading-8 mt-4">
              Our mission at Stark is to empower customers with choice,
              convenience, and confidence. We are committed to delivering a
              seamless shopping experience that goes beyond expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
