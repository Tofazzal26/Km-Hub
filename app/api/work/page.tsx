"use client";

import { useState } from "react";
import type { ComponentType } from "react";

import FacebookAd from "@/_components/OurService/facebookAd";

type Tab = {
  id: number;
  title: string;
  Component: ComponentType;
};

const tabs: Tab[] = [
  {
    id: 1,
    title: "Facebook Ads",
    Component: FacebookAd,
  },
  {
    id: 2,
    title: "Facebook CAM",
    Component: () => (
      <p className="text-gray-300">
        Complete Facebook Campaign Management service.
      </p>
    ),
  },
  {
    id: 3,
    title: "GIM",
    Component: () => (
      <p className="text-gray-300">Google Integrated Marketing solutions.</p>
    ),
  },
  {
    id: 4,
    title: "Google Connection",
    Component: () => (
      <p className="text-gray-300">Google Tag & Pixel integration service.</p>
    ),
  },
  {
    id: 5,
    title: "GA4",
    Component: () => (
      <p className="text-gray-300">
        Google Analytics 4 full setup and tracking.
      </p>
    ),
  },
  {
    id: 6,
    title: "Microsoft Clarity",
    Component: () => (
      <p className="text-gray-300">
        Microsoft Clarity heatmap & session tracking setup.
      </p>
    ),
  },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState(1);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const ActiveComponent = activeTabData?.Component;

  return (
    <div>
      <div>
        <div className="relative w-full h-[400px] lg:h-[516px] text-white bg-cover bg-no-repeat bg-center bg-[url('/workBanner.jpg')]">
          <div className="w-full h-full flex flex-col justify-center items-center lg:px-0 px-2">
            <h2 className="lg:text-[100px] text-[50px] font-medium">
              Our Work
            </h2>
            <div className="flex lg:flex-row flex-col gap-10 lg:mt-6 mt-3">
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
      </div>
      <div className="bg-[#0f0f11] text-white">
        {/* Tabs Section */}
        <div className="lg:py-32 py-14 container mx-auto px-6">
          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-4 border-b border-gray-700 pb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2 rounded-full lg:text-lg text-sm font-medium 
                transition-all duration-300 ease-in-out
                ${
                  activeTab === tab.id
                    ? "bg-[#3b5ffd] text-white scale-105"
                    : "bg-[#171718] text-gray-400 hover:text-white hover:bg-[#1f1f22]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Animated Content */}
          <div
            key={activeTab}
            className="lg:mt-12 mt-6 p-5 rounded-2xl 
                     transition-all duration-300 ease-in-out
                     opacity-100 translate-y-0"
          >
            <h2 className="lg:text-3xl text-2xl font-semibold mb-6">
              {activeTabData?.title}
            </h2>

            <div className="transition-all duration-300 ease-in-out">
              {ActiveComponent && <ActiveComponent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
