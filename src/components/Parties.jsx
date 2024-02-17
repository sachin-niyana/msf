import React from "react";
import ButtonWhite from "./common/ButtonWhite";

const Parties = () => {
  return (
    <div className="bg-zircon">
      <div className="container mx-auto px-3 max-w-[1152px] relative">
        <div className="absolute flex justify-center items-center flex-col gap-3.5">
          <div className="bg-mirage sm:h-[150px] h-[130px] rounded-full mt-12 w-[2px]"></div>
          <div className="w-[14px] h-[14px] rounded-full bg-mirage"></div>
        </div>
        <h2 className="font-Inter uppercase font-medium text-center leading-[120%] text-mirage xl:text-6xxl lg:text-6xl md:text-5xl text-4xl">
          We Pursue All <span className="text-tia-maria"> Liable Parties</span>
        </h2>
        <p className="text-mirage mx-auto text-base text-center leading-[237.5%] max-w-[900px] mt-7 font-normal font-Inter">
          At Manly, Stewart & Finaldi, we understand that in cases of sexual
          abuse, there are often other parties that may share liability for the
          abuser’s despicable actions. Therefore, we strive to hold all
          responsible parties accountable for their part in your case. This
          includes:
        </p>
        <div className="flex bg-mirage justify-center items-end flex-wrap md:mt-9 mt-8">
          <div className="lg:w-7/12 md:w-6/12 w-full py-10 lg:ps-24 md:ps-16 ps-8 px3">
            <p className="text-bombay font-Inter font-normal lg:text-2xl md:text-xl text-lg">
              The abuser who was directly responsible{" "}
            </p>
            <div className="max-w-[470px] w-full bg-light-gray h-[2px] mt-7"></div>
          </div>
          <div className="lg:w-5/12 md:w-6/12 w-full md:justify-end justify-center flex">
            <div className="flex flex-col max-w-[422px]">
              <div className="flex justify-center mb-[22px]">
                <ButtonWhite content="Join Our Team" />
              </div>
              <div className="flex justify-end">
                <div className="bg-tia-maria px-6 py-11">
                  <p className="text-white font-Inter font-semibold lg:text-2xl md:text-xl text-lg text-center">
                    Any and all parties who had some direct or indirect part in
                    your case deserve to be held accountable to the fullest
                    extent.
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

export default Parties;
