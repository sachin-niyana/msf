import React from "react";
import Sidebar from "./Sidebar";
import ButtonWhite from "./common/ButtonWhite";
import { ScrollDown } from "./Icon";
import Link from "next/link";
import HeaderSlide from "./HeaderSlide";

const Header = () => {
  return (
    <div className="bg-mirage bg-right xl:min-h-fit min-h-screen bg-cover bg-hero-bg">
      <Sidebar />
      <div className="container max-w-[1152px] px-3 xl:pt-28 lg:pt-24 md:pt-20 pt-16 mx-auto">
        <h1 className="font-Inter font-extralight leading-[120%] xl:max-w-[1020px] md:max-w-[650px] max-w-[430px] text-white xl:text-8xxl lg:text-8xl md:text-7xl sm:text-5xl text-4xxl">
          AMERICA’S LEADING{" "}
          <span className="text-tia-maria font-bold">SEXUAL ABUSE</span> LAW
          FIRM
        </h1>
        <div className="flex sm:flex-row flex-col-reverse sm:justify-between justify-start sm:items-end items-start xl:mt-3.5 mt-7">
          <div className="sm:mt-0 mt-10">
            <ButtonWhite content="Join Our Team" />
          </div>
          <div className="flex justify-start items-start gap-5">
            <div className="flex justify-center items-center flex-col gap-3.5">
              <div className="bg-silver sm:h-[150px] h-[130px] rounded-full w-[2px]"></div>
              <div className="w-[14px] h-[14px] rounded-full bg-tia-maria"></div>
            </div>
            <p className="sm:max-w-[326px] max-w-[250px] font-Inter font-light sm:text-xl text-base text-silver">
              We carefully protect our clients’ identities and maintain the
              highest possible standard of confidentality when working with our
              clients.
            </p>
          </div>
        </div>
      </div>
      <HeaderSlide />
      <div className="flex justify-center py-10">
        <Link href="#HoME" className="animate-bounce">
          <ScrollDown />
        </Link>
      </div>
    </div>
  );
};

export default Header;
