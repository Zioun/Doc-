import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="w-full">
        {/* <img
          className="w-full opacity-40 absolute top-0 -z-10 "
          src="../../public/images/banner-bg.png"
          alt=""
        /> */}
      </div>
      <div className="max-w-[1160px] m-auto w-full mt-[40px]">
        <img src="../../public/images/banner.png" alt=""  className="m-auto"/>
      </div>
    </div>
  );
};

export default Banner;
