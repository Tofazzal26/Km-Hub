"use client";

import Image from "next/image";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="relative min-h-screen w-full bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#020817]/80 backdrop-blur-[2px]" />

        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#f59760]/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-20 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-14 w-full">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full border border-[#2d3748] bg-white/5 text-sm text-[#f59760] mb-5">
                Digital Marketing Agency
              </span>

              <h1 className="lg:text-[60px] md:text-[48px] text-[36px] leading-tight font-bold text-white">
                Measure Every Click,
                <span className="text-[#f59760]"> Improve Every Campaign</span>
              </h1>

              <p className="text-gray-300 mt-6 text-base sm:text-lg leading-[30px] max-w-[700px] mx-auto lg:mx-0">
                We help businesses plan, run, and optimize their advertising
                campaigns by tracking user behavior, analyzing performance, and
                turning insights into actionable strategies that drive growth
                and increase conversions.
              </p>

              {/* Buttons */}
              <div className="flex sm:flex-row flex-col items-center lg:items-start gap-5 mt-8">
                <Link href="/services">
                  <button className="group bg-[#f59760] hover:bg-[#ff7f32] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30">
                    <span className="flex items-center gap-2">
                      Explore Services
                      <span className="group-hover:translate-x-1 transition duration-300">
                        →
                      </span>
                    </span>
                  </button>
                </Link>

                <Link href="/contact">
                  <button className="border border-[#364153] bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    Send Email
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
                <div>
                  <h3 className="text-3xl font-bold text-white">20+</h3>
                  <p className="text-gray-400">Successful Projects</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">98%</h3>
                  <p className="text-gray-400">Client Satisfaction</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">1+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              {/* Glow */}
              <div className="absolute w-[80%] h-[80%] bg-[#f59760]/20 blur-[100px] rounded-full"></div>

              <Image
                width={700}
                height={700}
                src="/banner.png"
                alt="banner"
                className="
                  relative z-10
                  w-full
                  max-w-[620px]
                  h-auto
                  object-cover
                  rounded-[30px]
                  border border-white/10
                  shadow-2xl
                  hover:scale-[1.02]
                  transition-all
                  duration-500
                "
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Blur */}
        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#020817] to-transparent"></div>
      </div>
    </section>
  );
};

export default Banner;
