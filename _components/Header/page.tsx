"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Service",
      path: "/api/service",
    },
    {
      name: "About",
      path: "/api/about",
    },
    {
      name: "Contact",
      path: "/api/contact",
    },
  ];

  return (
    <header
      className="
        sticky top-0 z-50
        bg-[#0B1120]/90
        backdrop-blur-xl
        border-b border-white/10
      "
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#f59760]/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 relative">
        <nav className="flex items-center justify-between h-[80px]">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="
                p-2 rounded-xl
                bg-white/5
                border border-white/10
                group-hover:border-[#f59760]/40
                transition-all duration-300
              "
            >
              <Image
                width={40}
                height={40}
                className="w-auto h-10 sm:h-11"
                src="/NewLogo.png"
                alt="logo"
              />
            </div>

            <div>
              <h2
                className="
                  text-white
                  text-lg sm:text-2xl
                  uppercase
                  font-bold
                  tracking-wide
                "
              >
                Analytics Hub
              </h2>

              <p className="text-xs text-gray-400 hidden sm:block">
                Digital Growth Agency
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive = path === item.path;

              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`
                    relative
                    px-5 py-2.5
                    rounded-full
                    text-sm font-semibold
                    uppercase tracking-wide
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#f59760] text-white shadow-lg shadow-[#f59760]/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              w-11 h-11
              rounded-xl
              bg-white/5
              border border-white/10
              flex items-center justify-center
              text-white
              hover:border-[#f59760]/40
              transition-all duration-300
            "
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden
            absolute left-0 top-[90px]
            w-full px-4
            transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-5"
            }
          `}
        >
          <div
            className="
              bg-[#111827]/95
              backdrop-blur-2xl
              border border-white/10
              rounded-3xl
              p-5
              shadow-2xl
            "
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => {
                const isActive = path === item.path;

                return (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      px-5 py-4
                      rounded-2xl
                      text-sm font-semibold
                      uppercase tracking-wide
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#f59760] text-white"
                          : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
