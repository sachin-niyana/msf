"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SlideLeftArrow, SlideRightArrow } from "./Icon";

const MapSlide = () => {
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const prevSlideHandler = () => {
    sliderRef.current.slickPrev();
  };
  const nextSlideHandler = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="bg-zircon">
      <div className="container max-w-[1152px] mx-auto px-3 overflow-hidden lg:py-[121px] md:py-24 sm:py-16 py-12 bg-lines-bg !bg-cover bg-center w-full">
        <h2 className="font-Inter uppercase font-medium text-start mx-auto max-w-[970px] leading-[120%] text-tia-maria xl:text-6xxl lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
          Contact Our California{" "}
          <span className="text-mirage">Sexual Abuse Attorneys</span> Today!
        </h2>
        <div className="flex justify-end">
          <div
            className="relative w-full max-w-[713px] md:mt-2 mt-10"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <Slider ref={sliderRef} {...settings}>
              <div className="flex flex-col">
                <iframe
                  src="https://maps.google.com/maps?q=radial%20code&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  frameborder="0"
                  className="w-full h-[387px]"
                ></iframe>
                <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start sm:gap-0 gap-3 mt-[26px]">
                  <div className="flex flex-col">
                    <h5 className="text-mirage font-Inter font-semibold md:text-2xl sm:text-xl text-lg">
                      SOUTHERN CALIFORNIA OFFICE
                    </h5>
                    <p className="font-Inter text-mirage text-base font-normal">
                      19100 Von Karman Avenue, Suite 800, Irvine, CA 92612
                    </p>
                  </div>
                  <div className="flex flex-col me-2.5">
                    <p className="text-mirage font-Inter font-normal text-base">
                      <span className="font-bold text-tia-maria">P(949)</span>{" "}
                      252-9990
                    </p>
                    <p className="text-mirage font-Inter font-normal text-base">
                      <span className="font-bold text-tia-maria">TF(800)</span>{" "}
                      700-8450
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <iframe
                  src="https://maps.google.com/maps?q=radial%20code&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  frameborder="0"
                  className="w-full h-[387px]"
                ></iframe>
                <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start sm:gap-0 gap-3 mt-[26px]">
                  <div className="flex flex-col">
                    <h5 className="text-mirage font-Inter font-semibold md:text-2xl sm:text-xl text-lg">
                      SOUTHERN CALIFORNIA OFFICE
                    </h5>
                    <p>19100 Von Karman Avenue, Suite 800, Irvine, CA 92612</p>
                  </div>
                  <div className="flex flex-col me-2.5">
                    <p className="text-mirage font-Inter font-normal text-base">
                      <span className="font-bold text-tia-maria">P(949)</span>{" "}
                      252-9990
                    </p>
                    <p className="text-mirage font-Inter font-normal text-base">
                      <span className="font-bold text-tia-maria">TF(800)</span>{" "}
                      700-8450
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <iframe
                  src="https://maps.google.com/maps?q=radial%20code&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  frameborder="0"
                  className="w-full h-[387px]"
                ></iframe>
                <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start sm:gap-0 gap-3 mt-[26px]">
                  <div className="flex flex-col">
                    <h5 className="text-mirage font-Inter font-semibold md:text-2xl sm:text-xl text-lg">
                      SOUTHERN CALIFORNIA OFFICE
                    </h5>
                    <p>19100 Von Karman Avenue, Suite 800, Irvine, CA 92612</p>
                  </div>
                  <div className="flex flex-col me-2.5">
                    <p className="text-mirage font-Inter font-normal text-base">
                      <span className="font-bold text-tia-maria">P(949)</span>{" "}
                      252-9990
                    </p>
                    <p className="text-mirage font-Inter font-normal text-base">
                      <span className="font-bold text-tia-maria">TF(800)</span>{" "}
                      700-8450
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="flex absolute md:top-[-10%] top-[-5%] right-0 items-center gap-8">
              <div className="cursor-pointer" onClick={prevSlideHandler}>
                <SlideLeftArrow />
              </div>
              <div className="cursor-pointer" onClick={nextSlideHandler}>
                <SlideRightArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSlide;
