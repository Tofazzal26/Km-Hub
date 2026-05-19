import React from "react";
import { Star, BadgeCheck, Headphones, Clock } from "lucide-react";

const WhyChooseUS = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f0f11] text-white py-16 px-4 md:px-10">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#f59760]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#f59760]/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#f59760] font-semibold mb-3 text-sm tracking-[3px] uppercase">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            We Provide The Best <br />
            <span className="text-[#f59760]">Digital Experience</span>
          </h2>

          <p className="text-gray-400 mb-8 max-w-lg leading-[30px]">
            Our platform connects you with top-tier talent to bring your vision
            to life. We prioritize quality, security, and customer satisfaction
            above all else.
          </p>

          {/* Rating */}
          <div
            className="
              flex items-center gap-4
              bg-[#111827]
              border border-white/10
              rounded-2xl
              p-5
              w-fit
              hover:border-[#f59760]/40
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <div className="bg-[#f59760]/10 p-4 rounded-full">
              <Star className="text-[#f59760] w-6 h-6 fill-[#f59760]" />
            </div>

            <div>
              <h4 className="font-semibold text-lg text-white">Top Rated</h4>

              <p className="text-sm text-gray-400">By thousands of clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {/* Card 1 */}
          <div
            className="
              group
              flex items-start gap-4
              bg-[#111827]
              p-6
              rounded-2xl
              border border-white/10
              hover:border-[#f59760]/40
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <div className="bg-[#f59760]/10 p-4 rounded-xl group-hover:bg-[#f59760] transition duration-300">
              <BadgeCheck className="text-[#f59760] group-hover:text-white w-6 h-6 transition duration-300" />
            </div>

            <div>
              <h4 className="font-semibold text-xl">Quality Guaranteed</h4>

              <p className="text-gray-400 text-sm mt-2">
                We ensure high quality deliverables.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="
              group
              flex items-start gap-4
              bg-[#111827]
              p-6
              rounded-2xl
              border border-white/10
              hover:border-[#f59760]/40
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <div className="bg-[#f59760]/10 p-4 rounded-xl group-hover:bg-[#f59760] transition duration-300">
              <Headphones className="text-[#f59760] group-hover:text-white w-6 h-6 transition duration-300" />
            </div>

            <div>
              <h4 className="font-semibold text-xl">24/7 Support</h4>

              <p className="text-gray-400 text-sm mt-2">
                Our team is here to help anytime.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="
              group
              flex items-start gap-4
              bg-[#111827]
              p-6
              rounded-2xl
              border border-white/10
              hover:border-[#f59760]/40
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <div className="bg-[#f59760]/10 p-4 rounded-xl group-hover:bg-[#f59760] transition duration-300">
              <Clock className="text-[#f59760] group-hover:text-white w-6 h-6 transition duration-300" />
            </div>

            <div>
              <h4 className="font-semibold text-xl">On-Time Delivery</h4>

              <p className="text-gray-400 text-sm mt-2">
                Respect for your deadlines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;
