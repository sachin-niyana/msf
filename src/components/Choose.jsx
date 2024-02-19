import Image from "next/image";
import React from "react";
import ButtonWhite from "./common/ButtonWhite";

const Choose = () => {
  return (
    <div className="bg-zircon">
      <div className="container relative max-w-[1152px] mx-auto px-3 lg:pt-[110px] md:pt-20 sm:pt-16 pt-12">
        <div className="flex absolute right-0 justify-center items-center flex-col gap-3.5">
          <div className="bg-gray sm:h-[150px] h-[130px] rounded-full w-[2px]"></div>
          <div className="w-[14px] h-[14px] rounded-full bg-tia-maria"></div>
        </div>
        <h2 className="font-Inter uppercase font-medium text-center leading-[120%] text-tia-maria xl:text-6xxl lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
          Why Choose Our
          <span className="text-mirage"> CALIFORNIA SEXUAL ABUSE LAWYERS?</span>
        </h2>
        <p className=" text-mirage leading-[237%] pt-7 max-w-[890px] text-center mx-auto text-base font-Inter font-normal">
          At Manly, Stewart & Finaldi, our renowned sexual abuse attorneys are
          not afraid to stand up to any institution, whether it is a school
          district, religious institution, entertainment conglomerate, Fortune
          500 companies, or any other rich and powerful institution. In fact,
          our team of legal professionals has represented hundreds of victims
          of 
          <span className="font-bold text-tia-maria underline">
            clergy sexual abuse in California
          </span>
           including in Los Angeles, and Orange County, plus hundreds of young
          children victimized in in California’s schools. We are one of the
          nation’s leading law firms for representing survivors of sexual
          violence.
        </p>
        <div className="flex bg-mirage justify-center md:flex-row flex-col-reverse flex-wrap md:mt-20 mt-10">
          <div className="lg:w-7/12 md:w-6/12 w-full py-10 lg:ps-10 lg:pe-20 px-5">
            <h3 className="text-white leading-[110%] lg:text-4xxl md:text-4xl text-3xl font-Inter font-medium max-w-[440px]">
              Decades of{" "}
              <span className="text-tia-maria">Experience & Results</span>
            </h3>
            <p className="text-base text-bombay pb-1.5 mt-5 leading-[237.5%] font-normal font-Inter">
              If you or someone you know has suffered 
              <span className="text-tia-maria underline">
                sexual abuse at school in California,
              </span>{" "}
              in church, at work, by a sports coach, at a hospital or by a
              doctor, while in foster care, or by a Boy Scout leader, we are
              prepared to stand up and fight for you. We offer passionate,
              aggressive representation to seek justice for victims, secure the
              financial compensation you deserve, and protect others from abuse
              in the future. We have also recovered more than $2 billion dollars
              for our clients. When you need legal help and results, you can
              depend on our award-winning sexual abuse lawyers in California.
            </p>
            <div className="lg:mt-12 md:mt-10 mt-8">
              <ButtonWhite content="Join Our Team" />
            </div>
          </div>
          <div className="lg:w-5/12 md:w-6/12 w-full justify-center flex">
            <Image
              className=" max-w-[530px] object-cover h-full w-full"
              width={530}
              height={705}
              src="/assets/images/choose/decades.png"
              alt="decades"
            />
          </div>
        </div>
        <div className="bg-center bg-cover bg-map-bg relative">
          <div className="flex justify-start lg:gap-32 md:gap-20 sm:gap-10 gap-5 items-start lg:pt-[141px] lg:pb-[146px] md:py-28 sm:py-20 py-12 ">
            <div className="flex justify-center items-center flex-col gap-3.5">
              <div className="bg-gray sm:h-[150px] h-[130px] rounded-full mt-12 w-[2px]"></div>
              <div className="w-[14px] h-[14px] rounded-full bg-tia-maria"></div>
            </div>
            <div className="flex flex-col">
              <h2 className="font-Inter uppercase font-medium leading-[120%] md:max-w-[600px] max-w-[430px] text-mirage xl:text-7xxl lg:text-7xl md:text-6xl sm:text-4xl text-3xl">
                Your Needs Are{" "}
                <span className="text-tia-maria">Our First Priority</span>
              </h2>
              <p className="text-mirage text-base leading-[237.5%] max-w-[785px] mt-3 font-normal font-Inter">
                We understand the devastating nature and the emotional distress
                of unwanted sexual contact and the lasting impact it may have on
                a survivor. That’s why we take on every case with a
                trauma-informed approach, taking an empathetic look at your case
                – and, ultimately, putting your needs above ours. We sit down
                and listen carefully to your situation, providing any and all
                help you may need in order to get closure in your situation. If
                desired, your case can be 100% confidential, so that you can
                feel safe and at ease – and if you require help after your case
                has concluded, our California sexual abuse attorneys will do our
                best to find the assistance you deserve.
              </p>
              <p className="text-mirage text-base leading-[237.5%] max-w-[785px] mt-7 font-normal font-Inter">
                We not only seek justice for any actions that may have been
                committed against you, but we also strive to invoke change at an
                institutional level to ensure that nobody else has to go through
                the same traumatic experiences. Whether you need a 
                <span className="font-bold text-tia-maria underline">
                  Los Angeles sexual abuse lawyer
                </span>
                 or an 
                <span className="font-bold text-tia-maria underline">
                  Orange County sexual abuse attorney,
                </span>{" "}
                we can help victims all over Southern California.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
