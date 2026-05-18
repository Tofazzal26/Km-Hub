"use client";

import { Mail, Phone, MessageCircle, Copy, User, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#0f0f11]">
      {/* Contact Section */}
      <section className="w-full px-4 py-14 sm:px-6 md:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-[#1b2940] bg-[#06101f] px-4 py-10 shadow-[0_0_80px_rgba(0,0,0,0.45)] sm:px-6 md:px-10 lg:px-12 lg:py-16">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[4px] text-cyan-400 sm:text-sm">
              Get In Touch
            </p>

            <h2 className="mx-auto max-w-5xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s Build Something Great Together
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
              Have a project in mind or just want to say hello? We&apos;d love
              to hear from you. Fill out the form or use the contact details
              below.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">
            {/* Left Card */}
            <div className="rounded-2xl border border-[#22314c] bg-[#0d1729] p-5 shadow-xl sm:p-7 lg:p-8">
              <h3 className="mb-8 text-2xl font-bold text-white sm:text-3xl">
                Contact Details
              </h3>

              <div className="space-y-10">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Phone className="h-6 w-6 text-cyan-400 sm:h-7 sm:w-7" />
                  </div>

                  <div className="w-full">
                    <h4 className="text-xl font-semibold text-cyan-400 sm:text-2xl">
                      Phone Numbers
                    </h4>

                    <div className="mt-5 space-y-6">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 sm:text-xs">
                          Tongi, Gazipur, Bangladesh.
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <span className="text-lg text-gray-200 sm:text-2xl">
                            +8801410206531
                          </span>

                          <Copy className="h-4 w-4 cursor-pointer text-gray-400" />
                        </div>

                        <p className="mt-2 text-xs font-medium text-green-400 sm:text-sm">
                          (WhatsApp Available +88)
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 sm:text-xs">
                          BANGLADESH
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <span className="text-lg text-gray-200 sm:text-2xl">
                            +8801410206531
                          </span>

                          <Copy className="h-4 w-4 cursor-pointer text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-6 w-6 text-cyan-400 sm:h-7 sm:w-7" />

                  <div className="w-full overflow-hidden">
                    <h4 className="text-xl font-semibold text-cyan-400 sm:text-2xl">
                      Email
                    </h4>

                    <p className="mt-3 break-words text-base text-gray-200 sm:text-xl md:text-2xl">
                      kmanalyticshub@gmail.com
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <MessageCircle className="mt-1 h-6 w-6 text-cyan-400 sm:h-7 sm:w-7" />

                  <div>
                    <h4 className="text-xl font-semibold text-cyan-400 sm:text-2xl">
                      WhatsApp
                    </h4>

                    <p className="mt-3 text-base text-gray-200 sm:text-xl md:text-2xl">
                      Click to Chat on WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-2xl border border-[#22314c] bg-[#0d1729] p-5 shadow-xl sm:p-7 lg:p-8">
              <h3 className="mb-8 text-2xl font-bold text-white sm:text-3xl">
                Send a Email
              </h3>

              <form className="space-y-5">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

                  <input
                    type="text"
                    placeholder="Md Maruf"
                    className="h-14 w-full rounded-xl border border-cyan-400/70 bg-[#091425] pl-12 pr-4 text-base text-white outline-none placeholder:text-gray-500 focus:border-cyan-400 sm:h-16 sm:text-lg"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

                  <input
                    type="email"
                    placeholder="kmanalyticshub@gmail.com"
                    className="h-14 w-full rounded-xl border border-[#2a3954] bg-[#091425] pl-12 pr-14 text-base text-white outline-none placeholder:text-gray-500 focus:border-cyan-400 sm:h-16 sm:text-lg"
                  />

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md border border-gray-600 p-1">
                    <Mail className="h-4 w-4 text-green-400" />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    rows={6}
                    placeholder="Tell us about your project, goals, and timeline. We're here to help bring your vision to life!"
                    className="w-full rounded-xl border border-[#2a3954] bg-[#091425] p-4 text-base text-white outline-none placeholder:text-gray-500 focus:border-cyan-400 sm:p-5 sm:text-lg"
                  />

                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <div className="rounded-full bg-white p-1">
                      <MessageCircle className="h-4 w-4 text-green-500" />
                    </div>

                    <div className="rounded-full bg-white px-[6px] py-[2px]">
                      <span className="text-xs font-bold text-green-600">
                        G
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.01] sm:h-16 sm:text-lg"
                >
                  <Send className="h-5 w-5" />
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
