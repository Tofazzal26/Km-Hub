import React from "react";

const LetsTalk = () => {
  return (
    <section className="py-20 bg-[#0f0f11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Side */}
          <div className="relative">
            <img
              src="/telk.png"
              alt="Contact"
              className="w-full h-full min-h-[500px] object-cover rounded-2xl lg:rounded-l-2xl lg:rounded-r-none"
            />

            <div className="absolute inset-0 bg-black/50 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none"></div>

            <h1 className="absolute top-8 left-8 text-white text-3xl md:text-4xl font-bold">
              Let’s Talk
            </h1>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#171718]/90 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-5 text-gray-300">
                  <span className="text-[#3b5ffd] text-xl">📞</span>
                  <h5 className="ml-4 text-sm md:text-base">470-601-1911</h5>
                </div>

                <div className="flex items-center mb-5 text-gray-300">
                  <span className="text-[#3b5ffd] text-xl">✉️</span>
                  <h5 className="ml-4 text-sm md:text-base">
                    example@gmail.com
                  </h5>
                </div>

                <div className="flex items-center text-gray-300">
                  <span className="text-[#3b5ffd] text-xl">📍</span>
                  <h5 className="ml-4 text-sm md:text-base">
                    654 Sycamore Avenue, WA 76543
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-[#171718] p-6 md:p-10 rounded-2xl lg:rounded-r-2xl lg:rounded-l-none border border-white/10 shadow-lg">
            <h2 className="text-[#3b5ffd] text-3xl md:text-4xl font-semibold mb-8">
              Send Us A Message
            </h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full h-12 mb-5 rounded-full bg-[#0f0f11] border border-white/10 text-gray-300 pl-4 focus:outline-none focus:border-[#3b5ffd]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 mb-5 rounded-full bg-[#0f0f11] border border-white/10 text-gray-300 pl-4 focus:outline-none focus:border-[#3b5ffd]"
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full h-12 mb-5 rounded-full bg-[#0f0f11] border border-white/10 text-gray-300 pl-4 focus:outline-none focus:border-[#3b5ffd]"
            />

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full mb-6 rounded-xl bg-[#0f0f11] border border-white/10 text-gray-300 p-4 focus:outline-none focus:border-[#3b5ffd]"
            ></textarea>

            <button className="w-full h-14 bg-[#3b5ffd] hover:bg-[#2f4de0] transition-all duration-300 text-white font-semibold rounded-full cursor-pointer shadow-lg shadow-[#3b5ffd]/30">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
