import Abuse from "@/components/Abuse";
import Attorneys from "@/components/Attorneys";
import Choose from "@/components/Choose";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Parties from "@/components/Parties";
import Violence from "@/components/Violence";

export default function Home() {
  return (
    <>
      <div className="!scroll-smooth transition-all ease-in-out duration-1000">
        <Header />
        <Attorneys />
        <Violence />
        <Choose />
        <Parties />
        <Abuse />
        <Footer />
      </div>
    </>
  );
}
