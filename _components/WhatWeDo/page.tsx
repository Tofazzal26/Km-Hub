import React from "react";
import { ArrowUpRight } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Paid Advertising & Campaigns",
    image: "/do1.jpg",
  },
  {
    id: 2,
    title: "Conversion & Tracking Solutions",
    image: "/do2.webp",
  },
  {
    id: 3,
    title: "Analytics & User Insights",
    image: "/do3.jpg",
  },
  {
    id: 4,
    title: "Data-Driven Decision Making",
    image: "/do4.webp",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-[#0B1120] text-white px-3 sm:px-5 lg:px-0 overflow-hidden">
      <div className="container mx-auto lg:py-24 py-16">
        {/* Heading */}
        <div className="text-center lg:text-left">
          <span className="inline-block px-4 py-2 rounded-full border border-[#273141] bg-white/5 text-[#f59760] text-sm uppercase tracking-wider">
            What We Do
          </span>

          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold lg:w-[850px] leading-tight mt-6">
            Turn Insights into Action —
            <span className="text-[#f59760]">
              {" "}
              Make Smarter Decisions Fast.
            </span>
          </h2>

          <p className="text-gray-400 mt-5 lg:w-[700px] text-base leading-[30px]">
            We create data-driven strategies that help businesses improve
            performance, increase conversions, and grow faster with smarter
            marketing solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 lg:mt-20 mt-12">
          {data.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                h-[400px]
                border border-white/10
                hover:border-[#f59760]/40
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition duration-700"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/50 to-transparent" />

              {/* Glow */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[220px] h-[220px] bg-[#f59760]/20 blur-[90px] opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-7">
                {/* Top Button */}
                <div className="absolute top-5 right-5">
                  <button
                    className="
                      w-12 h-12
                      rounded-full
                      bg-white/10
                      backdrop-blur-md
                      border border-white/10
                      flex items-center justify-center
                      group-hover:bg-[#f59760]
                      transition-all
                      duration-300
                    "
                  >
                    <ArrowUpRight
                      size={22}
                      className="group-hover:rotate-45 transition duration-300"
                    />
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold leading-[34px] translate-y-5 group-hover:translate-y-0 transition duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mt-4 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                  Powerful strategies and smart analytics designed to improve
                  marketing performance and drive measurable business growth.
                </p>

                {/* Line */}
                <div className="w-0 h-[2px] bg-[#f59760] mt-5 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
