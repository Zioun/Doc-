import React from "react";

const Appointment = () => {
  return (
    <div>
      <div className="px-3 ">
        <div class="relative max-w-[1160px] h-[400px] lg:h-auto m-auto w-full lg:my-32 my-10">
          <img
            src="../../public/images/appointment.png"
            alt=""
            class="w-full object-cover h-[400px] lg:h-auto"
          />
          <div
            className="absolute inset-0 opacity-90 rounded-[10px] px-3"
            style={{
              background:
                "linear-gradient(90deg, rgba(52,50,104,1) 0%, rgba(7,5,52,1) 0%, rgba(35,33,85,1) 54%, rgba(66,65,115,1) 82%, rgba(87,86,130,1) 96%, rgba(98,97,138,1) 100%)",
            }}
          ></div>
          <div>
            <div className="absolute top-20 left-10">
              <h1 className="text-[30px] lg:text-[40px] font-bold text-white">
                Get Your <br /> First Appointment <br /> at 50% Off!
              </h1>
              <div className="flex gap-5">
                <button className="flex items-center justify-center gap-2 bg-[#FFC637] lg:px-7 px-5 py-3 rounded-2xl mt-10">
                  <span className="font-semibold">Learn more</span>
                  <img
                    className="hidden lg:block"
                    src="../../public/images/Arrow-1.png"
                    alt=""
                  />
                </button>
                <button className="flex items-center justify-center gap-2 bg-transparent text-white lg:px-7 px-5 py-3 rounded-2xl mt-10 border border-white">
                  <span className="font-semibold">Learn more</span>
                  <img
                    className="hidden lg:block"
                    src="../../public/images/Arrow-2.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="absolute top-10 right-10">
              <img src="../../public/images/appointment-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
