import React from "react";
// import {
//   Keyboard,
//   PieChart,
//   Monitor,
//   MessageCircle,
//   Smartphone,
//   Coffee,
//   Gem,
//   Megaphone,
// } from "lucide-react";

import {
  Facebook,
  Server,
  Layers,
  TrendingUp,
  BarChart2,
  Flame,
  Eye,
  Target,
} from "lucide-react";
import Image from "next/image";

const OurService = () => {
  return (
    <div className="bg-[#0f0f11] text-white lg:py-20 py-10 lg:px-0 px-2">
      <div className="container mx-auto">
        <div>
          <div className="flex justify-between lg:flex-row flex-col lg:gap-0 gap-5">
            <div>
              <h2 className="lg:text-5xl text-3xl font-medium">Our Services</h2>
            </div>
          </div>
          <div>
            <div className="lg:mt-20 mt-10">
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
                {/* Facebook Ads */}
                <div className="bg-[#171718] rounded-[20px] p-5 lg:p-7">
                  <Facebook
                    size={50}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-4 mb-3">
                    Facebook Ads
                  </h2>
                  <p className="text-gray-300 leading-7">
                    Facebook Ads Campaign Setup, Audience Targeting, Creative
                    Strategy, A/B Testing & Conversion Tracking. Retargeting,
                    Funnel Strategy, Budget Optimization, Performance Analysis,
                    Reporting & Scaling Campaigns.
                  </p>
                </div>

                {/* Facebook Conversion API */}
                <div className="bg-[#171718] rounded-[20px] p-5 lg:p-7">
                  <Image
                    src="/4.png"
                    width={50}
                    height={50}
                    alt="logo"
                    className="object-contain"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-4 mb-3">
                    Facebook Conversion API
                  </h2>
                  <p className="text-gray-300 leading-7">
                    Facebook Conversion API Setup, Server-Side Tracking, Event
                    Configuration & Data Accuracy Optimization. Improved
                    Conversion Tracking, Better Attribution, Retargeting Support
                    & Performance Enhancement.
                  </p>
                </div>

                {/* Google Tag Manager */}
                <div className="bg-[#171718] rounded-[20px] p-5 lg:p-7">
                  <Image
                    src="/5.png"
                    width={50}
                    height={50}
                    alt="logo"
                    className="object-contain"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-4 mb-3">
                    Google Tag Manager
                  </h2>
                  <p className="text-gray-300 leading-7">
                    Google Tag Manager Setup, Custom Tag Implementation & Event
                    Tracking. Seamless Analytics Integration, Conversion
                    Tracking & Performance Optimization.
                  </p>
                </div>

                {/* Google Ads */}
                <div className="bg-[#171718] rounded-[20px] p-5 lg:p-7">
                  <Image
                    src="/6.png"
                    width={50}
                    height={50}
                    alt="logo"
                    className="object-contain"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-4 mb-3">
                    Google Ads
                  </h2>
                  <p className="text-gray-300 leading-7">
                    Google Ads Campaign Setup, Keyword Research, Ad Creation &
                    Bid Optimization. Conversion Tracking, Performance Analysis,
                    A/B Testing & ROI Maximization.
                  </p>
                </div>

                {/* Google Analytics 4 */}
                <div className="bg-[#171718] rounded-[20px] p-5 lg:p-7">
                  <Image
                    src="/3.png"
                    width={50}
                    height={50}
                    alt="logo"
                    className="object-contain"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-4 mb-3">
                    Google Analytics 4
                  </h2>
                  <p className="text-gray-300 leading-7">
                    GA4 Setup with Custom Events, Conversion & Cross-Domain
                    Tracking for Accurate Data. Custom Dashboards, Advanced
                    Reporting & Audience Insights to Optimize Marketing
                    Performance.
                  </p>
                </div>

                {/* Microsoft Clarity */}
                <div className="bg-[#171718] rounded-[20px] p-5 lg:p-7">
                  <Image
                    src="/1.png"
                    width={50}
                    height={50}
                    alt="logo"
                    className="object-contain"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-4 mb-3">
                    Microsoft Clarity
                  </h2>
                  <p className="text-gray-300 leading-7">
                    Session Recordings, Heatmaps & User Behavior Analysis.
                    Conversion Insights & UX Improvements for Better Website
                    Performance.
                  </p>
                </div>

                {/* 🔥 NEW CARD (replace image later) */}
                <div className="bg-[#171718] rounded-[20px] p-5 lg:p-7">
                  <Image
                    src="/2.png"
                    width={50}
                    height={50}
                    alt="logo"
                    className="object-contain"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-4 mb-3">
                    Hotjar
                  </h2>
                  <p className="text-gray-300 leading-7">
                    Heatmaps, Session Recordings & User Feedback Tools.
                    Understand user behavior, improve UX & increase conversion
                    rates with data-driven insights.
                  </p>
                </div>

                {/* Google Conversion Tracking */}
                <div className="bg-[#171718] rounded-[20px] p-5 lg:p-7">
                  <Target
                    size={50}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                  <h2 className="lg:text-2xl text-xl font-medium mt-4 mb-3">
                    Google Conversion Tracking
                  </h2>
                  <p className="text-gray-300 leading-7">
                    Accurately track website conversions, leads, purchases &
                    form submissions. Gain actionable insights, optimize
                    campaigns & boost ROI with data-driven strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
