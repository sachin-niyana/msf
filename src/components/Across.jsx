import Image from "next/image";
import React from "react";
import { victims } from "./common/Helper";

const Across = () => {
  return (
    <div className="bg-mirage" id="RESULTS">
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
        <div
          className="flex justify-end"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="max-w-[994px]">
            <div className="flex items-start flex-wrap justify-center mt-12">
              {victims.map((value, index) => (
                <div
                  key={index}
                  className="lg:w-4/12 sm:w-6/12 w-full lg:p-[38px] md:p-7 sm:p-5 "
                >
                  <div className="flex justify-center group">
                    <div className="px-3 max-w-[286px] sm:min-h-[342px] group-hover:translate-y-[-5px] duration-300 min-h-[300px] flex flex-col pt-3.5 pb-8">
                      <Image
                        className="max-w-[262px] object-cover mb-3.5 sm:max-h-[237px] max-h-[200px] h-full w-full"
                        width={262}
                        height={237}
                        src={value.image}
                        alt="across"
                      />
                      <p className="text-base mt-auto max-w-[195px] group-hover:text-white duration-300 mx-auto font-Inter font-normal text-center text-silver">
                        {value.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-start flex-wrap justify-center mt-12">
          <div className="lg:w-5/12 w-full lg:p-[38px] md:p-7 sm:p-5 ">
            <div className="flex justify-center group">
              <div className="max-w-[450px] md:min-h-[282px] min-h-[180px] group-hover:translate-y-[-5px] duration-300 flex flex-col">
                <div className="md:px-10 px-5 md:py-16 py-5 bg-tia-maria">
                  <p className="md:text-2xl sm:text-xl text-lg duration-300 mx-auto font-Inter font-semibold text-center text-white">
                    We are passionate about seeking justice for any and all
                    survivors of sexual assault and abuse.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 w-full lg:p-[38px] md:p-7 sm:p-5 ">
            <div className="flex sm:flex-row flex-col justify-center">
              <div className="flex justify-center group sm:pe-7">
                <div className="px-3 max-w-[286px] sm:min-h-[342px] group-hover:translate-y-[-5px] duration-300 min-h-[300px] flex flex-col pt-3.5 pb-8">
                  <Image
                    className="max-w-[262px] object-cover mb-3.5 sm:max-h-[237px] max-h-[200px] h-full w-full"
                    width={262}
                    height={237}
                    src="/assets/images/across/cases.png"
                    alt="cases"
                  />
                  <p className="text-base mt-auto max-w-[195px] group-hover:text-white duration-300 mx-auto font-Inter font-normal text-center text-silver">
                    Cases of online sexual harassment
                  </p>
                </div>
              </div>
              <div className="flex justify-center group sm:ps-7">
                <div className="px-3 max-w-[286px] sm:min-h-[342px] group-hover:translate-y-[-5px] duration-300 min-h-[300px] flex flex-col pt-3.5 pb-8">
                  <Image
                    className="max-w-[262px] object-cover mb-3.5 sm:max-h-[237px] max-h-[200px] h-full w-full"
                    width={262}
                    height={237}
                    src="/assets/images/across/sports.png"
                    alt="sports"
                  />
                  <p className="text-base mt-auto max-w-[195px] group-hover:text-white duration-300 mx-auto font-Inter font-normal text-center text-silver">
                    Abuse occurring in sports organizations
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

export default Across;
