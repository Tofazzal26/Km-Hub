import Image from "next/image";
import React from "react";
import { Users, CheckCircle, Star, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      id: 1,
      icon: <Users size={28} />,
      value: "54+",
      label: "Happy Clients",
      color: "text-[#f59760]",
      bg: "bg-[#f59760]/10",
    },
    {
      id: 2,
      icon: <CheckCircle size={28} />,
      value: "60+",
      label: "Projects Done",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      id: 3,
      icon: <Star size={28} />,
      value: "40+",
      label: "5-Star Reviews",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      id: 4,
      icon: <Clock size={28} />,
      value: "1+",
      label: "Years Experience",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <div className="bg-[#0B1120] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-20 px-4">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#f59760]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            About{" "}
            <span className="bg-gradient-to-r from-[#f59760] to-cyan-400 bg-clip-text text-transparent">
              Team Advertiser
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            We are a passionate team of digital artisans dedicated to crafting
            exceptional online experiences and driving measurable growth for
            brands worldwide.
          </p>
        </div>
      </section>

      {/* STATS */}
      <div className="pb-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div
              key={item.id}
              className="
                group
                flex flex-col items-center justify-center
                p-6 rounded-2xl
                backdrop-blur-xl
                bg-white/5
                border border-white/10
                transition-all duration-300
                hover:scale-105
                hover:bg-white/10
                hover:border-[#f59760]/40
                hover:shadow-xl
              "
            >
              <div
                className={`p-3 rounded-full ${item.bg} ${item.color} mb-4 transition-all duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              <h2
                className={`text-3xl font-bold ${item.color} mb-1 transition-all duration-300`}
              >
                {item.value}
              </h2>

              <p className="text-sm text-gray-300 group-hover:text-white transition text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="text-white py-10 lg:py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex lg:flex-row flex-col-reverse items-center gap-10 lg:gap-16">
            {/* LEFT */}
            <div className="w-full">
              <h2 className="text-[#f59760] text-sm font-semibold uppercase tracking-[3px]">
                Our Story
              </h2>

              <h2 className="lg:text-5xl text-3xl font-bold lg:mt-5 mt-3 w-full lg:w-[850px] lg:leading-[65px] leading-[42px]">
                Our integrated strategies and innovative solutions propel your
                brand towards excellence in the digital realm.
              </h2>

              <div className="space-y-5 mt-8 lg:mt-12">
                <p className="font-normal text-gray-400 text-base lg:text-lg leading-[30px] w-full lg:w-[680px]">
                  Quam viverra orci sagittis eu. Sapien nec sagittis aliquam
                  malesuada bibendum arcu vitae elementum. Elementum eu
                  facilisis sed odio morbi quis commodo odio.
                </p>

                <p className="font-normal text-gray-400 text-base lg:text-lg leading-[30px] w-full lg:w-[680px]">
                  Pellentesque massa placerat duis ultricies. Blandit cursus
                  risus at ultrices mi tempus imperdiet. Ipsum dolor sit amet
                  consectetur adipiscing elit pellentesque habitant.
                </p>
              </div>

              {/* Button */}
              <button
                className="
                  mt-8
                  bg-[#f59760]
                  hover:bg-[#ff7f32]
                  text-white
                  px-8 py-3
                  rounded-xl
                  font-semibold
                  transition-all duration-300
                  hover:scale-105
                  shadow-lg hover:shadow-orange-500/30
                "
              >
                Learn More
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full flex justify-center">
              <div className="relative group">
                {/* Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#f59760]/20 to-cyan-500/20 blur-2xl rounded-[30px] opacity-70 group-hover:opacity-100 transition duration-500"></div>

                <Image
                  width={410}
                  height={550}
                  className="
                    relative
                    lg:w-[410px]
                    lg:h-[550px]
                    w-full
                    max-w-[400px]
                    h-[420px]
                    object-cover
                    rounded-[24px]
                    border border-white/10
                    transition duration-500
                    group-hover:scale-[1.02]
                  "
                  src="/bannerMiddle.webp"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
