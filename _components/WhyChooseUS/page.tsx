import React from "react";
import { Star, BadgeCheck, Headphones, Clock } from "lucide-react";
const WhyChooseUS = () => {
  return (
    <div>
      <section className="bg-[#0f0f11] text-white py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div>
            <p className="text-cyan-400 font-semibold mb-3 text-sm tracking-wide">
              WHY CHOOSE US
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              We Provide The Best <br />
              <span className="text-cyan-400">Digital Experience</span>
            </h2>

            <p className="text-gray-400 mb-8 max-w-lg">
              Our platform connects you with top-tier talent to bring your
              vision to life. We prioritize quality, security, and customer
              satisfaction above all else.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="bg-[#1f2937] p-3 rounded-full">
                <Star className="text-yellow-400 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Top Rated</h4>
                <p className="text-sm text-gray-400">By thousands of clients</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">
            {/* Card 1 */}
            <div className="flex items-start gap-4 bg-[#111827] p-5 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
              <div className="bg-cyan-500/20 p-3 rounded-lg">
                <BadgeCheck className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Quality Guaranteed</h4>
                <p className="text-gray-400 text-sm">
                  We ensure high quality deliverables.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 bg-[#111827] p-5 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
              <div className="bg-cyan-500/20 p-3 rounded-lg">
                <Headphones className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">24/7 Support</h4>
                <p className="text-gray-400 text-sm">
                  Our team is here to help anytime.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 bg-[#111827] p-5 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
              <div className="bg-cyan-500/20 p-3 rounded-lg">
                <Clock className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">On-Time Delivery</h4>
                <p className="text-gray-400 text-sm">
                  Respect for your deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUS;
