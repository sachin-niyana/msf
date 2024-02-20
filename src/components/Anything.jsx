import React from "react";

const Anything = () => {
  return (
    <div className="bg-cover bg-anything-bg">
      <div className="container mx-auto px-3 max-w-[1152px] relative lg:pt-32 lg:pb-24 md:py-20 sm:py-16 py-12">
        <div className="absolute md:block hidden justify-center items-center flex-col">
          <div className="bg-gray sm:h-[150px] mx-auto h-[130px] rounded-full mt-12 w-[2px]"></div>
          <div className="w-[14px] h-[14px] rounded-full bg-tia-maria mt-3.5"></div>
        </div>
        <h2 className="font-Inter uppercase font-medium max-w-[800px] mx-auto text-center leading-[120%] text-white xl:text-6xxl lg:text-6xl md:text-5xl text-4xl">
          Anything you need,{" "}
          <span className="text-tia-maria"> we are here</span>
        </h2>
        <p className="text-white md:text-2xl sm:text-xl text-lg font-Inter font-normal text-center max-w-[760px] mx-auto mt-6">
          Send us an email or call{" "}
          <span className="text-tia-maria font-bold">(800) 700-8450</span> for
          answers to anything and everything you would like to know about your
          case.
        </p>
        <div className="flex flex-wrap justify-center items-center lg:mt-[110px] md:mt-20 mt-12">
          <div className="md:w-6/12 w-full md:pe-8">
            <input
              type="text"
              placeholder="First Name"
              className="!text-white placeholder-white font-Inter font-normal md:text-2xl sm:text-xl text-lg w-full outline-none border-none bg-transparent"
            />
            <div className="bg-white opacity-[24%] h-[1.5px] w-full mt-7"></div>
          </div>
          <div className="md:w-6/12 w-full md:ps-8 md:mt-0 mt-5">
            <input
              type="text"
              placeholder="Last Name"
              className="!text-white placeholder-white font-Inter font-normal md:text-2xl sm:text-xl text-lg w-full outline-none border-none bg-transparent"
            />
            <div className="bg-white opacity-[24%] h-[1.5px] w-full mt-7"></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center md:mt-10 mt-5">
          <div className="md:w-6/12 w-full md:pe-8">
            <input
              type="number"
              placeholder="Phone Number"
              className="!text-white font-Inter placeholder-white font-normal md:text-2xl sm:text-xl text-lg w-full outline-none border-none bg-transparent"
            />
            <div className="bg-white opacity-[24%] h-[1.5px] w-full mt-7"></div>
          </div>
          <div className="md:w-6/12 w-full md:ps-8 md:mt-0 mt-5">
            <input
              type="email"
              placeholder="Email"
              className="!text-white placeholder-white font-Inter font-normal md:text-2xl sm:text-xl text-lg w-full outline-none border-none bg-transparent"
            />
            <div className="bg-white opacity-[24%] h-[1.5px] w-full mt-7"></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center md:mt-10 mt-5">
          <div className="md:w-6/12 w-full md:pe-8">
            <form class="w-full">
              <select
                id="countries"
                class=" focus:ring-blue-500 font-Inter font-normal md:text-2xl sm:text-xl text-lg focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white focus:text-white  dark:focus:ring-tia-maria border-none outline-none bg-transparent"
              >
                <option className="text-mirage" selected>
                  Choose a country
                </option>
                <option className="text-mirage" value="US">
                  United States
                </option>
                <option className="text-mirage" value="CA">
                  Canada
                </option>
                <option className="text-mirage" value="FR">
                  France
                </option>
                <option className="text-mirage" value="DE">
                  Germany
                </option>
              </select>
            </form>
            <div className="bg-white opacity-[24%] h-[1.5px] w-full mt-7"></div>
          </div>
          <div className="md:w-6/12 w-full md:ps-8 md:mt-0 mt-5">
            <form class="w-full">
              <select
                id="countries"
                class=" focus:ring-blue-500 font-Inter font-normal md:text-2xl sm:text-xl text-lg focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white focus:text-white  dark:focus:ring-tia-maria border-none outline-none bg-transparent"
              >
                <option className="text-mirage" selected>
                  Institution Involved*
                </option>
                <option className="text-mirage" value="US">
                  United States
                </option>
                <option className="text-mirage" value="CA">
                  Canada
                </option>
                <option className="text-mirage" value="FR">
                  France
                </option>
                <option className="text-mirage" value="DE">
                  Germany
                </option>
              </select>
            </form>
            <div className="bg-white opacity-[24%] h-[1.5px] w-full mt-7"></div>
          </div>
        </div>
        <div className="w-full md:mt-10 mt-5">
          <input
            type="text"
            placeholder="Reason For Inquiry"
            className="!text-white placeholder-white font-Inter font-normal md:text-2xl sm:text-xl text-lg w-full outline-none border-none bg-transparent"
          />
          <div className="bg-white opacity-[24%] h-[1.5px] w-full mt-7"></div>
        </div>
        <p className="text-tia-maria font-Inter text-base font-normal mt-14 pt-1.5">
          Disclaimer*
        </p>
        <p className="text-bombay font-Inter sm:leading-[237%] leading-[150%] text-base font-normal pt-0.5">
          The use of this website or contact form to communicate with this firm
          or any of its attorneys/members does not establish an attorney-client
          relationship. Time-sensitive information should not be sent through
          this form. All information provided will be kept strictly
          confidential.
        </p>
        <div className="flex justify-start items-center mt-2.5 gap-2.5">
          <input type="checkbox" className="w-4 h-4 accent-tia-maria " />
          <p className="text-bombay font-Inter text-base font-normal">
            I HAVE READ THIS DISCLAIMER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Anything;
