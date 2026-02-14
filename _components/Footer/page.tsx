import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#171718] text-white lg:pt-20 pt-10">
      <div className="lg:px-0 px-2">
        <div className="container mx-auto">
          <div>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between">
              <div>
                <h2 className="lg:text-5xl text-3xl font-medium lg:w-[840px] w-full leading-[40px] lg:leading-[60px]">
                  We explore the uncharted territories of the digital landscape,
                  turning challenges into opportunities.
                </h2>
              </div>
              <div>
                <div className="flex flex-col gap-4">
                  <Facebook className="cursor-pointer hover:text-blue-500 transition" />
                  <Twitter className="cursor-pointer hover:text-blue-400 transition" />
                  <Youtube className="cursor-pointer hover:text-red-500 transition" />
                </div>
              </div>
            </div>
            <div>
              <div className="lg:mt-16 mt-6">
                <div>
                  <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between">
                    <div>
                      <h2 className="font-medium text-xl">Quick Access</h2>
                      <ul className="mt-4 text-base text-gray-300 space-y-2">
                        <li>Our Concerns & Products</li>
                        <li>Give Feedback</li>
                        <li>Artist/Model List</li>
                        <li>Quotation Request</li>
                        <li>Blogs</li>
                      </ul>
                    </div>
                    <div>
                      <div>
                        <h2 className="font-medium text-xl">Know More</h2>
                        <ul className="mt-4 text-base text-gray-300 space-y-2">
                          <li>Career</li>
                          <li>About Us</li>
                          <li>Community</li>
                          <li>Privacy Policy</li>
                          <li>Company Profile</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h2 className="font-medium text-xl">Quick Contact</h2>
                        <ul className="mt-4 text-base text-gray-300 space-y-2">
                          <li className="flex items-center gap-3">
                            {" "}
                            <Phone
                              size={15}
                              className="text-[#3b5ffd] hover:scale-110 hover:text-blue-400 transition duration-300 cursor-pointer"
                            />{" "}
                            +8801797-242610
                          </li>
                          <li className="flex items-center gap-3">
                            {" "}
                            <Phone
                              size={15}
                              className="text-[#3b5ffd] hover:scale-110 hover:text-blue-400 transition duration-300 cursor-pointer"
                            />{" "}
                            +8801939-229988
                          </li>
                          <li className="flex items-center gap-3">
                            {" "}
                            <Phone
                              size={15}
                              className="text-[#3b5ffd] hover:scale-110 hover:text-blue-400 transition duration-300 cursor-pointer"
                            />{" "}
                            +8801958-030254
                          </li>
                          <li className="flex items-center gap-3">
                            {" "}
                            <Mail
                              size={15}
                              className="text-[#3b5ffd] hover:scale-110 transition duration-300 cursor-pointer"
                            />{" "}
                            info@imbdagench.com
                          </li>
                          <li className="flex items-center gap-3">
                            {" "}
                            <MapPin
                              size={15}
                              className="text-[#3b5ffd] hover:scale-110 transition duration-300 cursor-pointer"
                            />{" "}
                            Dhaka, Bangladesh
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <Image
                        src={"/visa.png"}
                        width={500}
                        height={100}
                        className="lg:w-[600px] w-full lg:h-[100px] h-full"
                        alt="visa"
                      />
                      <div className="flex lg:flex-row flex-col items-start lg:items-center gap-2 mt-4 ml-10">
                        <Image
                          src={"/sponsor1.png"}
                          width={125}
                          height={38}
                          className="w-[125px] h-[38px]"
                          alt="visa"
                        />
                        <Image
                          src={"/sponsor2.png"}
                          width={125}
                          height={38}
                          className="w-[125px] h-[38px]"
                          alt="visa"
                        />
                        <Image
                          src={"/sponsor3.png"}
                          width={125}
                          height={38}
                          className="w-[125px] h-[38px]"
                          alt="visa"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#292929] h-[2px] lg:mt-14 mt-10"></div>
                  <div className="text-center lg:py-6 py-4">
                    <h2>KM Analytics Hub. © {year} </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
