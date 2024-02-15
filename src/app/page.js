import Attorneys from "@/components/Attorneys";
import Header from "@/components/Header";
import Violence from "@/components/Violence";

export default function Home() {
  return (
    <>
      <div className="!scroll-smooth transition-all ease-in-out duration-1000">
        <Header />
        <Attorneys />
        <Violence />
      </div>
    </>
  );
}
