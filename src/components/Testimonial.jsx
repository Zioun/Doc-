import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="max-w-[1160px] m-auto w-full py-32">
      <div>
        <span className="border px-7 py-2 rounded-full text-[16px]">
          Who we are
        </span>
        <h2 className="text-[36px] font-bold my-5">We Help To Get Soultions</h2>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[#FFFFF5] p-5">
              <h1 className="text-[19px] font-bold">Expertise and Compassion Combined</h1>
              <p className="mt-5">
                I can't thank enough for their exceptional care. The doctors and
                staff showed incredible expertise and compassion throughout my
                treatment journey. I felt truly cared for every step of the way.
              </p>
              <div className="flex gap-4 mt-5">
                <div>
                  <img src="../../public/images/parson-1.png" alt="" />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h1>Sarah D</h1>
                    <h2>IT Professional</h2>
                  </div>
                  <div className="flex gap-2">
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FFFFF5] p-5">
              <h1 className="text-[19px] font-bold">Expertise and Compassion Combined</h1>
              <p className="mt-5">
                I can't thank enough for their exceptional care. The doctors and
                staff showed incredible expertise and compassion throughout my
                treatment journey. I felt truly cared for every step of the way.
              </p>
              <div className="flex gap-4 mt-5">
                <div>
                  <img src="../../public/images/parson-1.png" alt="" />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h1>Sarah D</h1>
                    <h2>IT Professional</h2>
                  </div>
                  <div className="flex gap-2">
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FFFFF5] p-5">
              <h1 className="text-[19px] font-bold">Expertise and Compassion Combined</h1>
              <p className="mt-5">
                I can't thank enough for their exceptional care. The doctors and
                staff showed incredible expertise and compassion throughout my
                treatment journey. I felt truly cared for every step of the way.
              </p>
              <div className="flex gap-4 mt-5">
                <div>
                  <img src="../../public/images/parson-1.png" alt="" />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h1>Sarah D</h1>
                    <h2>IT Professional</h2>
                  </div>
                  <div className="flex gap-2">
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FFFFF5] p-5">
              <h1 className="text-[19px] font-bold">Expertise and Compassion Combined</h1>
              <p className="mt-5">
                I can't thank enough for their exceptional care. The doctors and
                staff showed incredible expertise and compassion throughout my
                treatment journey. I felt truly cared for every step of the way.
              </p>
              <div className="flex gap-4 mt-5">
                <div>
                  <img src="../../public/images/parson-1.png" alt="" />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h1>Sarah D</h1>
                    <h2>IT Professional</h2>
                  </div>
                  <div className="flex gap-2">
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                    <img src="../../public/images/rating.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
