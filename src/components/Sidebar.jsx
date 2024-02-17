"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { sidebarLink } from "./common/Helper";
const Sidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="bg-mirage">
      <div className="container pt-7 max-w-[1152px] mx-auto px-3">
        <div className="flex justify-between items-start">
          <Image
            className="md:w-[146px] md:h-[60px]"
            width={120}
            height={50}
            src="/assets/images/hero/logo.png"
            alt="logo"
          />
          <div className="relative flex">
            {/* Overlay */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={closeSidebar}
              ></div>
            )}

            {/* Sidebar */}
            <div
              className={`sidebar bg-white end-0 fixed top-0 w-full max-w-[300px] h-full transition-transform transform z-50 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-[-100%]"
              }`}
            >
              <div className="min-h-screen flex flex-col justify-center items-center">
                {/* Your sidebar content goes here */}
                <button
                  onClick={closeSidebar}
                  className="absolute top-3 left-3 text-tia-maria"
                >
                  <RxCross2 className="w-[43px] h-[43px]" />
                </button>
                <ul className="flex flex-col gap-5">
                  {sidebarLink.map((value, index) => {
                    return (
                      <li
                        key={index}
                        onClick={closeSidebar}
                        className="text-center"
                      >
                        <Link
                          aria-label={value.title}
                          className="text-mirage font-Inter font-medium text-xl opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                          key={index}
                          href={value.path}
                        >
                          {value.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">{children}</div>

            {/* Toggle button */}
            <button className=" text-tia-maria" onClick={openSidebar}>
              <AiOutlineMenu className="w-[43px] h-[43px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
