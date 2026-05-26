"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { serviceData } from "@/data/service";
import Link from "next/link";

const HomeWorkSection = () => {
  return (
    <div className="relative overflow-hidden bg-[#0B1120] text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#f59760]/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-14 lg:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <button
              className="
                bg-[#f59760]/10
                border border-[#f59760]/20
                text-[#f59760]
                px-5 py-2
                rounded-full
                text-sm
                font-semibold
                hover:bg-[#f59760]
                hover:text-white
                transition-all duration-300
              "
            >
              Featured Services
            </button>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 leading-tight">
              Our Premium <span className="text-[#f59760]">Solutions</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm sm:text-base leading-[28px]">
              Discover our most trusted digital marketing and analytics services
              designed to grow your business faster.
            </p>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {serviceData.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/api/service/${item.id}`}
                className="
        group
        border border-white/10
        rounded-[24px]
        overflow-hidden
        bg-white/5
        backdrop-blur-xl
        hover:border-[#f59760]/30
        hover:-translate-y-2
        transition-all duration-500
        block
      "
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    width={400}
                    height={250}
                    alt={item.head}
                    className="
            w-full
            h-[220px]
            sm:h-[240px]
            object-cover
            transition duration-500
            group-hover:scale-110
          "
                  />
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  <h3 className="text-xl font-semibold text-white line-clamp-1">
                    {item.head}
                  </h3>

                  {/* Reviews */}
                  <div className="flex items-center gap-2 mt-3 text-sm text-gray-300">
                    <span className="text-yellow-400">⭐</span>

                    <span className="text-white font-medium">
                      {item?.rating}
                    </span>

                    <span>{item?.reviews}</span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10 my-5"></div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center">
                    <button
                      className="
              text-white
              hover:text-[#f59760]
              transition duration-300
              font-medium
            "
                    >
                      Discuss
                    </button>

                    <div
                      className="
              flex items-center gap-2
              text-[#f59760]
              font-medium
              hover:gap-3
              transition-all duration-300
            "
                    >
                      Details <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Button */}
          <div className="mt-12 flex justify-center items-center">
            <Link
              href="/api/service"
              className="
      group
      bg-[#f59760]
      hover:bg-[#ff8c42]
      flex items-center gap-2
      px-8 sm:px-10
      py-3
      text-base sm:text-lg
      font-semibold
      text-white
      rounded-xl
      transition-all duration-300
      hover:scale-105
      shadow-lg shadow-[#f59760]/20
    "
            >
              View All Services
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWorkSection;
