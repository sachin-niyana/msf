import Abuse from "@/components/Abuse";
import Across from "@/components/Across";
import Attorneys from "@/components/Attorneys";
import BackToTop from "@/components/BackToTop";
import Choose from "@/components/Choose";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MapSlide from "@/components/MapSlide";
import Parties from "@/components/Parties";
import Posts from "@/components/Posts";
import Violence from "@/components/Violence";

export default function Home() {
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
        <MapSlide />
        <Footer />
      </div>
    </>
  );
}
