"use client";
import React from "react";
import { Users, CheckCircle, Star, Clock } from "lucide-react";

const Brand = () => {
  const stats = [
    {
      id: 1,
      icon: <Users size={28} />,
      value: "54+",
      label: "Happy Clients",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      id: 2,
      icon: <CheckCircle size={28} />,
      value: "60+",
      label: "Projects Done",
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      id: 3,
      icon: <Star size={28} />,
      value: "40+",
      label: "5-Star Reviews",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      id: 4,
      icon: <Clock size={28} />,
      value: "1+",
      label: "Years Experience",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#0B1120]">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#f59760]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <section className="w-full py-16 text-white relative z-10">
        <div>
          <h2 className="text-center uppercase text-xl md:text-2xl mb-10 tracking-[4px] text-[#f59760]">
            Trusted & Recognized By
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="
                group
                flex flex-col items-center justify-center
                p-6 rounded-2xl
                backdrop-blur-xl
                bg-white/5
                border border-white/10
                transition-all duration-300
                hover:scale-105
                hover:bg-white/10
                hover:border-[#f59760]/40
                hover:shadow-lg
              "
            >
              <div
                className={`p-3 rounded-full ${item.bg} ${item.color} mb-4 transition-all duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              <h2
                className={`text-3xl font-bold ${item.color} mb-1 transition-all duration-300`}
              >
                {item.value}
              </h2>

              <p className="text-sm text-gray-300 group-hover:text-white transition">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Brand;
