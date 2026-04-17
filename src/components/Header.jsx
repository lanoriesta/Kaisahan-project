/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
import KaisahanLogo from "../assets/KAISAHAN-Logo-1.png";
import FacebookIcon from "../assets/facebookIcon.png";
import TwitterIcon from "../assets/twitterIcon.png";
import LinkedInIcon from "../assets/linkedinIcon.png";
import MenuIcon from "../assets/menu-icon-48.png";
import Sidenav from "./Sidenav";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onScroll, setOnScroll] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  window.onscroll = (e) => {
    if (window.scrollY > 0) {
      setOnScroll(true);
    } else if (window.scrollY < 2) {
      setOnScroll(false);
    }
  };

  return (
    <div
      className={`w-full flex justify-center gap-2 md:py-3 p-3 fixed left-0 right-0 top-0 z-5 transition-all duration-300 transition-discrete ease-in-out ${onScroll ? "bg-white" : "bg-transparent"}`}
    >
      <div className="basis-1/4 sm:basis-1/5 md:basis-1/9 lg:basis-32.5">
        <img className="w-full" src={KaisahanLogo} alt="Kaisahan Logo" />
      </div>
      <div className="basis-auto flex flex-col justify-evenly">
        <div className="w-full flex">
          <div className="flex-1">
            <p className="text-sm sm:text-lg font-bold text-green">
              TUNGO SA KAUNLARAN NG KANAYUNAN AT REPORMANG PANSAKAHAN
            </p>
            <p className=" text-xs sm:text-sm text-green">
              SOLIDARITY TOWARDS AGRARIAN REFORM AND RURAL DEVELOPMENT
            </p>
          </div>
          <div className="w-[15%] lg:flex justify-around hidden">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={FacebookIcon} alt="Facebook" width={30} />
            </a>
            <a
              href="https://www.x.com"
              aria-label="X"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={TwitterIcon} alt="X" width={30} />
            </a>
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={LinkedInIcon} alt="LinkedIn" width={30} />
            </a>
          </div>
        </div>
        <div className="w-full hidden lg:inline">
          <ul className="main-nav w-full flex items-center text-sm gap-4 font-semibold">
            <li>About Us</li>
            <li>Our Organization</li>
            <li>Program</li>
            <li>News & Updates</li>
            <li>Stories</li>
            <li>Publication & Resources</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:hidden">
        <button onClick={toggleSideNav}>
          <img className="cursor-pointer" src={MenuIcon} alt="menu icon" />
        </button>
      </div>
      <Sidenav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
