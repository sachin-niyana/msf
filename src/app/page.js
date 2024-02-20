"use client";
import Abuse from "@/components/Abuse";
import Across from "@/components/Across";
import Anything from "@/components/Anything";
import Attorneys from "@/components/Attorneys";
import BackToTop from "@/components/BackToTop";
import Choose from "@/components/Choose";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MapSlide from "@/components/MapSlide";
import Parties from "@/components/Parties";
import Posts from "@/components/Posts";
import Violence from "@/components/Violence";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      easing: "ease-in-out", // animation timing function
      once: true, // whether animation should only happen once
    });
  }, []);
  return (
    <>
      <div className="!scroll-smooth transition-all ease-in-out duration-1000">
        <BackToTop />
        <Header />
        <Attorneys />
        <Violence />
        <Choose />
        <Across />
        <Parties />
        <Abuse />
        <Posts />
        <Anything />
        <MapSlide />
        <Footer />
      </div>
    </>
  );
}
