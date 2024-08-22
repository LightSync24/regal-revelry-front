import React from "react";
import newsletterLandingPage from "../assets/HomePage/newsletterLandingPage.png";
import { footerText, footerSubTexts } from "../assets/data";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full mt-40" id="footer">
      <div id="footer-form" className="flex flex-col lg:flex-row w-full">
        <div className="bg-hazel p-20 pb-2 flex flex-col gap-6 justify-center items-center lg:w-3/4">
          <h1 className="text-white font-headerFont text-5xl max-md:text-3xl max-md:text-center">
            Endless Inspiration
          </h1>
          <p className="text-white font-sans mt-2 text-md text-left">
            Sign up to our newsletter for fresh updates, encouragement, and
            exclusive insights.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:justify-around w-full">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="p-5 w-2/3 rounded-full placeholder-hazel text-lg max-md:text-md max-md:text-md"
            />
            <button className="w-1/3 text-white uppercase border-2 p-4 rounded-full hover:scale-105 transition-transform duration-300">
              sign up
            </button>
          </div>
          <p className="text-white font-sans mt-2 text-xs text-left">
            By clicking Sign Up you’re confirming that you agree with our Terms
            and Conditions.
          </p>
        </div>
        <div>
          <img src={newsletterLandingPage} className="h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col bg-beige p-10" id="footer-end">
        <div
          id="footer-end-left"
          className="flex flex-row max-lg:flex-col max-lg:gap-10 max-lg:justify-center max-lg:items-center justify-between"
        >
          <div className="flex items-start flex-col w-[30%] max-lg:w-full max-lg:items-center">
            <Link to="/">
              <Logo />
            </Link>
            <p className="font-sans mt-2 text-gray-600 text-xl text-start max-lg:text-center max-lg:text-2xl">
              The event specialists at our headquarters are available to help
              with every aspect of your event.
            </p>
            <div className="bg-lime-700 shadow-lg shadow-lime-800 h-[1px] w-full rounded-full mt-10"></div>
            <div className="flex flex-col items-start justify-center gap-3 font-sans mt-2 text-lime-800 text-xl text-start">
              <p>Call us: xxxxxxxxxx &#8226; xxxxxxxxxx</p>
              <p>Email us: xxxx@regalRevelry.com</p>
              <p>Find us: 308 Negra Arroyo Lane</p>
            </div>
          </div>

          <div className="bg-lime-700 shadow-lg shadow-lime-800 h-[1.5px] w-full rounded-full my-2 hidden max-lg:block"></div>

          <div
            id="footer-end-right"
            className="flex justify-center gap-20 text-xl flex-wrap"
          >
            {footerText.map((item, index) => {
              return (
                <div key={`footer-${index}`}>
                  <h4 className="font-headerFont capitalize font-semibold text-leaf">
                    {item}
                  </h4>
                  {footerSubTexts[index].map((it, idx) => {
                    return (
                      <p
                        key={`footer-${index}-${idx}`}
                        className="font-sans mt-2 text-gray-600 capitalize text-lg text-start cursor-pointer"
                      >
                        {it}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-lime-700 shadow-lg shadow-lime-800 h-[1.5px] w-full rounded-full mt-10 mb-2"></div>
        <div className="flex justify-end items-end">
          <a
            href="https://lightsync24.github.io/myPortfolio/"
            target="blank"
            className="flex justify-end items-end text-leaf font-semibold flex-col"
          >
            Developed by Kshitij Tiwari
            <span className="text-xs capitalize">&#128279; (visit my website)</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
