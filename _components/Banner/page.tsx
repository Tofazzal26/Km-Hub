"use client";

import Image from "next/image";
import BannerStyle from "./BannerStyle/BannerStyle.module.css";

const Banner: React.FC = () => {
  return (
    <div className="md:pr-0 pr-2">
      {/* Hero Section */}
      <div className="relative w-full md:h-[98vh] h-[850px] text-white bg-cover bg-no-repeat bg-center bg-[url('/banner.jpg')]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
          <div className="w-full">
            <div className="lg:pt-16">
              <div className="text-center lg:leading-[135px]">
                <h2 className="lg:text-[120px] text-[35px] font-medium">
                  Where Ideas Transform
                </h2>
                <h2 className="lg:text-[120px] text-[35px] font-medium">
                  into Digital Reality
                </h2>
              </div>
              <div className="flex items-center justify-center lg:gap-[100px] gap-8 lg:flex-row flex-col">
                <div className="">
                  <h2 className="lg:text-[26px] text-lg font-normal lg:w-[312px] w-full lg:text-start text-center">
                    Our mission is to create visually stunning digital
                    landscapes, connecting you with your audience on a profound
                    level.
                  </h2>
                </div>
                <div className="">
                  <Image
                    width={410}
                    height={550}
                    className="lg:w-[410px] lg:h-[550px] w-full h-[380px] rounded-[20px]"
                    src="/bannerMiddle.webp"
                    alt="banner"
                  />
                </div>
                <div className="">
                  <div className="flex items-center justify-between gap-[120px]">
                    <div className="flex items-center">
                      <div className="relative">
                        <Image
                          width={60}
                          height={60}
                          className="w-[54px] h-[54px] rounded-full"
                          src="/client1.webp"
                          alt="client"
                        />
                        <div className="border-[5px] border-[#171718] w-[65px] h-[65px] rounded-full absolute  top-[-2px] right-[-53px]">
                          <Image
                            width={60}
                            height={60}
                            className="rounded-full"
                            src="/client2.webp"
                            alt="client"
                          />
                        </div>
                        <div className="border-[5px] border-[#171718] w-[65px] h-[65px] rounded-full absolute  top-[-2px] right-[-100px]">
                          <Image
                            width={60}
                            height={60}
                            className="rounded-full"
                            src="/client3.webp"
                            alt="client"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[14px] font-medium uppercase">
                        45k Clients
                      </h2>
                    </div>
                  </div>
                  <button className="text-base font-bold lg:py-5 lg:px-10 py-4 px-8 rounded-[40px] bg-[#3b5ffd] text-white mt-7">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
