import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { serviceData } from "@/data/service";
import Link from "next/link";
const HomeWorkSection = () => {
  return (
    <div className="bg-[#0f0f11]">
      <div className="container mx-auto">
        <div className="pt-20">
          <div className="pb-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {serviceData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="border border-[#273141] rounded-[20px] overflow-hidden hover:scale-[1.02] transition duration-300 bg-[#0B1120]"
              >
                <Image
                  src={item.image}
                  width={400}
                  height={250}
                  alt={item.head}
                  className="w-full h-[220px] object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white line-clamp-1">
                    {item.head}
                  </h3>

                  <div className="flex items-center gap-1 mt-3 text-sm text-gray-300">
                    <span>⭐</span>
                    <span className="text-white font-medium">5.0</span>
                    <span>(15 Reviews)</span>
                  </div>

                  <div className="border-t border-[#273141] my-5"></div>

                  <div className="flex justify-between items-center">
                    <button className="text-white hover:text-[#02c6e6] transition">
                      Discuss
                    </button>

                    <Link
                      href={`/api/service/${item.id}`}
                      className="flex items-center gap-2 text-[#02c6e6] hover:gap-3 transition-all duration-300"
                    >
                      Details <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
