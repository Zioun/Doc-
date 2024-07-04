import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="w-full">
        <img
          className="w-full opacity-20 absolute top-0 -z-10"
          src="../../public/images/banner-bg.png"
          alt=""
        />
      </div>
      <div className="max-w-[1160px] m-auto w-full mt-3 md:mt-[40px] px-3">
        <img src="../../public/images/banner.png" alt=""  className="m-auto z-40  w-full"/>
      </div>
    </div>
  );
};

export default Banner;
