"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SlideLeftArrow, SlideRightArrow } from "./Icon";
import Image from "next/image";
import { postSlide } from "./common/Helper";
import News from "./News";

const Posts = () => {
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
    <div
      className="bg-center bg-cover bg-map-bg relative bg-zircon "
      id="MEDIA"
    >
      <div className="container max-w-[1152px] px-3 mx-auto lg:pt-[104px] overflow-hidden lg:pb-[107px] md:py-20 sm:py-16 py-12 ">
        <div className="flex justify-start lg:gap-32 md:gap-20 sm:gap-10 gap-5 items-start">
          <div className="justify-center items-center flex-col">
            <div className="bg-gray md:h-[150px] sm:h-[100px] h-[80px] rounded-full mx-auto w-[2px]"></div>
            <div className="w-[14px] h-[14px] rounded-full mt-3.5 bg-tia-maria"></div>
          </div>
          <h2 className="font-Inter uppercase font-medium leading-[120%] md:max-w-[850px] max-w-[430px] text-mirage xl:text-7xxl lg:text-7xl md:text-6xl sm:text-4xl text-3xl">
            MORE RECENT <span className="text-tia-maria">BLOG POSTS</span>
          </h2>
        </div>
        <div className="relative w-full lg:mt-16 md:mt-12 mt-10">
          <Slider ref={sliderRef} {...settings}>
            {postSlide.map((value, index) => (
              <div
                key={index}
                className="!flex md:flex-row flex-col justify-end lg:gap-14 md:gap-12 gap-10 md:ps-0 sm:ps-10 ps-5"
              >
                <Image
                  className="max-w-[423px] max-h-[343px] h-full w-full"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                  width={423}
                  height={343}
                  src={value.image}
                  alt="post"
                />
                <div className="flex flex-col">
                  <p className="font-Inter max-w-[520px] font-medium md:text-xl text-lg text-tia-maria">
                    {value.date}
                  </p>
                  <p className="font-Inter uppercase pt-4 pb-2.5 md:max-w-[500px] font-semibold lg:text-2xl md:text-xl text-lg text-mirage">
                    {value.title}
                  </p>
                  <p className="font-Inter md:max-w-[480px] font-normal text-base text-mirage">
                    {value.discripstion}
                  </p>
                </div>
              </div>
            ))}
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
        <News />
      </div>
    </div>
  );
};

export default Posts;
