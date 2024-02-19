import Image from "next/image";
import React from "react";
import { victims } from "./common/Helper";

const Across = () => {
  return (
    <div className="bg-mirage">
      <div className="container mx-auto max-w-[1152px] px-3 relative lg:py-[100px] md:py-16 py-12">
        <Image
          className="max-w-[358px] max-h-[358px] h-full w-full absolute lg:block hidden"
          width={358}
          height={358}
          src="/assets/images/across/across.png"
          alt="across"
        />
        <h2 className="font-Inter uppercase lg:text-end text-start lg:ms-auto font-medium leading-[120%] max-w-[700px] text-white xl:text-7xxl lg:text-7xl md:text-6xl sm:text-4xl text-3xl">
          Representation for Sexual Abuse Victims{" "}
          <span className="text-tia-maria">Across California</span>
        </h2>
        <div className="flex items-start flex-wrap justify-center mt-12">
          {victims.map((value, index) => (
            <div
              key={index}
              className="lg:w-4/12 sm:w-6/12 w-full lg:p-[38px] md:p-7 sm:p-5 p-3"
            >
              <div className="flex justify-center">
                <div className="px-3 max-w-[286px] min-h-[342px] flex flex-col pt-3.5 pb-8">
                  <Image
                    className="max-w-[262px] object-cover mb-3.5 max-h-[237px] h-full w-full"
                    width={262}
                    height={237}
                    src={value.image}
                    alt="across"
                  />
                  <p className="text-base mt-auto max-w-[195px] mx-auto font-Inter font-normal text-center text-silver">
                    {value.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Across;
