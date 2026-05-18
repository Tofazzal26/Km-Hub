"use client";

import Image from "next/image";
import React, { useEffect, useMemo } from "react";
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

  /* ✅ NO STATE for loading or service */

  const service = useMemo<Service | null>(() => {
    if (!id) return null;

    return serviceData.find((item) => String(item.id) === String(id)) || null;
  }, [id]);

  const loading = !id;

  /* ---------------- LOADING ---------------- */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  /* ---------------- NOT FOUND ---------------- */

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Service not found
      </div>
    );
  }

  return (
    <div className="bg-[#0f0f11] text-white">
      <div className="container mx-auto">
        {/* HERO */}
        <div className="py-16 text-center">
          <button className="bg-[#173143] text-[#00d3f3] border-[#134559] border-[1px] rounded-full font-semibold px-6 py-2 text-sm">
            {service.heroPlaceholder?.label || "PREMIUM SERVICE"}
          </button>

          <h2 className="text-4xl font-semibold mt-4">{service.head}</h2>
        </div>

        <div className="grid grid-cols-4 pb-20 gap-10">
          {/* LEFT */}
          <div className="col-span-2">
            <Image
              src={service.image}
              width={650}
              height={390}
              alt={service.head}
              className="rounded-xl w-[650px] h-[390px]"
            />

            <div className="border-[#283444] border-[1px] rounded-xl p-5 w-[650px] mt-14">
              <h2 className="text-2xl font-semibold flex items-center gap-3">
                <TrendingUp color="#07a7c3" />
                {service.about?.title}
              </h2>

              {service.about?.description?.map((text, idx) => (
                <p key={idx} className="font-semibold text-gray-300 mt-5">
                  {text}
                </p>
              ))}

              <h2 className="text-lg my-5 font-semibold">
                {service.descriptionOne}
              </h2>

              <ol>
                {service.skills?.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-3xl">•</span>
                    {skill}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-2">
            <div className="border-[#283444] border-[1px] rounded-xl p-5">
              <h4 className="text-lg font-semibold">
                {service.includes?.title}
              </h4>

              <div className="my-5 space-y-3">
                {service.includes?.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[#222d3d] p-4 rounded-lg"
                  >
                    <span className="text-xl">{item.icon}</span>

                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WHY US */}
            <div className="border-[#283444] border-[1px] rounded-xl p-5 mt-6">
              <h4 className="text-lg font-semibold">{service.whyUs?.title}</h4>

              <div className="my-5 space-y-3">
                {service.whyUs?.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[#222d3d] p-4 rounded-lg"
                  >
                    <CheckCircle color="#05df72" />

                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-300">{item.desc}</p>
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
