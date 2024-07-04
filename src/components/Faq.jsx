import React from "react";

const Faq = () => {
  return (
    <div className="max-w-[1160px] m-auto w-full pt-10 lg:pt-32 px-3">
      <div>
        <span className="border px-7 py-2 rounded-full text-[16px]">
        Faq
        </span>
        <h2 className="text-[36px] font-bold my-5">We Help To Get Soultions</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            What are your office hours?
          </div>
          <div className="collapse-content bg-white border-t-2">
            <p className="py-5">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            How can I schedule an appointment?
          </div>
          <div className="collapse-content bg-white border-t-2">
            <p className="py-5">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            Do you accept insurance?
          </div>
          <div className="collapse-content bg-white border-t-2">
            <p className="py-5">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            What should I bring to my appointment?
          </div>
          <div className="collapse-content bg-white border-t-2">
            <p className="py-5">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content bg-white border-t-2">
            <p className="py-5">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
