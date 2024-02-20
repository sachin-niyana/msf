import Image from "next/image";
import Link from "next/link";
import React from "react";

const Attorneys = () => {
  return (
    <div className="bg-zircon">
      <div
        className="container max-w-[1152px] mx-auto px-3 lg:py-40 md:py-24 py-12 bg-lines-bg !bg-cover bg-center w-full"
        id="HOME"
      >
        <div className="flex justify-start lg:gap-32 md:gap-20 sm:gap-10 gap-5 items-center">
          <div className="flex justify-center items-center flex-col gap-3.5">
            <div className="bg-gray sm:h-[150px] h-[130px] rounded-full w-[2px]"></div>
            <div className="w-[14px] h-[14px] rounded-full bg-tia-maria"></div>
          </div>
          <div className="flex flex-col gap-[22px] mb-1.5">
            <h2 className="font-Inter font-medium leading-[120%] md:max-w-[650px] max-w-[430px] text-mirage xl:text-7xxl lg:text-7xl md:text-6xl sm:text-4xl text-3xl">
              CALIFORNIA SEXUAL ABUSE{" "}
              <span className="text-tia-maria">ATTORNEYS</span>
            </h2>
            <p className="text-mirage md:text-2xl sm:text-xl text-lg font-normal font-Inter">
              Nationally Recognized for Representing Sexual Abuse Survivors
            </p>
          </div>
        </div>
        <div
          className="flex bg-mirage justify-center flex-wrap md:mt-20 mt-10"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="lg:w-5/12 md:w-6/12 w-full justify-center flex">
            <Image
              className=" max-w-[530px] object-cover h-full w-full"
              width={530}
              height={705}
              src="/assets/images/california/women.png"
              alt="women"
            />
          </div>
          <div className="lg:w-7/12 md:w-6/12 w-full py-10 lg:ps-[59px] lg:pe-14 px-5">
            <p className="text-base text-bombay tracking-[-3%] sm:leading-[237.5%] leading-[150%] font-normal font-Inter">
              Manly, Stewart & Finaldi is regarded as America’s leading law firm
              for sexual abuse cases. Our founder and managing partner, 
              <span>
                <Link
                  href="https://www.manlystewart.com/professionals/john-c-manly/"
                  className="font-bold underline-offset-4 underline"
                >
                  attorney John C. Manly,
                </Link>
              </span>{" "}
              has been successfully representing sexual abuse victims for over
              20 years. He has been included in Super Lawyers® and named to
              California’s Top 100 Attorneys by the Los Angeles Daily Journal.
            </p>
            <p className="text-base text-bombay sm:mt-7 mt-3 tracking-[-3%] sm:leading-[237.5%] leading-[150%] font-normal font-Inter">
              Victim’s advocate and California sexual abuse lawyer John Manly
              understands that sexual abuse is an ongoing crisis and has devoted
              himself to becoming a national leader in the legal battle against
              these brutal crimes. As a firm that exclusively handles sexual
              abuse cases, our California law firm offers experienced
              representation to obtain justice for sexual abuse survivors,
              harassment, and discrimination.
            </p>
            <p className="text-base text-bombay sm:mt-7 mt-3 tracking-[-3%] sm:leading-[237.5%] leading-[150%] font-semibold font-Inter">
              Manly Stewart & Finaldi is currently investigating alleged 
              <span>
                <Link
                  href="https://www.manlystewart.com/university-of-michigan-sexual-assault-attorney/"
                  className="font-bold underline-offset-4 underline"
                >
                  sexual abuse by Dr. Robert E. Anderson at the University of
                  Michigan.
                </Link>
              </span>
                Contact our firm today if you were affected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attorneys;
