import React from "react";
import KaisahanLogo from "../assets/Kaisihan-favicon.png";
import FacebookIcon from "../assets/facebookIcon.png";
import TwitterIcon from "../assets/twitterIcon.png";
import LinkedInIcon from "../assets/linkedinIcon.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 py-10 px-3 shadow-lg">
      <div className="flex flex-col lg:flex-row md:flex-row gap-5 w-full bg-white p-5 rounded-md">
        <div className="basis-2/3 flex gap-2 items-center">
          <div className="w-20 lg:w-40 md:w-30">
            <img src={KaisahanLogo} alt="Kaisahan Logo" />
          </div>
          <div>
            <h3 className="lg:text-4xl text-3xl font-bold text-green drop-shadow-md">
              KAISAHAN
            </h3>
            <h3 className=" text-sm font-bold text-green/80 drop-shadow-md">
              Tungo sa Kaunlaran ng Kanayunan at Repormang Pansakahan
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 basis-auto text-sm">
          <div>
            <h4 className=" font-semibold text-green">Address</h4>
            <p className="font-semibold">
              38-B Mapagsangguni St. Sikatuna Village Quezon City 1101
              PHILIPPINES
            </p>
          </div>
          <div>
            <h4 className=" font-semibold text-green">Email</h4>
            <p className="font-semibold">kaisahan@kaisahan.com.ph</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 basis-1/3 text-sm">
          <div>
            <h4 className="font-semibold text-green">Phone</h4>

            <p className="font-semibold">+632 433 0760</p>
            <p className="font-semibold">+632 921 5436</p>
          </div>

          <div className="w-full flex gap-2 justify-start">
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
      <div className="flex flex-col items-center justify-between font-bold text-green drop-shadow-lg text-sm">
        <p>Copyright © 2021 kaisahan.com.ph</p>
        <p>Website designed and developed by Lawrence Noriesta</p>
      </div>
    </div>
  );
};

export default Footer;
