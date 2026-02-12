import React from "react";
import {
  Keyboard,
  PieChart,
  Monitor,
  MessageCircle,
  Smartphone,
  Coffee,
  Gem,
  Megaphone,
} from "lucide-react";

const OurService = () => {
  return (
    <div className="bg-[#0f0f11] text-white lg:py-20 py-10">
      <div className="container mx-auto">
        <div>
          <div className="flex justify-between lg:flex-row flex-col lg:gap-0 gap-5">
            <div>
              <h2 className="lg:text-5xl text-3xl font-medium">Our Services</h2>
            </div>
            <div>
              <h2 className="lg:text-xl text-lg font-normal w-[400px] leading-[35px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </h2>
            </div>
            <div>
              <button className="font-bold lg:text-base text-sm cursor-pointer">
                VIEW ALL
              </button>
            </div>
          </div>
          <div>
            <div className="lg:mt-20 mt-10">
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
                <div className="bg-[#171718] rounded-[20px] lg:p-[30px] p-[20px]">
                  <Keyboard
                    size={50}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-3 lg:mb-4 mb-3">
                    Content Marketing
                  </h2>
                  <p className="lg:text-xl text-lg font-normal lg:w-[200px] w-full leading-[35px]">
                    Lorem ipsum dolor sit amet adipiscing elit.
                  </p>
                </div>
                <div className="bg-[#171718] rounded-[20px] lg:p-[30px] p-[20px]">
                  <PieChart
                    size={50}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-3 lg:mb-4 mb-3">
                    User Experience
                  </h2>
                  <p className="lg:text-xl text-lg font-normal lg:w-[200px] w-full leading-[35px]">
                    Lorem ipsum dolor sit amet adipiscing elit.
                  </p>
                </div>
                <div className="bg-[#171718] rounded-[20px] lg:p-[30px] p-[20px]">
                  <Monitor
                    size={50}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-3 lg:mb-4 mb-3">
                    Website Design
                  </h2>
                  <p className="lg:text-xl text-lg font-normal lg:w-[200px] w-full leading-[35px]">
                    Lorem ipsum dolor sit amet adipiscing elit.
                  </p>
                </div>
                <div className="bg-[#171718] rounded-[20px] lg:p-[30px] p-[20px]">
                  <MessageCircle
                    size={50}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-3 lg:mb-4 mb-3">
                    Social Media
                  </h2>
                  <p className="lg:text-xl text-lg font-normal lg:w-[200px] w-full leading-[35px]">
                    Lorem ipsum dolor sit amet adipiscing elit.
                  </p>
                </div>
                <div className="bg-[#171718] rounded-[20px] lg:p-[30px] p-[20px]">
                  <Smartphone
                    size={50}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-3 lg:mb-4 mb-3">
                    Mobile Apps
                  </h2>
                  <p className="lg:text-xl text-lg font-normal lg:w-[200px] w-full leading-[35px]">
                    Lorem ipsum dolor sit amet adipiscing elit.
                  </p>
                </div>
                <div className="bg-[#171718] rounded-[20px] lg:p-[30px] p-[20px]">
                  <Gem size={50} strokeWidth={1.5} className="text-blue-500" />
                  <h2 className="lg:text-2xl text-xl font-medium mt-3 lg:mb-4 mb-3">
                    Graphic Design
                  </h2>
                  <p className="lg:text-xl text-lg font-normal lg:w-[200px] w-full leading-[35px]">
                    Lorem ipsum dolor sit amet adipiscing elit.
                  </p>
                </div>
                <div className="bg-[#171718] rounded-[20px] lg:p-[30px] p-[20px]">
                  <Coffee
                    size={50}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-3 lg:mb-4 mb-3">
                    Creative Branding
                  </h2>
                  <p className="lg:text-xl text-lg font-normal lg:w-[200px] w-full leading-[35px]">
                    Lorem ipsum dolor sit amet adipiscing elit.
                  </p>
                </div>
                <div className="bg-[#171718] rounded-[20px] lg:p-[30px] p-[20px]">
                  <Megaphone
                    size={50}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-3 lg:mb-4 mb-3">
                    Digital Solution
                  </h2>
                  <p className="lg:text-xl text-lg font-normal lg:w-[200px] w-full leading-[35px]">
                    Lorem ipsum dolor sit amet adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
