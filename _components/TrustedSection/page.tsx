import React from "react";
import Image from "next/image";

const TrustedSection = () => {
  const logos = [
    { src: "/brand1.webp", width: "w-32 md:w-40" },
    { src: "/brand1.webp", width: "w-36 md:w-44" },
    { src: "/brand1.webp", width: "w-32 md:w-40" },
    { src: "/brand1.webp", width: "w-48 md:w-56" },
    { src: "/brand1.webp", width: "w-44 md:w-52" },
    { src: "/brand1.webp", width: "w-28 md:w-32" },
    { src: "/brand1.webp", width: "w-48 md:w-56" },
  ];
  return (
    <div>
      <section className="bg-black py-16 px-4 flex flex-col items-center justify-center">
        {/* শিরোনাম */}
        <h2 className="text-white text-lg md:text-2xl font-bold tracking-[0.2em] mb-12 uppercase text-center">
          Trusted & Recognized By
        </h2>

        {/* মেইন কন্টেইনার */}
        <div className="max-w-6xl w-full flex flex-col items-center gap-6">
          {/* প্রথম সারি */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {logos.slice(0, 4).map((logo, index) => (
              <div
                key={index}
                className={`${logo.width} h-20 md:h-24 bg-[#111111] border border-gray-800 rounded-xl flex items-center justify-center p-4 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer shadow-lg`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src}
                    alt={`Brand ${index + 1}`}
                    fill
                    className="object-contain" // ইমেজ যাতে স্ট্রেচ না হয়ে সুন্দরভাবে ফিট হয়
                  />
                </div>
              </div>
            ))}
          </div>

          {/* দ্বিতীয় সারি */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {logos.slice(4).map((logo, index) => (
              <div
                key={index}
                className={`${logo.width} h-20 md:h-24 bg-[#111111] border border-gray-800 rounded-xl flex items-center justify-center p-4 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer shadow-lg`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src}
                    alt={`Brand ${index + 5}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedSection;
