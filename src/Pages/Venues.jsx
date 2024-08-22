import React from "react";
import venuesHero from "../assets/VenuesPage/venues-hero.png";
import { venueImgTitle, venuesImg } from "../assets/data";
import arrowDown from "../assets/VenuesPage/venue-arrow-down.gif";

const Venues = () => {
  return (
    <section id="venues-page" className="flex flex-col justify-center">
      <div id="venues-hero" className="flex flex-col">
        <img
          src={venuesHero}
          className="object-cover w-full h-auto"
          alt="Venues Background"
        />
        <div className="flex flex-col justify-center items-center -mt-10">
          <p className="uppercase tracking-wider font-semibold font-serif text-leaf text-xl text-center bg-white h-[60px] w-[200px] rounded-full">
            <span className="opacity-70">Venues</span>
          </p>
          <h1 className="font-headerFont text-leaf text-5xl lg:text-8xl max-sm:text-2xl mt-2 w-2/3 text-center">
            Breathtaking Venues
          </h1>
          <p className="font-sans mt-5 text-gray-600 text-xl text-center w-[60%]">
            There’s a reason Regal Revelry is the exclusive or preferred caterer
            at Southern California’s most spectacular properties. We
            consistently produce outstanding food with exceptional service to
            match! From small and understated to large and luxurious, we’ll help
            you find the wedding or event venue that makes your heart skip a
            beat.
          </p>
        </div>
      </div>

      <div
        id="collective"
        className="flex flex-col justify-center items-center bg-leaf/10 mt-44 pb-5"
      >
        <div
          id="collective-text"
          className="flex max-lg:flex-col justify-center items-center p-10 w-[60%] gap-5 mx-auto"
        >
          <h1 className="font-headerFont text-leaf text-6xl max-md:text-4xl max-sm:text-2xl mt-2">
            Regal Revelry Collective
          </h1>
          <p className="font-sans mt-5 text-gray-600 text-lg">
            This curated collection of properties gives you the full Regal
            experience. Each venue in this collection is operated by Regal
            Revelry which gives you exclusive direct access to these properties.
          </p>
        </div>

        <div
          id="collective-images"
          className="flex flex-wrap justify-center items-center mt-24 gap-5 px-5"
        >
          {venuesImg.map((i, idx) => {
            return (
              <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-500">
                <img
                  src={i}
                  alt="venue-img"
                  className="h-[375px] w-[375px] object-cover rounded-xl"
                />
                <h1 className="font-headerFont text-leaf text-2xl mt-2 w-2/3 text-center">
                  {venueImgTitle[idx]}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      <div
        id="filter-venues"
        className="flex flex-col justify-center items-center mt-20 w-full"
      >
        <img
          src={arrowDown}
          alt="arrow-down-gif"
          className="max-md:h-[70px] h-[100px]"
        />
        <h1 className="font-headerFont text-3xl lg:text-5xl text-leaf">
          Explore All Venues
        </h1>
        <p className="font-sans mt-5 text-gray-600 text-lg w-2/3 text-center">
          When it comes to selecting the perfect venue, when you know, you know!
          We’re proud to be partners with the most excellent event spaces in
          India. Explore below or contact us directly to help narrow down the
          best options for your event.
        </p>

        <div
          id="selects"
          className="flex max-md:flex-col justify-evenly items-center gap-3 mt-5 w-full"
        >
          <select
            name="location"
            id="location"
            className="border border-gray-600 p-2 font-sans text-gray-600 text-lg w-[15%] uppercase tracking-wider"
          >
            <option value="" disabled selected>
              Locations
            </option>
            <option>New Delhi</option>
            <option>Delhi NCR</option>
            <option>Mumbai</option>
            <option>Hyderabad</option>
            <option>Pune</option>
          </select>
          <select
            name="capacities"
            id="capacities"
            className="border border-gray-600 p-2 font-sans text-gray-600 text-lg w-[15%] uppercase tracking-wider"
          >
            <option value="" disabled selected>
              Capacities
            </option>
            <option>Any</option>
            <option>0-50</option>
            <option>50-100</option>
            <option>100-200</option>
            <option>200-300</option>
            <option>300-500</option>
            <option>500+</option>
          </select>
          <select
            name="location"
            id="location"
            className="border border-gray-600 p-2 font-sans text-gray-600 text-lg w-[15%] uppercase tracking-wider"
          >
            <option value="" disabled selected>
              spaces
            </option>
            <option>any</option>
            <option>both</option>
            <option>indoor</option>
            <option>outdoor</option>
          </select>
          <select
            name="location"
            id="location"
            className="border border-gray-600 p-2 font-sans text-gray-600 text-lg w-[15%] uppercase tracking-wider"
          >
            <option value="" disabled selected>
              Styles
            </option>
            <option>any</option>
            <option>craftsman</option>
            <option>historic</option>
            <option>hotel</option>
            <option>modern</option>
            <option>museum</option>
            <option>romantic</option>
          </select>
          <select
            name="location"
            id="location"
            className="border border-gray-600 p-2 font-sans text-gray-600 text-lg w-[15%] uppercase tracking-wider"
          >
            <option value="" disabled selected>
              Amenities
            </option>
            <option>any</option>
            <option>air conditioning</option>
            <option>hotel accommodations</option>
            <option>on-suite parking</option>
            <option>rentals</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Venues;
