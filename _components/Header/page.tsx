"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const activeClass = "text-[#93bbef]";
  const normalClass = "text-white";

  return (
    <div>
      <nav className="relative bg-[#0f0f11] shadow">
        <div className="container lg:px-0 px-2 py-6 mx-auto md:flex md:justify-between md:items-center">
          {/* Logo & Mobile Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                width={24}
                height={24}
                className="w-auto h-8 sm:h-8"
                src="/km.png"
                alt="logo"
              />
              <h2 className="text-xl uppercase font-normal text-white">
                Analytics Hub
              </h2>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-200 hover:text-gray-400 focus:outline-none"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#1f2937]
            md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:flex md:items-center 
            text-[14px] font-bold uppercase ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                href="/"
                className={`my-2 md:mx-4 md:my-0 transition-colors duration-300 hover:text-[#93bbef] ${
                  path === "/" ? activeClass : normalClass
                }`}
              >
                Home
              </Link>

              <Link
                href="/api/work"
                className={`my-2 md:mx-4 md:my-0 transition-colors duration-300 hover:text-[#93bbef] ${
                  path === "/api/work" ? activeClass : normalClass
                }`}
              >
                Work
              </Link>

              <Link
                href="/api/about"
                className={`my-2 md:mx-4 md:my-0 transition-colors duration-300 hover:text-[#93bbef] ${
                  path === "/api/about" ? activeClass : normalClass
                }`}
              >
                About
              </Link>

              <Link
                href="/api/contact"
                className={`my-2 md:mx-4 md:my-0 transition-colors duration-300 hover:text-[#93bbef] ${
                  path === "/api/contact" ? activeClass : normalClass
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
