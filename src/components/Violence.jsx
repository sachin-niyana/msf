import React from "react";
import ButtonWhite from "./common/ButtonWhite";
import Image from "next/image";

const Violence = () => {
  return (
    <div className="bg-mirage relative">
      <Image
        className="xl:max-w-[702px] md:max-w-[550px] lg:block hidden max-w-[400px] h-full w-full absolute right-0 top-[-5%]"
        width={702}
        height={1300}
        src="/assets/images/violence/violence.png"
        alt="decades"
      />
      <div className="container max-w-[1152px] mx-auto px-3">
        <div className="flex justify-start lg:gap-32 md:gap-20 sm:gap-10 gap-5 items-start lg:pt-[110px] lg:pb-[110px] md:py-20 sm:py-16 py-12 ">
          <div className="flex justify-center items-center flex-col gap-3.5">
            <div className="bg-gray sm:h-[150px] h-[130px] rounded-full mt-16 w-[2px]"></div>
            <div className="w-[14px] h-[14px] rounded-full bg-tia-maria"></div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-Inter uppercase font-medium lg:max-w-[420px] max-w-[600px] leading-[120%] text-white xl:text-6xxl lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
              What to Do If You Are
              <span className="text-tia-maria"> a Victim of Sexual</span>{" "}
              Violence
            </h2>
            <p className="text-bombay text-base leading-[237.5%] lg:max-w-[535px] max-w-[600px] lg:mt-12 md:mt-10 mt-8 font-normal font-Inter">
              If you or a loved one has been a victim of harassment or sexual
              violence, don’t give up. Our California sexual abuse attorneys are
              here to help you seek justice. We are passionate about our work,
              and we understand that it is difficult for sexual abuse survivors
              of confidentiality when working with our clients. Our attorneys
              are dedicated to helping people like you get the peace of mind and
              compensation they deserve.
            </p>
            <p className="text-bombay text-base leading-[237.5%] lg:max-w-[535px] max-w-[600px] lg:mt-9 md:mt-7 mt-5 font-normal font-Inter">
              Contact a sexual abuse attorney at our Southern California law
              firm for recognized legal representation in a sex abuse case. We
              can help you move forward with civil action. For legal advice,
              call (800) 700-8450 today.
            </p>
            <div className="lg:mt-12 mt-8">
              <ButtonWhite content="Join Our Team" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Violence;
