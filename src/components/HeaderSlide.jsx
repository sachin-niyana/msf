"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { headerSlide } from "./common/Helper";

const HeaderSlide = () => {
  var settings = {
    dots: false,
    // infinite: true,
    autoplay: true,
    arrows: false,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 360, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-[34px]">
      <Slider {...settings}>
        {headerSlide.map((value, index) => (
          <div key={index} className="m-0">
            <Image
              className="w-full object-cover mb-3.5 max-h-[237px] h-full"
              width={262}
              height={237}
              src={value.image}
              alt="across"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderSlide;
