import React from "react";
import servicesGIF from "../assets/ServicesPage/servicesGIF.gif";
import { servicesImage } from "../assets/data";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center"
    >
      <div
        id="memorable-moments"
        className="flex flex-col justify-center items-center"
      >
        <p className="flex justify-center items-center text-center uppercase tracking-wider opacity-60 font-semibold text-leaf text-xl">
          Services
        </p>
        <h1 className="font-headerFont text-leaf text-3xl lg:text-7xl mt-3 w-2/3 text-center">
          Ready to Make Memories?
        </h1>
        <p className="w-2/3 font-sans mt-2 text-gray-600 text-xl text-center">
          Regal Revelry is more than just a caterer. Our specialty is providing
          peace of mind. With our experienced and dedicated team, we handle all
          the nuances of off-site catering and event production, so you can
          enjoy your own event as a guest. From first impressions to lasting
          impressions, our commitment is to make every event a truly exceptional
          experience!
          <span className="flex justify-end">
            <img
              src={servicesGIF}
              alt="arrow-gif"
              className="h-[175px] rotate-45"
            />
          </span>
        </p>
      </div>

      <div id="nav-images-lg" className="hidden lg:flex justify-around">
        <div
          id="left-images"
          className="flex flex-col justify-start items-center gap-10 w-[40%]"
        >
          <div className="flex justify-between items-center gap-3">
            <h1 className="font-headerFont text-leaf text-3xl text-center">
              Gourmet Catering
            </h1>
            <img
              src={servicesImage[0]}
              alt="gourmet-catering"
              className="h-[375px] rounded-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center gap-10">
            <h1 className="font-headerFont text-leaf text-3xl text-center">
              Event Staffing
            </h1>
            <img
              src={servicesImage[2]}
              alt="gourmet-catering"
              className="h-[375px] rounded-full object-cover"
            />
          </div>
        </div>

        <div
          id="right-images"
          className="flex flex-col justify-end items-center gap-10 w-[40%] mt-52"
        >
          <div className="flex flex-row-reverse justify-between items-center gap-3">
            <h1 className="font-headerFont text-leaf text-3xl text-center">
              Bar Service
            </h1>
            <img
              src={servicesImage[1]}
              alt="gourmet-catering"
              className="h-[375px] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-row-reverse justify-between items-center gap-10">
            <h1 className="font-headerFont text-leaf text-3xl text-center">
              Event Staffing
            </h1>
            <img
              src={servicesImage[3]}
              alt="gourmet-catering"
              className="h-[375px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        id="nav-images-sm"
        className="flex lg:hidden flex-col justify-center items-center gap-10"
      >
        <div className="flex flex-col-reverse  justify-between items-center gap-3">
          <h1 className="font-headerFont text-leaf text-3xl text-center">
            Gourmet Catering
          </h1>
          <img
            src={servicesImage[0]}
            alt="gourmet-catering"
            className="h-[375px] rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col-reverse  justify-between items-center gap-3">
          <h1 className="font-headerFont text-leaf text-3xl text-center">
            Event Staffing
          </h1>
          <img
            src={servicesImage[2]}
            alt="gourmet-catering"
            className="h-[375px] rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col-reverse justify-between items-center gap-3">
          <h1 className="font-headerFont text-leaf text-3xl text-center">
            Bar Service
          </h1>
          <img
            src={servicesImage[1]}
            alt="gourmet-catering"
            className="h-[375px] rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col-reverse  justify-between items-center gap-3">
          <h1 className="font-headerFont text-leaf text-3xl text-center">
            Event Staffing
          </h1>
          <img
            src={servicesImage[3]}
            alt="gourmet-catering"
            className="h-[375px] rounded-full object-cover"
          />
        </div>
      </div>

      <div id="experiences" className="mt-56 p-5 w-full flex flex-col justify-center items-center">
        <h1 className="font-headerFont text-leaf text-5xl lg:text-8xl mt-3 text-center">
          Experiences Designed To Be Shared
        </h1>
        <p className="font-sans mt-2 text-gray-600 text-3xl">
          Follow us for more from Regal Revelry
        </p>

        <div className="flex flex-row w-1/3 justify-center items-center mt-3 text-2xl gap-10">
          <p className="flex gap-1 justify-center items-center cursor-pointer">
            <FaInstagram />
            Instagram
          </p>
          <p className="flex gap-1 justify-center items-center cursor-pointer">
            <FaPinterestP />
            Pinterest
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
