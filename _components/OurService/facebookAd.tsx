import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

const FacebookAd = () => {
  return (
    <div>
      <div>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <Image
                width={500}
                height={380}
                className="w-full lg:h-[400px] h-[300px] rounded-[20px] bg-cover"
                src="/work2.jpg"
                alt="banner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={500}
                height={380}
                className="w-full lg:h-[400px] h-[300px] rounded-[20px] bg-cover"
                src="/work2.jpg"
                alt="banner"
              />
            </SwiperSlide>
          </Swiper>
          <div>
            <p className="text-lg lg:my-5 my-2 text-gray-300">
              Our mission is to create visually stunning digital landscapes,
              connecting you with your audience on a profound level. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Aliquid fuga
              corporis sapiente voluptates eos vel provident in accusamus
              veritatis doloribus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookAd;
