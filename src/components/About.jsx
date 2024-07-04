import React from "react";

const About = () => {
  return (
    <div id="about" className="max-w-[1160px] m-auto w-full pt-10 lg:pt-32 px-3">
      <div className="grid grid-cols-10">
        <div className="col-span-10 lg:col-span-4">
          <span className="border px-7 py-2 rounded-full text-[16px]">Who we are</span>
          <h2 className="text-[36px] w-[300px] font-bold my-5">We Help To Get Soultions</h2>
          <p className="text-[16px]">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>
          <button className="flex items-center justify-center gap-2 bg-[#FFC637] px-7 py-3 rounded-2xl mt-10">
            <span className="font-semibold">Learn more</span>
            <img src="../../public/images/Arrow-1.png" alt="" />
          </button>
        </div>
        <div className="col-span-10 lg:col-span-6 relative mt-10 lg:mt-0">
            <div className="absolute -z-0 lg:top-0 lg:right-0"><img className="object-cover lg:max-w-[568px] h-[415px] rounded-2xl" src="../../public/images/about.png" alt="" /></div>
            <div className="absolute z-10 mt-[300px] lg:-bottom-5 lg:left-5 px-[30px] lg:py-[47px] py-5 rounded-3xl bg-[#343268] max-w-[390px] text-white">
                <h1 className="text-[25px] mb-2">Our mission is simple</h1>
                <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
