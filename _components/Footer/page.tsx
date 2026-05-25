"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B1120] text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#f59760]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      {/* Top Border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f59760]/40 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        {/* CTA SECTION */}
        <div className="py-16 border-b border-white/10">
          <div className="flex lg:flex-row flex-col gap-10 items-center justify-between">
            <div>
              <span className="inline-block px-4 py-2 rounded-full border border-[#273141] bg-white/5 text-[#f59760] text-sm uppercase tracking-wider">
                Let’s Grow Together
              </span>

              <h2 className="lg:text-6xl md:text-5xl text-3xl font-bold leading-tight mt-6 lg:max-w-[850px]">
                Scale Your Business
                <span className="text-[#f59760]"> With Confidence.</span>
              </h2>

              <p className="text-gray-400 mt-6 max-w-2xl leading-[30px]">
                We help businesses grow smarter with powerful analytics,
                conversion tracking, and high-performing marketing strategies.
              </p>
            </div>

            {/* Button */}
            <Link href="/api/contact">
              <button
                className="
                  group
                  flex items-center gap-3
                  bg-[#f59760]
                  hover:bg-[#ff7f32]
                  px-8 py-4
                  rounded-2xl
                  text-lg
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                  shadow-lg
                  hover:shadow-orange-500/30
                  whitespace-nowrap
                "
              >
                Start Your Project
                <ArrowUpRight className="group-hover:rotate-45 transition duration-300" />
              </button>
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 py-16">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-[#f59760]/20 border border-[#f59760]/20 flex items-center justify-center text-2xl font-bold text-[#f59760]">
                KM
              </div>

              <div>
                <h2 className="text-2xl font-bold">KM Analytics</h2>
                <p className="text-gray-400 text-sm">Marketing Agency</p>
              </div>
            </div>

            <p className="text-gray-400 mt-6 leading-[30px]">
              Data-driven marketing solutions designed to improve performance,
              increase conversions, and help your business grow faster.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=61586401389404"
                target="_blank"
                className="
                  w-12 h-12 rounded-xl
                  bg-white/5 border border-white/10
                  flex items-center justify-center
                  hover:bg-[#f59760]
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="
                  w-12 h-12 rounded-xl
                  bg-white/5 border border-white/10
                  flex items-center justify-center
                  hover:bg-[#f59760]
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="
                  w-12 h-12 rounded-xl
                  bg-white/5 border border-white/10
                  flex items-center justify-center
                  hover:bg-[#f59760]
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-gray-400">
              {[
                "About Us",
                "Services",
                "Case Studies",
                "Privacy Policy",
                "Contact Us",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="/"
                    className="
                      inline-flex items-center gap-2
                      hover:text-[#f59760]
                      transition duration-300
                      group
                    "
                  >
                    <span className="w-0 h-[2px] bg-[#f59760] group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Contact</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f59760]/10 flex items-center justify-center">
                  <Phone className="text-[#f59760]" size={20} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <h4 className="text-white font-medium">+8801741362851</h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f59760]/10 flex items-center justify-center">
                  <Mail className="text-[#f59760]" size={20} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <h4 className="text-white font-medium break-all">
                    kmanalyticshub@gmail.com
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f59760]/10 flex items-center justify-center">
                  <MapPin className="text-[#f59760]" size={20} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <h4 className="text-white font-medium">
                    Tongi, Gazipur, Bangladesh
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Secure Payments</h3>

            <div
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                hover:border-[#f59760]/40
                transition duration-300
              "
            >
              <Image
                src="/visa.png"
                width={500}
                height={120}
                alt="payment"
                className="w-full h-auto object-contain"
              />

              <p className="text-gray-400 text-sm leading-[28px] mt-5">
                Safe and secure payment methods supported worldwide for smooth
                and trusted transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex md:flex-row flex-col gap-4 items-center justify-between">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {year} KM Analytics Hub. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link
              href="/"
              className="hover:text-[#f59760] transition duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="hover:text-[#f59760] transition duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
