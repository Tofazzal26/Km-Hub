import React from "react";
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";

const LetsTalk = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] py-20 px-3 sm:px-5 lg:px-0">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#f59760]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* TOP TEXT */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full border border-[#273141] bg-white/5 text-[#f59760] text-sm uppercase tracking-wider">
            Contact Us
          </span>

          <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold mt-6">
            Let’s Build Something
            <span className="text-[#f59760]"> Amazing Together</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-[30px]">
            Ready to grow your business with smart marketing strategies and
            analytics? Reach out today and let’s discuss your next big idea.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-[30px] border border-white/10 backdrop-blur-xl bg-white/5">
          {/* LEFT SIDE */}
          <div className="relative group overflow-hidden min-h-[650px]">
            {/* Background Image */}
            <img
              src="/talk.jpg"
              alt="Contact"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/70 to-[#020817]/20"></div>

            {/* Floating Blur */}
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#f59760]/20 blur-[100px] rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-12">
              {/* Top */}
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#f59760]/20 border border-[#f59760]/30 flex items-center justify-center backdrop-blur-md">
                  <MessageCircle className="text-[#f59760]" size={30} />
                </div>

                <h1 className="text-white text-4xl lg:text-5xl font-bold mt-8 leading-tight">
                  Let’s Talk About Your Next Project
                </h1>

                <p className="text-gray-300 mt-6 leading-[30px] max-w-lg">
                  Whether you need marketing strategy, analytics solutions, or
                  campaign optimization — we’re here to help you achieve real
                  business growth.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-5 mt-12">
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f59760]/40 transition duration-300 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-xl bg-[#f59760]/20 flex items-center justify-center">
                    <Phone className="text-[#f59760]" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Phone Number</p>
                    <h5 className="text-white font-medium">+8801741362851</h5>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f59760]/40 transition duration-300 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-xl bg-[#f59760]/20 flex items-center justify-center">
                    <Mail className="text-[#f59760]" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Email Address</p>
                    <h5 className="text-white font-medium break-all">
                      kmanalyticshub@gmail.com
                    </h5>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f59760]/40 transition duration-300 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-xl bg-[#f59760]/20 flex items-center justify-center">
                    <MapPin className="text-[#f59760]" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <h5 className="text-white font-medium">
                      Gazipur, Dhaka, Bangladesh
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center p-8 lg:p-14 bg-[#111827]/80">
            <span className="inline-block w-fit px-4 py-2 rounded-full border border-[#273141] bg-white/5 text-[#f59760] text-sm uppercase tracking-wider">
              Send Message
            </span>

            <h2 className="text-white text-4xl font-bold mt-6 leading-tight">
              Have a Project in Mind?
            </h2>

            <p className="text-gray-400 mt-5 leading-[30px] max-w-lg">
              We’d love to hear about your business goals and help you create
              smarter marketing strategies with measurable results.
            </p>

            {/* Form */}
            <div className="space-y-5 mt-10">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-14 rounded-xl bg-white/5 border border-white/10 px-5 text-white outline-none focus:border-[#f59760] transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-14 rounded-xl bg-white/5 border border-white/10 px-5 text-white outline-none focus:border-[#f59760] transition"
              />

              <textarea
                rows={5}
                placeholder="Write Your Message..."
                className="w-full rounded-xl bg-white/5 border border-white/10 p-5 text-white outline-none focus:border-[#f59760] transition resize-none"
              ></textarea>

              {/* Button */}
              <a
                href="mailto:kmanalyticshub@gmail.com"
                className="inline-flex items-center justify-center gap-3 w-full h-14 rounded-xl bg-[#f59760] hover:bg-[#ff7f32] text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-orange-500/30"
              >
                Send Email
                <ArrowUpRight size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
