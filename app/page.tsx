export const dynamic = "force-dynamic";
import Banner from "@/_components/Banner/page";
import Brand from "@/_components/Brand/page";
import HomeWorkSection from "@/_components/HomeWorkSection/page";
import LetsTalk from "@/_components/LetsTalk/page";
import OurService from "@/_components/OurService/page";
import PaymentSection from "@/_components/PaymentSection/page";
import Testimonials from "@/_components/Testimonials/page";
import TrustedSection from "@/_components/TrustedSection/page";
import WhatWeDo from "@/_components/WhatWeDo/page";
import WhyChooseUS from "@/_components/WhyChooseUS/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhatWeDo />
      {/* <OurService /> */}
      <Brand />
      {/* <TrustedSection /> */}
      <HomeWorkSection />
      <WhyChooseUS />
      <Testimonials />
      <LetsTalk />
      <PaymentSection />
    </div>
  );
}
