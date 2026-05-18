import Image from "next/image";
import React from "react";
import { Users, CheckCircle, Star, Clock } from "lucide-react";
const About = () => {
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
    <div>
      <div>
        <section className="w-full bg-gradient-to-r from-[#132238] via-[#0B1220] to-[#132238] py-16 sm:py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
              About{" "}
              <span className="bg-gradient-to-r from-[#27C5F3] to-[#9B5CF6] bg-clip-text text-transparent">
                Team Advertiser
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              We are a passionate team of digital artisans dedicated to crafting
              exceptional online experiences and driving measurable growth for
              brands worldwide.
            </p>
          </div>
        </section>
        <div className="bg-gradient-to-r from-[#132238] via-[#0B1220] to-[#132238] pb-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl"
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
        </div>

        <div className="bg-[#0f0f11] text-white py-10 lg:py-20">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 items-center">
              <div className="lg:px-0 px-2">
                <h2 className="text-sm font-medium uppercase">Our Story</h2>
                <h2 className="lg:text-4xl text-2xl font-medium lg:mt-5 mt-2 w-full lg:w-[930px] lg:leading-[50px] leading-[35px]">
                  Our integrated strategies and innovative solutions propel your
                  brand towards excellence in the digital realm.
                </h2>
                <div className="space-y-5 mt-8 lg:mt-16">
                  <p className="font-normal text-lg lg:text-xl leading-[25px] lg:leading-[35px] w-full lg:w-[680px]">
                    Quam viverra orci sagittis eu. Sapien nec sagittis aliquam
                    malesuada bibendum arcu vitae elementum. Elementum eu
                    facilisis sed odio morbi quis commodo odio. Non sodales
                    neque sodales ut etiam sit amet nisl purus. Porttitor leo a
                    diam sollicitudin. Pharetra convallis posuere morbi leo urna
                    molestie at.{" "}
                  </p>
                  <p className="font-normal text-lg lg:text-xl leading-[25px] lg:leading-[35px] w-full lg:w-[680px]">
                    Pellentesque massa placerat duis ultricies. Blandit cursus
                    risus at ultrices mi tempus imperdiet. Ipsum dolor sit amet
                    consectetur adipiscing elit pellentesque habitant. Neque
                    gravida in fermentum et sollicitudin ac orci. Purus ut
                    faucibus pulvinar elementum.{" "}
                  </p>
                </div>
              </div>
              <div>
                <Image
                  width={410}
                  height={550}
                  className="lg:w-[410px] lg:h-[550px] w-full h-[380px] rounded-[20px]"
                  src="/bannerMiddle.webp"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
