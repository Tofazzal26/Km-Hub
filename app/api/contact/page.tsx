"use client";

import { Mail, Phone, MessageCircle, Copy } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative overflow-hidden bg-[#0B1120]">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#f59760]/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      {/* Contact Section */}
      <section className="relative z-10 w-full px-4 py-14 sm:px-6 md:px-10 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-10 shadow-[0_0_80px_rgba(0,0,0,0.45)] sm:px-6 md:px-10 lg:px-12 lg:py-16">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-[#f59760] sm:text-sm">
              Get In Touch
            </p>

            <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s Build Something Great Together
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
              Have a project in mind or just want to say hello? We&apos;d love
              to hear from you. Reach out using the contact details below.
            </p>
          </div>

          {/* Contact Card */}
          <div className="mt-12">
            <div className="rounded-[28px] border border-white/10 bg-[#111827]/80 p-5 shadow-xl backdrop-blur-xl sm:p-7 lg:p-10">
              <h3 className="mb-10 text-2xl font-bold text-white sm:text-3xl text-center">
                Contact Details
              </h3>

              {/* RESPONSIVE FLEX */}
              <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-14">
                {/* Phone */}
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="mt-1 rounded-xl bg-[#f59760]/10 p-3 shrink-0">
                    <Phone className="h-6 w-6 text-[#f59760]" />
                  </div>

                  <div className="w-full min-w-0">
                    <h4 className="text-xl font-semibold text-[#f59760] sm:text-2xl">
                      Phone Numbers
                    </h4>

                    <div className="mt-5 space-y-6">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 sm:text-xs">
                          Tongi, Gazipur, Bangladesh
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <span className="text-lg text-gray-200 sm:text-2xl break-all">
                            +8801410206531
                          </span>

                          <Copy className="h-4 w-4 cursor-pointer text-gray-400 hover:text-[#f59760] transition shrink-0" />
                        </div>

                        <p className="mt-2 text-xs font-medium text-green-400 sm:text-sm">
                          (WhatsApp Available +88)
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 sm:text-xs">
                          Bangladesh
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <span className="text-lg text-gray-200 sm:text-2xl break-all">
                            +8801410206531
                          </span>

                          <Copy className="h-4 w-4 cursor-pointer text-gray-400 hover:text-[#f59760] transition shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email + WhatsApp */}
                <div className="flex flex-col gap-10 flex-1 min-w-0">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-[#f59760]/10 p-3 shrink-0">
                      <Mail className="h-6 w-6 text-[#f59760]" />
                    </div>

                    <div className="w-full min-w-0 overflow-hidden">
                      <h4 className="text-xl font-semibold text-[#f59760] sm:text-2xl">
                        Email
                      </h4>

                      <p className="mt-3 break-all text-base text-gray-200 sm:text-xl md:text-2xl">
                        kmanalyticshub@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-[#f59760]/10 p-3 shrink-0">
                      <MessageCircle className="h-6 w-6 text-[#f59760]" />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-[#f59760] sm:text-2xl">
                        WhatsApp
                      </h4>

                      <p className="mt-3 text-base text-gray-200 sm:text-xl md:text-2xl break-words">
                        Click to Chat on WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
