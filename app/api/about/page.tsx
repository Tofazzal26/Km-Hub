import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <div className="relative w-full h-[300px] lg:h-[516px] text-white bg-cover bg-no-repeat bg-center bg-[url('/about.jpg')]">
          <div className="w-full h-full flex flex-col justify-center items-center lg:px-0 px-2 absolute inset-0 bg-gray-900/70">
            {/* <h2 className="lg:text-[100px] text-[50px] font-medium">About</h2> */}
            <div className="flex lg:flex-row flex-col gap-5 lg:mt-6 mt-3">
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
