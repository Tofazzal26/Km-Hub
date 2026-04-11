import React from "react";

const LetsTalk = () => {
  return (
    <section className="py-20 bg-[#0f0f11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* LEFT SIDE */}
          <div className="relative">
            <img
              src="/talk.jpg"
              alt="Contact"
              className="w-full h-full min-h-[500px] object-cover rounded-2xl lg:rounded-l-2xl lg:rounded-r-none"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none"></div>

            {/* Title */}
            <h1 className="absolute top-8 left-8 text-white text-3xl md:text-4xl font-bold">
              Let’s Talk
            </h1>

            {/* Contact Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#171718]/90 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-5 text-gray-300">
                  <span className="text-[#3b5ffd] text-xl">📞</span>
                  <h5 className="ml-4 text-sm md:text-base">+8801741362851</h5>
                </div>

                <div className="flex items-center mb-5 text-gray-300">
                  <span className="text-[#3b5ffd] text-xl">✉️</span>
                  <h5 className="ml-4 text-sm md:text-base">
                    kmanalyticshub@gmail.com
                  </h5>
                </div>

                <div className="flex items-center text-gray-300">
                  <span className="text-[#3b5ffd] text-xl">📍</span>
                  <h5 className="ml-4 text-sm md:text-base">
                    Gazipur, Dhaka, Bangladesh
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center items-center text-center p-8 lg:p-12 bg-[#171718] rounded-2xl lg:rounded-r-2xl lg:rounded-l-none">
            <h2 className="text-[#3b5ffd] text-3xl md:text-4xl font-semibold mb-6">
              Send Us A Email
            </h2>

            <p className="text-gray-400 mb-8 max-w-md">
              Have any questions or want to work with us? Click the button below
              to send us an email and we’ll get back to you soon.
            </p>

            <button className="w-full max-w-[300px] h-14 bg-[#3b5ffd] hover:bg-[#2f4de0] hover:scale-105 transition-all duration-300 text-white font-semibold rounded-full cursor-pointer shadow-lg shadow-[#3b5ffd]/30">
              <a href="https://mail.google.com/" target="_blank">
                Send Email
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
