import React from "react";
import FacebookIcon from "../assets/facebookIcon.png";
import TwitterIcon from "../assets/twitterIcon.png";
import LinkedInIcon from "../assets/linkedinIcon.png";
import CloseIcon from "../assets/close-icon-64.png";
import { useEffect } from "react";

const Sidenav = ({ isOpen = true, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);
  return (
    <>
      <div
        className={`flex flex-row-reverse w-full h-screen bg-green/80 fixed top-0 z-5 transition-all duration-300 ease-in-out ${isOpen ? "right-0" : "-right-full"}`}
      >
        <div className="flex flex-col items-center justify-around gap-5 bg-green basis-3/6 ">
          <div className="absolute top-0 right-0 p-5">
            <button onClick={() => setIsOpen(!isOpen)}>
              <img
                className=" cursor-pointer"
                src={CloseIcon}
                alt="closed icon"
                width={30}
              />
            </button>
          </div>
          <ul className=" text-white w-full flex flex-col items-center text-sm gap-5 font-semibold">
            <li>About Us</li>
            <li>Our Organization</li>
            <li>Program</li>
            <li>News & Updates</li>
            <li>Stories</li>
            <li>Publication & Resources</li>
            <li>Contact Us</li>
          </ul>
          <div className="flex w-fit justify-around gap-3">
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
      </div>
    </>
  );
};

export default Sidenav;
