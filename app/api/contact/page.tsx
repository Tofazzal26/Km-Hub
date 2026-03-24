import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="relative w-full h-[300px] lg:h-[516px] text-white bg-cover bg-no-repeat bg-center bg-[url('/contact.avif')]">
        <div className="w-full h-full flex flex-col justify-center items-center lg:px-0 px-2 absolute inset-0 bg-gray-900/70">
          {/* <h2 className="lg:text-[100px] text-[50px] font-medium">About</h2> */}
          <div className="flex lg:flex-row flex-col gap-5 lg:mt-6 mt-3">
            <button className="text-sm lg:text-base font-bold lg:px-10 h-[50px] lg:h-[65px] px-8 rounded-[40px] bg-[#3b5ffd] text-white">
              GET STARTED
            </button>
            <h2 className="lg:text-[23px] text-lg w-full lg:w-[550px]">
              Our mission is to create visually stunning digital landscapes,
              connecting you with your audience on a profound level.
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#0f0f11] py-10">
          <div className="container mx-auto px-4">
            {/* FULL WIDTH SECTION */}
            <div className="w-full bg-[#16161a] rounded-xl border border-white/5 p-6 md:p-10">
              {/* HEADER */}
              <div className="mb-6 lg:mb-12 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  Contact Us
                </h2>
                <p className="text-gray-400 mt-1 text-sm md:text-base">
                  Send your message — we’ll reply as soon as possible
                </p>
              </div>

              {/* FORM */}
              <form className="space-y-5">
                {/* NAME */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-4 rounded-md bg-[#0f0f11] text-white border border-white/10 focus:outline-none focus:border-[#3b5ffd] focus:ring-1 focus:ring-[#3b5ffd] transition"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-4 rounded-md bg-[#0f0f11] text-white border border-white/10 focus:outline-none focus:border-[#3b5ffd] focus:ring-1 focus:ring-[#3b5ffd] transition"
                  />
                </div>

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-4 rounded-md bg-[#0f0f11] text-white border border-white/10 focus:outline-none focus:border-[#3b5ffd] focus:ring-1 focus:ring-[#3b5ffd] transition"
                />

                {/* SUBJECT */}
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-4 rounded-md bg-[#0f0f11] text-white border border-white/10 focus:outline-none focus:border-[#3b5ffd] focus:ring-1 focus:ring-[#3b5ffd] transition"
                />

                {/* MESSAGE */}
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-4 rounded-md bg-[#0f0f11] text-white border border-white/10 focus:outline-none focus:border-[#3b5ffd] focus:ring-1 focus:ring-[#3b5ffd] transition resize-none"
                ></textarea>

                {/* BUTTON */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-4 rounded-md bg-[#3b5ffd] text-white font-medium hover:bg-[#2f4de0] transition w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
