import Image from "next/image";
import Link from "next/link";
import { footerLink, socialLink } from "./common/Helper";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-mirage">
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-8">
        <div className="flex justify-center md:py-14 sm:py-12 py-8">
          <Image
            className="md:w-[146px] md:h-[60px]"
            width={120}
            height={50}
            src="/assets/images/hero/logo.png"
            alt="logo"
          />
        </div>
        <ul className="flex flex-wrap justify-center items-center sm:gap-8 gap-5">
          {footerLink.map((value, index) => (
            <li key={index}>
              <Link
                href={value.path}
                className="text-bombay text-base font-normal font-Inter hover:text-white duration-300"
              >
                {value.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:my-[30px] my-5 flex justify-center">
          <div className="bg-white opacity-20 w-[552px] h-[2px]"></div>
        </div>
        <ul className="flex justify-center items-center gap-4">
          {socialLink.map((value, index) => (
            <li key={index} className="hover:translate-y-[-5px] duration-300">
              <Link target="_blank" href={value.path}>
                {value.image}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white opacity-20 md:mt-10 mt-5 w-full h-[2px]"></div>
      <p className="font-normal font-Inter text-sm px-3 text-bombay text-center mx-auto max-w-[750px] pt-5 md:pb-[30px] pb-5">
        © {currentYear} Manly, Stewart & Finaldi. THIS IS ATTORNEY ADVERTISING
        sponsored by John Manly - Manly, Stewart & Finaldi, a law firm located
        at 19100 Von Karman Ave. #800 Irvine, Ca.  
      </p>
    </div>
  );
};

export default Footer;
