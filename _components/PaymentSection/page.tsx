import React from "react";
import { Shield, CheckCircle, Headphones, MessageCircle } from "lucide-react";
const PaymentSection = () => {
  return (
    <div>
      <div className="bg-[#172030] border-b border-gray-800 text-gray-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap items-center justify-center md:justify-between gap-4">
          {/* Secure Payments */}
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="text-lg">Secure Payments</span>

            {/* Cards */}
            <div className="flex items-center gap-1 ml-2">
              <span className="bg-white text-black text-[10px] px-2 py-[2px] rounded">
                VISA
              </span>
              <span className="bg-red-500 text-white text-[10px] px-2 py-[2px] rounded">
                MC
              </span>
              <span className="bg-yellow-400 text-black text-[10px] px-2 py-[2px] rounded">
                PayPal
              </span>
            </div>
          </div>

          {/* Quality */}
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-cyan-400" />
            <span className="text-lg">Quality Guaranteed</span>
          </div>

          {/* Support */}
          <div className="flex items-center gap-2">
            <Headphones className="w-6 h-6 text-cyan-400" />
            <span className="text-lg">24/7 Support</span>
          </div>

          {/* Chat */}
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-cyan-400" />
            <span className="text-lg">Live Chat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
