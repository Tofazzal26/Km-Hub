"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceData } from "@/data/service";

const Service = () => {
  return (
    <div className="bg-[#0f0f11] text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-center items-center flex-col text-center pt-20">
          <button className="text-[#0bcbf3] bg-[#173143] px-6 py-2 rounded-full">
            Premium Digital Services
          </button>
          <h2 className="text-5xl font-extrabold my-4">
            Discover <span className="text-[#f59760]">Excellence</span>
          </h2>

          <p className="text-xl max-w-xl">
            Unlock your business potential with our curated services.
          </p>
        </div>

        {/* Cards */}
        <div className="py-20 grid lg:grid-cols-4 grid-cols-1 gap-6">
          {serviceData.map((item) => (
            <div
              key={item.id}
              className="border border-[#273141] rounded-[20px] hover:scale-105 transition duration-300"
            >
              <Image
                src={item.image}
                width={280}
                height={192}
                alt="service"
                className="rounded-t-[20px] w-full"
              />

              <div className="p-6">
                <p className="font-semibold">{item.head}</p>

                <div className="flex items-center gap-1 mt-2">
                  ⭐ <span>5.0</span>
                  <span className="text-sm text-gray-300">(15)</span>
                </div>

                <div className="border border-[#273141] mt-4"></div>

                <div className="flex justify-between items-center mt-4 text-[#02c6e6]">
                  <button>Discuss</button>

                  {/* 🔥 Dynamic Link */}
                  <Link
                    href={`/api/service/${item.id}`}
                    className="flex items-center gap-2"
                  >
                    Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
