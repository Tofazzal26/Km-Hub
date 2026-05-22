import Image from "next/image";
import React from "react";
import { Users, CheckCircle, Star, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      id: 1,
      icon: <Users size={28} />,
      value: "15+",
      label: "Happy Clients",
      color: "text-[#f59760]",
      bg: "bg-[#f59760]/10",
    },
    {
      id: 2,
      icon: <CheckCircle size={28} />,
      value: "20+",
      label: "Projects Done",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      id: 3,
      icon: <Star size={28} />,
      value: "10+",
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
              US
            </span>
          </h2>

          {/* Description */}
          {/* <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            We are a passionate team of digital artisans dedicated to crafting
            exceptional online experiences and driving measurable growth for
            brands worldwide.
          </p> */}
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
          <div className="">
            {/* LEFT */}
            <div className="w-full">
              <h2 className="text-[#f59760] text-sm font-semibold uppercase tracking-[3px]">
                Our Story
              </h2>
              <h2 className="lg:text-4xl text-xl font-bold lg:mt-5 mt-3 lg:leading-[65px] leading-[42px]">
                Helping Businesses Grow with Smart Digital Marketing
              </h2>
              <div className="space-y-5 mt-4">
                <p className="font-normal text-gray-400 text-base lg:text-lg leading-[30px] w-full ">
                  At KM Analytics Hub, we help businesses worldwide grow their
                  online presence through result-driven digital marketing
                  strategies, advanced analytics, and modern web solutions.
                </p>

                <p className="font-normal text-gray-400 text-base lg:text-lg leading-[30px] w-full">
                  We are a team of experienced digital marketing experts who
                  specialize in creating high-performing campaigns, improving
                  conversion tracking, and helping brands make data-driven
                  business decisions. Our goal is to deliver measurable growth,
                  stronger online visibility, and better customer engagement for
                  every client we work with. We believe that successful
                  marketing is not only about running ads — it is about
                  understanding data, user behavior, and building strategies
                  that generate real business results.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold mt-6">What We Do</h2>
                <div>
                  <h2 className="font-bold text-lg mt-4 text-gray-400">
                    We provide a wide range of digital marketing and analytics
                    services, including:
                  </h2>
                  <ul className="font-normal text-gray-400 text-base lg:text-lg leading-[30px] w-full pl-[18px] list-disc mt-5">
                    <li>Google Ads Management</li>
                    <li>Facebook Ads Management</li>
                    <li>Conversion Tracking Setup</li>
                    <li>Web Analytics Setup</li>
                    <li>Shopify Website Design</li>
                    <li>Facebook Page Management</li>
                  </ul>
                  <p className="font-normal text-gray-400 text-base lg:text-lg leading-[30px] w-full mt-4">
                    Using tools like Google Analytics 4, Meta Pixel, Facebook
                    CAPI, Hotjar, and Microsoft Clarity, we help businesses
                    track performance accurately and optimize their marketing
                    efforts effectively.
                  </p>
                </div>
                <div>
                  <h2 className="text-4xl font-bold mt-6">
                    Why Choose KM Analytics Hub
                  </h2>
                  <ul className="font-normal text-gray-400 text-base lg:text-lg leading-[30px] w-full pl-[18px] list-disc mt-5">
                    <li>Expert digital marketing team</li>
                    <li>Data-driven marketing strategies</li>
                    <li>Worldwide client support</li>
                    <li>Focus on measurable business growth</li>
                    <li>Modern tracking and analytics solutions</li>
                    <li>Professional communication and support</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-4xl font-bold mt-6">Our Mission</h2>
                  <p className="font-normal text-gray-400 text-base lg:text-lg leading-[30px] w-full mt-4">
                    Our mission is to help businesses grow faster with powerful
                    digital marketing, accurate analytics, and smart online
                    strategies that create long-term success.
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

export default About;
