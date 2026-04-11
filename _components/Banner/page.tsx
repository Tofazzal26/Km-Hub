"use client";

import Image from "next/image";
import BannerStyle from "./BannerStyle/BannerStyle.module.css";

const Banner: React.FC = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative w-full md:h-[90vh] h-[800px] text-white bg-cover bg-no-repeat bg-center bg-[url('/banner.jpg')]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
          <div className="w-full">
            <div>
              <div className="text-center">
                <h2 className="lg:text-[50px] text-[35px] font-medium">
                  Measure Every Click, Improve Every Campaign
                </h2>
                <p className="text-lg w-[860px] mx-auto text-gray-300 mb-5">
                  We help businesses plan, run, and optimize their advertising
                  campaigns by tracking user behavior, analyzing performance,
                  and turning insights into actionable strategies that drive
                  growth and increase conversions.
                </p>
              </div>
              <div className="flex items-center justify-center lg:gap-[100px] gap-8 lg:flex-row flex-col">
                <div className="">
                  <Image
                    width={410}
                    height={550}
                    className="lg:w-[1000px] lg:h-[550px] w-full h-[380px] rounded-[20px]"
                    src="/banner.png"
                    alt="banner"
                  />
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
