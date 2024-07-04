import React from "react";

const Appointment = () => {
  return (
    <div class="relative max-w-[1160px] m-auto w-full my-32">
      <img
        src="../../public/images/appointment.png"
        alt=""
        class="w-full h-auto"
      />
      <div
        className="absolute inset-0 opacity-90 rounded-3xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(52,50,104,1) 0%, rgba(7,5,52,1) 0%, rgba(35,33,85,1) 54%, rgba(66,65,115,1) 82%, rgba(87,86,130,1) 96%, rgba(98,97,138,1) 100%)",
        }}
      ></div>
      <div className="absolute top-20 left-10">
        <h1 className="text-[40px] font-bold text-white">
          Get Your <br /> First Appointment <br /> at 50% Off!
        </h1>
        <div className="flex gap-5"><button className="flex items-center justify-center gap-2 bg-[#FFC637] px-7 py-3 rounded-2xl mt-10">
          <span className="font-semibold">Learn more</span>
          <img src="../../public/images/Arrow-1.png" alt="" />
        </button><button className="flex items-center justify-center gap-2 bg-transparent text-white px-7 py-3 rounded-2xl mt-10 border border-white">
          <span className="font-semibold">Learn more</span>
          <img src="../../public/images/Arrow-2.png" alt="" />
        </button></div>
      </div>
      <div className="absolute top-10 right-10">
        <img src="../../public/images/appointment-logo.png" alt="" />
      </div>
    </div>
  );
};

export default Appointment;
