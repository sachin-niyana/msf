import Image from "next/image";
import Link from "next/link";
import React from "react";

const Abuse = () => {
  return (
    <div className="bg-mirage">
      <div className="container max-w-[1152px] mx-auto px-3">
        <div className="flex justify-start lg:gap-32 md:gap-20 sm:gap-10 gap-5 items-start lg:pt-[98px] lg:pb-[98px] md:py-28 sm:py-20 py-12 ">
          <div className="flex justify-center items-center flex-col gap-3.5">
            <div className="bg-mirage sm:h-[150px] h-[130px] rounded-full mt-12 w-[2px]"></div>
            <div className="w-[14px] h-[14px] rounded-full bg-mirage"></div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-Inter uppercase font-medium max-w-[800px] leading-[120%] text-white xl:text-6xxl lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
              California Sexual Abuse Lawyers
              <span className="text-tia-maria"> Who Are Here for You</span>
            </h2>
            <p className="text-white text-base leading-[237.5%] max-w-[820px] mt-7 font-normal font-Inter">
              No case is too challenging for our lawyers. When we say that we
              aren’t afraid to stand up to any major institution, we have the
              track record to prove it. The firm has recovered more than $2
              billion dollars on behalf of clients from the nation’s largest
              school districts, religious institutions, municipalities, sports
              and youth organizations and Fortune 500 companies.
            </p>
            <p className="text-white text-base leading-[237.5%] max-w-[820px] mt-5 font-normal font-Inter">
              If you or a loved one is a survivor of sexual violence and abuse,
              please 
              <span>
                <Link
                  href="https://www.manlystewart.com/contact-us/"
                  className="text-tia-maria font-bold underline"
                >
                  contact our law offices in Southern California
                </Link>
              </span>
               for a free, 100% confidential consultation regarding your case.
            </p>
            <p className="text-white text-base leading-[237.5%] max-w-[820px] mt-5 font-normal font-Inter">
              You deserve closure, and any responsible parties deserve justice
              for their despicable actions. Let a trusted California sexual
              abuse lawyer at our firm help you today.
            </p>
            <Image
              className=" max-w-[1000px] object-cover h-full !w-full md:mt-[54px] mt-8"
              width={1002}
              height={541}
              src="/assets/images/abuse/abuse.png"
              alt="abuse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abuse;
