"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { CheckCircle, TrendingUp } from "lucide-react";
import { useParams } from "next/navigation";
import { serviceData } from "@/data/service";

/* ---------------- TYPE ---------------- */

type Service = {
  id: number;
  slug: string;
  head: string;
  image: string;
  heroPlaceholder?: {
    icon: string;
    label: string;
    sub: string;
  };
  descriptionOne?: string;
  skills?: string[];
  about?: {
    title: string;
    description?: string[];
  };
  includes?: {
    title: string;
    items?: {
      icon: string;
      name: string;
      desc: string;
    }[];
  };
  whyUs?: {
    title: string;
    items?: {
      name: string;
      desc: string;
    }[];
  };
};

const ServiceDetails = () => {
  const params = useParams();

  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const service = useMemo<Service | null>(() => {
    if (!id) return null;

    return serviceData.find((item) => String(item.id) === String(id)) || null;
  }, [id]);

  const loading = !id;

  /* ---------------- LOADING ---------------- */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1120] text-white">
        Loading...
      </div>
    );
  }

  /* ---------------- NOT FOUND ---------------- */

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1120] text-white">
        Service not found
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-[#0B1120] text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#f59760]/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* HERO */}
        <div className="py-14 lg:py-20 text-center">
          <button
            className="
              bg-[#f59760]/10
              text-[#f59760]
              border border-[#f59760]/20
              rounded-full
              font-semibold
              px-6 py-2
              text-sm
              hover:bg-[#f59760]
              hover:text-white
              transition-all duration-300
            "
          >
            {service.heroPlaceholder?.label || "PREMIUM SERVICE"}
          </button>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 leading-tight max-w-4xl mx-auto">
            {service.head}
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 grid-cols-1 pb-14 lg:pb-20 gap-8 lg:gap-10">
          {/* LEFT */}
          <div>
            {/* IMAGE */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={service.image}
                width={650}
                height={390}
                alt={service.head}
                className="
                  rounded-3xl
                  w-full
                  h-[250px]
                  sm:h-[350px]
                  lg:h-[390px]
                  object-cover
                  transition duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* ABOUT */}
            <div
              className="
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                rounded-3xl
                p-5 lg:p-7
                mt-8 lg:mt-10
              "
            >
              <h2 className="text-2xl font-semibold flex items-center gap-3">
                <TrendingUp className="text-[#f59760]" />

                {service.about?.title}
              </h2>

              <div className="space-y-5 mt-6">
                {service.about?.description?.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-gray-300 leading-[30px] text-sm lg:text-base"
                  >
                    {text}
                  </p>
                ))}
              </div>

              <h2 className="text-lg my-6 font-semibold text-white leading-[35px]">
                {service.descriptionOne}
              </h2>

              <ol className="space-y-3">
                {service.skills?.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-[#f59760] text-xl">•</span>

                    <span>{skill}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* INCLUDES */}
            <div
              className="
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                rounded-3xl
                p-5 lg:p-7
              "
            >
              <h4 className="text-2xl font-semibold">
                {service.includes?.title}
              </h4>

              <div className="my-6 space-y-4">
                {service.includes?.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="
                      flex items-start gap-4
                      bg-[#111827]
                      border border-white/10
                      p-4
                      rounded-2xl
                      hover:border-[#f59760]/30
                      hover:bg-white/5
                      transition-all duration-300
                    "
                  >
                    <span className="text-2xl">{item.icon}</span>

                    <div>
                      <h2 className="font-semibold text-lg">{item.name}</h2>

                      <p className="text-sm text-gray-400 mt-1 leading-[25px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WHY US */}
            <div
              className="
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                rounded-3xl
                p-5 lg:p-7
                mt-6
              "
            >
              <h4 className="text-2xl font-semibold">{service.whyUs?.title}</h4>

              <div className="my-6 space-y-4">
                {service.whyUs?.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="
                      flex items-start gap-4
                      bg-[#111827]
                      border border-white/10
                      p-4
                      rounded-2xl
                      hover:border-[#f59760]/30
                      hover:bg-white/5
                      transition-all duration-300
                    "
                  >
                    <CheckCircle className="text-green-400 mt-1" />

                    <div>
                      <h2 className="font-semibold text-lg">{item.name}</h2>

                      <p className="text-sm text-gray-400 mt-1 leading-[25px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
