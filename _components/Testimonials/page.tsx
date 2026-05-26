"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Testimonials = () => {
  const data = [
    {
      name: "Michael Carter",
      text: "Working with him completely changed our ad performance. He set up our Facebook Ads and Google Ads campaigns professionally and also fixed our GA4 and conversion tracking issues. The data became much more accurate, and our ROAS improved within weeks. Highly recommended for anyone looking for a reliable digital marketer.",
      country: "USA",
    },
    {
      name: "Sarah Mitchell",
      text: "He helped us set up Facebook CAPI, Google Conversion Tracking, and Microsoft Clarity properly after we struggled with inaccurate reporting for months. Very knowledgeable, responsive, and easy to work with.",
      country: "United Kingdom",
    },
    {
      name: "Daniel Roberts",
      text: "Excellent experience. He managed our Facebook Ads and Google Ads campaigns with a clear strategy and also integrated Hotjar and GA4 for better user behavior analysis. Communication was smooth and professional throughout the project.",
      country: "Canada",
    },
    {
      name: "Emma Wilson",
      text: "One of the best freelancers we’ve worked with for analytics and tracking. He successfully implemented Facebook CAPI and GA4 tracking, which significantly improved our campaign optimization and reporting accuracy.",
      country: "Australia",
    },
    {
      name: "Jason Miller",
      text: "Professional, detail-oriented, and highly skilled in performance marketing. He optimized our Google Ads campaigns and fixed advanced conversion tracking issues that other freelancers could not solve.",
      country: "Germany",
    },
    {
      name: "Olivia Brown",
      text: "Very impressed with his expertise in web analytics and paid advertising. The Hotjar and Microsoft Clarity setup gave us valuable insights into customer behavior, helping us improve conversions.",
      country: "Netherlands",
    },
    {
      name: "Ryan Thompson",
      text: "He knows exactly how to combine Facebook Ads, Google Ads, and analytics tools for maximum performance. Our tracking became much cleaner after implementing Facebook CAPI and GA4 correctly.",
      country: "Singapore",
    },
    {
      name: "Chloe Anderson",
      text: "Great communication and excellent technical knowledge. He handled our Google Conversion Tracking and Facebook Ads setup perfectly. I would definitely work with him again.",
      country: "New Zealand",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#0B1120] py-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f59760]/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

      {/* Heading */}
      <div className="text-white text-center relative z-10">
        <h2 className="uppercase text-2xl">What Our Clients Say</h2>

        <p className="text-gray-400 mt-5 mb-10">
          Real feedback from real clients who trust us with their business
          growth.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{ delay: 3000 }}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-6xl relative z-10"
      >
        {data.map((item, i) => (
          <SwiperSlide
            key={i}
            className="!w-[320px] md:!w-[420px] transition-all duration-300"
          >
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-[#f59760]/40 to-transparent">
              {/* Glass Card */}
              <div className="bg-[#0b1625]/80 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10">
                {/* Header */}
                <div className="flex justify-between mb-4">
                  <div className="">
                    <div>
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <p className="text-xs text-gray-400">{item.country}</p>
                    </div>
                  </div>

                  <span className="text-xs text-gray-500">Jan 9, 2026</span>
                </div>

                {/* Stars */}
                <div className="text-yellow-400 mb-4 text-sm">★★★★★</div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {item.text}
                </p>

                {/* Response */}
                <div className="bg-[#0a1422] border border-white/10 rounded-xl p-4">
                  <p className="text-[#f59760] text-sm mb-1">
                    ↳ Seller’s Response
                  </p>
                  <p className="text-xs text-gray-400">
                    {" Thanks a lot! I'm glad you're happy."}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* pagination style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #6b7280;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #f59760;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
