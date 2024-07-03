import React from "react";

const Comprehensive = () => {
  return (
    <div className="max-w-[1160px] m-auto w-full mt-5">
      <div>
        <h1 className="text-[48px] font-bold w-[500px] text-center m-auto">
          Comprehensive Care for Every Patient
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-5 -mt-20">
        <div className="bg-[#FBFBFB] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl p-5 w-full">
          <h1 className="text-[40px] font-semibold">90%</h1>
          <p className="max-w-[150px] mb-5">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <div className="flex justify-center">
            <div>
              <img src="../../public/images/chart.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center w-full">
          <div className="bg-[#FBFBFB] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl p-5 w-full">
            <h1 className="text-[40px] font-semibold">500+</h1>
            <p className="max-w-[150px] mb-5">Board-certified doctors </p>
            <div className="flex justify-end">
              <div className="-mt-5">
                <img src="../../public/images/certified.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center">
          <div className="bg-[#FBFBFB] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl p-5 w-full">
            <div className="flex items-center gap-2">
              <h1 className="text-[40px] font-semibold">4.8</h1>
              <div>
                <img src="../../public/images/star.png" alt="" />
              </div>
            </div>
            <p className="max-w-[150px] mb-14">Board-certified doctors </p>
            <div className="flex justify-start relative">
              <div className="flex ">
                <div className="absolute -top-9 left-0">
                  <img src="../../public/images/Ellipse-1.png" alt="Ellipse" />
                </div>
                <div className="absolute -top-9 left-[20px]">
                  <img src="../../public/images/Ellipse-2.png" alt="Ellipse" />
                </div>
                <div className="absolute -top-9 left-[40px]">
                  <img src="../../public/images/Ellipse-3.png" alt="Ellipse" />
                </div>
                <div className="absolute -top-9 left-[60px]">
                  <img src="../../public/images/Ellipse-4.png" alt="Ellipse" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center">
          <div className="bg-[#FBFBFB] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl p-5 w-full">
            <h1 className="text-[40px] font-semibold">$5000</h1>
            <p className="max-w-[150px] mb-5">Money spend for poor patient</p>
            <div className="flex justify-end">
              <div className="-mt-5">
                <img src="../../public/images/coin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl p-5 w-full">
          <h1 className="text-[40px] font-semibold">50+</h1>
          <p className="max-w-[150px] mb-5">Free lession video for patient</p>
          <div className="flex justify-center items-end">
            <div className="flex items-end mt-7">
              <img src="../../public/images/video.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
