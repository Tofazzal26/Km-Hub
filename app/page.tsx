import Banner from "@/_components/Banner/page";
import Brand from "@/_components/Brand/page";
import OurService from "@/_components/OurService/page";
import WhatWeDo from "@/_components/WhatWeDo/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhatWeDo />
      <OurService />
      <Brand />
    </div>
  );
}
