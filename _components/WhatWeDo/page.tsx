import React from "react";

const WhatWeDo = () => {
  return (
    <div className="bg-[#0f0f11] text-white lg:px-0 px-2">
      <div className="container mx-auto">
        <div className="lg:py-10 py-5">
          <div>
            <h2 className="text-sm font-medium uppercase lg:pt-10 pt-5">
              What we do
            </h2>
            <h2 className="lg:text-4xl text-2xl font-medium lg:w-[900px] lg:leading-[45px] leading-[35px] lg:mt-5 mt-3">
              Our integrated strategies and innovative solutions propel your
              brand towards excellence in the digital realm.
            </h2>
          </div>
          <div>
            <div className="flex items-center lg:mt-20 mt-10 gap-5 lg:flex-row flex-col">
              <div className=" relative lg:w-[380px] lg:h-[535px] h-[350px] w-full text-white bg-cover bg-no-repeat bg-center bg-[url('/do1.jpg')] rounded-[20px]">
                <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
                  <div>
                    <h2 className="lg:text-3xl text-2xl font-medium absolute bottom-12 left-12 cursor-pointer">
                      Branding
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" relative lg:w-[380px] lg:h-[535px] h-[350px] w-full text-white bg-cover bg-no-repeat bg-center bg-[url('/do2.webp')] rounded-[20px]">
                <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
                  <div>
                    <h2 className="lg:text-3xl text-2xl font-medium absolute bottom-12 left-12 cursor-pointer">
                      Mobile Apps
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" relative lg:w-[380px] lg:h-[535px] h-[350px] w-full text-white bg-cover bg-no-repeat bg-center bg-[url('/do3.jpg')] rounded-[20px]">
                <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
                  <div>
                    <h2 className="lg:text-3xl text-2xl font-medium absolute bottom-12 left-12 cursor-pointer">
                      Marketing
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" relative lg:w-[380px] lg:h-[535px] h-[350px] w-full text-white bg-cover bg-no-repeat bg-center bg-[url('/do4.webp')] rounded-[20px]">
                <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
                  <div>
                    <h2 className="lg:text-3xl text-2xl font-medium absolute bottom-12 left-12 cursor-pointer">
                      Strategy
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
