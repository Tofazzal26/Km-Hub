import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HomeWorkSection = () => {
  return (
    <div className="bg-[#0f0f11]">
      <div className="container mx-auto">
        <div className="pt-20">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-5">
            <div className=" border-[#273141] border-[1px] rounded-[20px]">
              <Image
                src={"/service1.png"}
                width={280}
                height={192}
                alt="service"
                className="rounded-t-[20px] w-full"
              />
              <div className="p-6">
                <p className="text-white w-full lg:w-[250px] leading-[20px] text-base font-semibold">
                  Create and setup your youtube channel with custom logo, banner
                  intro & outro
                </p>
                <div className="flex items-center gap-1 mt-2">
                  ⭐ <span className="text-white">5.0</span>{" "}
                  <span className="text-sm text-gray-300">(15)</span>
                </div>
                <div className="border-[#273141] border-[1px] mt-4"></div>
                <div>
                  <h2 className="uppercase text-gray-300 mt-5">Price</h2>
                  <div className="text-[#02c6e6] flex justify-between items-center mt-2">
                    <button>Discuss</button>
                    <button className="flex items-center gap-2">
                      Details <ArrowRight size={18} color="#02c6e6" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border-[#273141] border-[1px] rounded-[20px]">
              <Image
                src={"/service1.png"}
                width={280}
                height={192}
                alt="service"
                className="rounded-t-[20px] w-full"
              />
              <div className="p-6">
                <p className="text-white w-full lg:w-[250px] leading-[20px] text-base font-semibold">
                  Create and setup your youtube channel with custom logo, banner
                  intro & outro
                </p>
                <div className="flex items-center gap-1 mt-2">
                  ⭐ <span className="text-white">5.0</span>{" "}
                  <span className="text-sm text-gray-300">(15)</span>
                </div>
                <div className="border-[#273141] border-[1px] mt-4"></div>
                <div>
                  <h2 className="uppercase text-gray-300 mt-5">Price</h2>
                  <div className="text-[#02c6e6] flex justify-between items-center mt-2">
                    <button>Discuss</button>
                    <button className="flex items-center gap-2">
                      Details <ArrowRight size={18} color="#02c6e6" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border-[#273141] border-[1px] rounded-[20px]">
              <Image
                src={"/service1.png"}
                width={280}
                height={192}
                alt="service"
                className="rounded-t-[20px] w-full"
              />
              <div className="p-6">
                <p className="text-white w-full lg:w-[250px] leading-[20px] text-base font-semibold">
                  Create and setup your youtube channel with custom logo, banner
                  intro & outro
                </p>
                <div className="flex items-center gap-1 mt-2">
                  ⭐ <span className="text-white">5.0</span>{" "}
                  <span className="text-sm text-gray-300">(15)</span>
                </div>
                <div className="border-[#273141] border-[1px] mt-4"></div>
                <div>
                  <h2 className="uppercase text-gray-300 mt-5">Price</h2>
                  <div className="text-[#02c6e6] flex justify-between items-center mt-2">
                    <button>Discuss</button>
                    <button className="flex items-center gap-2">
                      Details <ArrowRight size={18} color="#02c6e6" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-6 flex justify-center items-center">
            <button className="bg-orange-500 flex items-center gap-2 px-10 text-lg font-semibold py-3 text-white rounded-lg">
              View All Services <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWorkSection;
