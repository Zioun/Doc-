import React from "react";

const Service = () => {
  return (
    <div className="max-w-[1160px] m-auto w-full py-32">
      <div className="grid grid-cols-10">
        <div className="col-span-5">
          <span className="border px-7 py-2 rounded-full text-[16px]">
            Who we are
          </span>
          <h2 className="text-[36px] w-[300px] font-bold my-5">
            We Help To Get Soultions
          </h2>
          <p className="text-[16px] w-[350px]">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <button className="flex items-center justify-center gap-2 bg-[#FFC637] px-7 py-3 rounded-2xl mt-10">
            <span className="font-semibold">Learn more</span>
            <img src="../../public/images/Arrow-1.png" alt="" />
          </button>
        </div>
        <div className="col-span-5 relative">
          <div className="w-full h-full">
            <img
              className="max-w-[568px] h-[415px]"
              src="../../public/images/service-1.png"
              alt=""
            />
          </div>
          <div className="absolute bottom-5 left-5 px-[30px] py-[30px] rounded-3xl bg-[#121057]  text-white bg-opacity-70">
            <h1 className="text-[25px] mb-2">Advanced Technology</h1>
            <div className="flex justify-center items-end">
              <p className="max-w-[270px]">
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
              <div className="bg-[#FFC637] p-5 rounded-full -mb-3"><img src="../../public/images/Arrow-2.png" alt="" /></div>
            </div>
          </div>
        </div>
        <div className="col-span-5 relative mt-10">
          <div className="w-full h-full">
            <img
              className="max-w-[568px] h-[415px]"
              src="../../public/images/service-2.png"
              alt=""
            />
          </div>
          <div className="absolute bottom-5 left-5 px-[30px] py-[30px] rounded-3xl bg-[#121057]  text-white bg-opacity-70">
            <h1 className="text-[25px] mb-2">Online Doctor Meet</h1>
            <div className="flex justify-center items-end">
              <p className="max-w-[270px]">
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
              <div className="bg-[#FFC637] p-5 rounded-full -mb-3"><img src="../../public/images/Arrow-2.png" alt="" /></div>
            </div>
          </div>
        </div>
        <div className="col-span-5 relative mt-10">
          <div className="w-full h-full">
            <img
              className="max-w-[568px] h-[415px]"
              src="../../public/images/service-3.png"
              alt=""
            />
          </div>
          <div className="absolute bottom-5 left-5 px-[30px] py-[30px] rounded-3xl bg-[#121057]  text-white bg-opacity-70">
            <h1 className="text-[25px] mb-2">Consultancy your health</h1>
            <div className="flex justify-center items-end">
              <p className="max-w-[270px]">
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
              <div className="bg-[#FFC637] p-5 rounded-full -mb-3"><img src="../../public/images/Arrow-2.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
