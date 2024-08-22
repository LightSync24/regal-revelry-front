import React from "react";
import EventsPage from "../assets/EventsPage/EventsPage.jpg";
import { aboutPageImages, whyWorkImg } from "../assets/data";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Events = () => {
  return (
    <section id="events-page" className="flex flex-col justify-center">
      <div id="events" className="flex flex-col">
        <img
          src={EventsPage}
          className="object-cover w-full h-auto"
          alt="Venues Background"
        />
        <div className="flex flex-col justify-center items-center -mt-10">
          <p className="uppercase tracking-wider font-semibold font-serif text-leaf text-xl text-center bg-white h-[60px] w-[200px] rounded-full">
            <span className="opacity-70">Events</span>
          </p>
          <h1 className="font-headerFont text-leaf text-5xl lg:text-8xl max-sm:text-2xl mt-2 w-3/4 text-center">
            One-of-a-Kind Experiences
          </h1>
          <p className="font-sans mt-5 text-gray-600 text-xl text-center w-[60%]">
            At Regal Revelry Catering and Events, we believe, like any great
            recipe, creating a remarkable event requires basic ingredients that
            must be included if you want to produce a masterpiece: Phenomenal
            food, outstanding service, and extraordinary presentation. It’s a
            commitment to which we’ve stayed true for nearly a decade!
          </p>
        </div>
      </div>

      <div
        id="images-lg"
        className="hidden lg:flex justify-between items-center gap-10 mt-10"
      >
        {aboutPageImages.map((ind) => {
          return (
            <img
              src={ind}
              alt="about page images"
              key="ind"
              className="w-[320px] h-[500px] object-cover rounded-t-full mx-auto"
            />
          );
        })}
      </div>

      <div
        id="images-mx-lg"
        className="flex lg:hidden flex-col justify-center items-center gap-10 p-5 mt-10"
      >
        {aboutPageImages.map((ind) => {
          return (
            <img
              src={ind}
              alt="about page image"
              key="ind"
              className="w-[450px] h-[500px] object-cover rounded-full"
            />
          );
        })}
      </div>

      <div
        id="detail"
        className="flex flex-col justify-center items-center mt-20"
      >
        <h1 className="font-headerFont text-leaf text-6xl lg:text-8xl max-sm:text-2xl mt-2 w-2/3 text-center">
          Every Detail
        </h1>
        <h1 className="font-headerFont text-leaf text-6xl lg:text-8xl max-sm:text-2xl mt-2 w-2/3 text-center">
          of Every Moment
        </h1>

        <ul className="mt-5 flex flex-col justify-center items-center font-sans text-gray-600 text-xl text-center">
          <li>Award-Winning Catering</li>
          <li>The Highest Quality Of Service</li>
          <li>Access To One-Of-A-Kind Venues</li>
          <li>Meticulous Planning & Production</li>
          <li>Incredible Design & Installation</li>
          <li>Completely Personalized Experiences</li>
        </ul>
      </div>

      <div
        id="maj-section-lg"
        className="bg-leaf/10 hidden lg:flex flex-col justify-center items-center p-10 pt-32 mt-20 gap-24"
      >
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-[50%]">
            <p className="uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
              why work with us?
            </p>
            <h1 className="font-headerFont text-leaf text-4xl">
              Personalized Planning
            </h1>
            <p className="font-sans mt-2 text-gray-600 text-2xl w-3/4">
              We love what we do, and we’re really good at it! You can count on
              our team’s depth of knowledge and expertise to guide you through
              the planning process seamlessly.
            </p>
          </div>
          <img
            src={whyWorkImg[0]}
            alt="img1"
            className="h-[600px] w-[400px] rounded-t-full object-cover"
          />
        </div>

        <div className="flex flex-row-reverse justify-center items-center">
          <div className="flex flex-col w-[50%] justify-end items-end">
            <p className="uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl text-right">
              why work with us?
            </p>
            <h1 className="font-headerFont text-leaf text-4xl text-right">
              Exceptional Catering
            </h1>
            <p className="font-sans mt-2 text-gray-600 text-2xl w-3/4 text-right">
              Catering is an art, and with our elevated culinary experiences
              paired with outstanding service, you’re offered peace of mind and
              a remarkable experience.
            </p>
          </div>
          <img
            src={whyWorkImg[1]}
            alt="img1"
            className="h-[600px] w-[400px] rounded-t-full object-cover"
          />
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col w-[50%]">
            <p className="uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
              why work with us?
            </p>
            <h1 className="font-headerFont text-leaf text-4xl">
              Flawless Execution
            </h1>
            <p className="font-sans mt-2 text-gray-600 text-2xl w-3/4">
              We do more than cook up a great meal. Our experienced and
              dedicated team takes care of all the nuances of off-site catering,
              allowing you to be a guest at your own party.
            </p>
          </div>
          <img
            src={whyWorkImg[2]}
            alt="img1"
            className="h-[600px] w-[400px] rounded-t-full object-cover"
          />
        </div>
      </div>

      <div
        id="maj-section-sm"
        className="bg-leaf/10 flex lg:hidden flex-col justify-center items-center p-10 pt-32 mt-20 gap-24"
      >
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col w-full justify-center items-center">
            <p className="uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
              why work with us?
            </p>
            <h1 className="font-headerFont text-leaf text-4xl">
              Personalized Planning
            </h1>
            <p className="font-sans mt-2 text-gray-600 text-2xl w-3/4">
              We love what we do, and we’re really good at it! You can count on
              our team’s depth of knowledge and expertise to guide you through
              the planning process seamlessly.
            </p>
          </div>
          <img
            src={whyWorkImg[0]}
            alt="img1"
            className="h-[600px] w-[400px] rounded-t-full object-cover"
          />
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-10">
          <div className="flex flex-col w-full justify-center items-center">
            <p className="uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
              why work with us?
            </p>
            <h1 className="font-headerFont text-leaf text-4xl">
              Exceptional Catering
            </h1>
            <p className="font-sans mt-2 text-gray-600 text-2xl w-3/4">
              Catering is an art, and with our elevated culinary experiences
              paired with outstanding service, you’re offered peace of mind and
              a remarkable experience.
            </p>
          </div>
          <img
            src={whyWorkImg[1]}
            alt="img1"
            className="h-[600px] w-[400px] rounded-t-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col w-full justify-center items-center">
            <p className="uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
              why work with us?
            </p>
            <h1 className="font-headerFont text-leaf text-4xl">
              Flawless Execution
            </h1>
            <p className="font-sans mt-2 text-gray-600 text-2xl w-3/4">
              We do more than cook up a great meal. Our experienced and
              dedicated team takes care of all the nuances of off-site catering,
              allowing you to be a guest at your own party.
            </p>
          </div>
          <img
            src={whyWorkImg[2]}
            alt="img1"
            className="h-[600px] w-[400px] rounded-t-full object-cover"
          />
        </div>
      </div>

      <div
        id="experiences"
        className="mt-56 p-5 w-full flex flex-col justify-center items-center"
      >
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

export default Events;
