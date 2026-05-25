"use client";
import { Shield, CheckCircle, Headphones, MessageCircle } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="bg-[#0B1120] border-b border-[#273141] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#f59760]/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#f59760]/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {/* Secure Payments */}
          <div
            className="
              group
              bg-white/5
              border border-white/10
              rounded-2xl
              p-5
              hover:border-[#f59760]/40
              hover:-translate-y-1
              transition-all
              duration-300
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#f59760]/10 flex items-center justify-center group-hover:bg-[#f59760] transition duration-300">
                <Shield className="w-7 h-7 text-[#f59760] group-hover:text-white" />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  Secure Payments
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  100% safe transactions
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="flex items-center gap-2 mt-5 flex-wrap">
              <span className="bg-white text-black text-[11px] px-3 py-1 rounded-md font-semibold">
                VISA
              </span>

              <span className="bg-[#f59760] text-white text-[11px] px-3 py-1 rounded-md font-semibold">
                MC
              </span>

              <span className="bg-yellow-400 text-black text-[11px] px-3 py-1 rounded-md font-semibold">
                PayPal
              </span>
            </div>
          </div>

          {/* Quality */}
          <div
            className="
              group
              bg-white/5
              border border-white/10
              rounded-2xl
              p-5
              hover:border-[#f59760]/40
              hover:-translate-y-1
              transition-all
              duration-300
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#f59760]/10 flex items-center justify-center group-hover:bg-[#f59760] transition duration-300">
                <CheckCircle className="w-7 h-7 text-[#f59760] group-hover:text-white" />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  Quality Guaranteed
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Premium service quality
                </p>
              </div>
            </div>

            <div className="w-full h-[2px] bg-gradient-to-r from-[#f59760]/40 to-transparent mt-6"></div>
          </div>

          {/* Support */}
          <div
            className="
              group
              bg-white/5
              border border-white/10
              rounded-2xl
              p-5
              hover:border-[#f59760]/40
              hover:-translate-y-1
              transition-all
              duration-300
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#f59760]/10 flex items-center justify-center group-hover:bg-[#f59760] transition duration-300">
                <Headphones className="w-7 h-7 text-[#f59760] group-hover:text-white" />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  24/7 Support
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Always here to help
                </p>
              </div>
            </div>

            <div className="w-full h-[2px] bg-gradient-to-r from-[#f59760]/40 to-transparent mt-6"></div>
          </div>

          {/* Live Chat */}
          <div
            className="
              group
              bg-white/5
              border border-white/10
              rounded-2xl
              p-5
              hover:border-[#f59760]/40
              hover:-translate-y-1
              transition-all
              duration-300
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#f59760]/10 flex items-center justify-center group-hover:bg-[#f59760] transition duration-300">
                <MessageCircle className="w-7 h-7 text-[#f59760] group-hover:text-white" />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">Live Chat</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Fast response anytime
                </p>
              </div>
            </div>

            <div className="w-full h-[2px] bg-gradient-to-r from-[#f59760]/40 to-transparent mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
