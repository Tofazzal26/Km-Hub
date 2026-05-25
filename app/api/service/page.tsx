"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceData } from "@/data/service";

const Service = () => {
  return (
    <div className="relative overflow-hidden bg-[#0B1120] text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#f59760]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex justify-center items-center flex-col text-center pt-16 lg:pt-20">
          <button
            className="
              text-[#f59760]
              bg-[#f59760]/10
              border border-[#f59760]/20
              px-6 py-2
              rounded-full
              text-sm lg:text-base
              hover:bg-[#f59760]
              hover:text-white
              transition-all duration-300
            "
          >
            Premium Digital Services
          </button>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold my-4 leading-tight">
            Discover <span className="text-[#f59760]">Excellence</span>
          </h2>

          <p className="text-gray-400 text-base lg:text-xl max-w-xl leading-relaxed">
            Unlock your business potential with our curated services.
          </p>
        </div>

        {/* Cards */}
        <div className="py-14 lg:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((item) => (
            <Link
              key={item.id}
              href={`/api/service/${item.id}`}
              className="
        group
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        rounded-[24px]
        overflow-hidden
        hover:scale-[1.03]
        hover:border-[#f59760]/40
        transition-all duration-300
        shadow-lg hover:shadow-orange-500/10
        block
      "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  width={280}
                  height={192}
                  alt="service"
                  className="
            w-full
            h-[220px]
            object-cover
            transition duration-500
            group-hover:scale-110
          "
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="font-semibold text-lg leading-[30px] text-white group-hover:text-[#f59760] transition">
                  {item.head}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-3">
                  <span className="text-yellow-400">⭐</span>

                  <span className="text-white font-medium">5.0</span>

                  <span className="text-sm text-gray-400">(15 Reviews)</span>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-5"></div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-5">
                  <button
                    className="
              text-[#f59760]
              text-sm lg:text-base
              hover:text-white
              transition duration-300
            "
                  >
                    Discuss
                  </button>

                  <div
                    className="
              flex items-center gap-2
              text-cyan-400
              hover:text-[#f59760]
              transition duration-300
              group/link
            "
                  >
                    Details
                    <ArrowRight
                      size={18}
                      className="transition duration-300 group-hover/link:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
