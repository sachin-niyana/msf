"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NewsArrow, SlideLeftArrow, SlideRightArrow } from "./Icon";
import Image from "next/image";

const News = () => {
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const prevSlideHandler = () => {
    sliderRef.current.slickPrev();
  };
  const nextSlideHandler = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="container max-w-[1152px] px-3 mx-auto lg:mt-[219px] md:mt-40 sm:mt-24 mt-16">
      <h2 className="font-Inter uppercase font-medium leading-[120%] md:max-w-[850px] max-w-[430px] text-mirage xl:text-7xxl lg:text-7xl md:text-6xl sm:text-4xl text-3xl">
        THE <span className="text-tia-maria">news</span>
      </h2>
      <div
        className="relative w-full gap-5 lg:mt-16 md:mt-12 mt-10"
        data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <Slider ref={sliderRef} {...settings}>
          <div className="px-4">
            <div className="max-w-[358px] cursor-pointer group">
              <div className="bg-mirage px-[22px] py-7">
                <p className="text-center font-Inter font-normal duration-300 group-hover:text-white text-base sm:leading-[237.5%] leading-[150%] text-bombay">
                  Hipster ipsum tattooed brunch I'm baby. Pork jean messenger
                  I'm mukbang kitsch cronut. Umami copper salvia selvage
                  thundercats celiac..
                </p>
                <div className="flex justify-center group-hover:translate-x-3 duration-300 md:mt-9 sm:mt-7 mt-5">
                  <NewsArrow />
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  className="max-w-[180px] max-h-[100px] mt-5 h-full w-full"
                  width={190}
                  height={100}
                  src="/assets/images/blog-Post/today.png"
                  alt="today"
                />
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="max-w-[358px] cursor-pointer group">
              <div className="bg-mirage px-[22px] py-7">
                <p className="text-center font-Inter font-normal duration-300 group-hover:text-white text-base sm:leading-[237.5%] leading-[150%] text-bombay">
                  Hipster ipsum tattooed brunch I'm baby. Pork jean messenger
                  I'm mukbang kitsch cronut. Umami copper salvia selvage
                  thundercats celiac..
                </p>
                <div className="flex justify-center group-hover:translate-x-3 duration-300 md:mt-9 sm:mt-7 mt-5">
                  <NewsArrow />
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  className="max-w-[190px] max-h-[100px] mt-5 h-full w-full"
                  width={190}
                  height={100}
                  src="/assets/images/blog-Post/time.png"
                  alt="time"
                />
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="max-w-[358px] cursor-pointer group">
              <div className="bg-mirage px-[22px] py-7">
                <p className="text-center font-Inter font-normal duration-300 group-hover:text-white text-base sm:leading-[237.5%] leading-[150%] text-bombay">
                  Hipster ipsum tattooed brunch I'm baby. Pork jean messenger
                  I'm mukbang kitsch cronut. Umami copper salvia selvage
                  thundercats celiac..
                </p>
                <div className="flex justify-center group-hover:translate-x-3 duration-300 md:mt-9 sm:mt-7 mt-5">
                  <NewsArrow />
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  className="max-w-[180px] max-h-[100px] mt-5 h-full w-full"
                  width={190}
                  height={100}
                  src="/assets/images/blog-Post/minutes.png"
                  alt="minutes"
                />
              </div>
            </div>
          </div>
        </Slider>
        <div className="flex absolute sm:top-[-20%] top-[-10%] right-0 items-center gap-8">
          <div className="cursor-pointer" onClick={prevSlideHandler}>
            <SlideLeftArrow />
          </div>
          <div className="cursor-pointer" onClick={nextSlideHandler}>
            <SlideRightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
