import React from "react";
import { aboutPageImages } from "../assets/data";
import aboutCollage from "../assets/AboutPage/about-collage.png";
import SlidingButton from "../Components/SlidingButton";

const About = () => {
  return (
    <section
      id="about-page"
      className="flex flex-col justify-center items-center"
    >
      <div
        id="memorable-moments"
        className="flex flex-col justify-center items-center gap-3"
      >
        <p className="flex justify-center items-center text-center uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
          About
        </p>
        <h1 className="font-headerFont text-leaf text-3xl lg:text-7xl mt-3 w-2/3 text-center">
          Making Moments Memorable
        </h1>
        <p className="w-2/3 font-sans mt-2 text-gray-600 text-xl text-center">
          As a full-service experiential caterer and hospitality group, Regal
          Revelry goes beyond traditional food and beverage services. We seek
          every opportunity to integrate meaningful guest experiences, providing
          culinary excellence in an immersive and memorable atmosphere. Our
          innovative team extends culinary craft to artistic presentation,
          thematic delivery, and multisensory experiences.
        </p>
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
        id="vision"
        className="flex flex-col justify-center items-center gap-3 mt-20 bg-leaf/10 p-10"
      >
        <p className="flex justify-center items-center text-center uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
          our vision
        </p>
        <h1 className="font-headerFont text-leaf text-3xl lg:text-8xl mt-3 w-2/3 text-center">
          To Create & Inspire
        </h1>
        <p className="w-2/3 font-sans mt-2 text-gray-600 text-xl text-center">
          Regal Revelry doesn’t just meet expectations. Our creative team and
          talented partners continually pursue imaginative new ideas, making us
          a top trendsetter in the industry and earning us the prestigious
          accolade of National Caterer of the Year. We’re passionate about
          creating experiences and leaving lasting memories for our guests. Our
          inspiration is an ongoing dialogue; we persistently seek it and strive
          to inspire others through our commitment to excellence and unwavering
          passion.
        </p>
      </div>

      <div
        id="mission"
        className="flex flex-col lg:flex-row justify-around p-1 items-center mt-10 gap-5"
      >
        <div
          id="mission-text"
          className="flex flex-col justify-center items-center w-3/4"
        >
          <p className="flex justify-center items-center text-center uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
            our mission
          </p>
          <h1 className="font-headerFont text-leaf text-3xl lg:text-7xl mt-3 w-2/3 text-center">
            Creating Remarkable Experiences!
          </h1>
          <p className="w-2/3 font-sans mt-2 text-gray-600 text-xl text-center">
            Our specialty is providing peace of mind. With our experienced and
            dedicated team, we handle all the nuances of off-site catering, so
            you can enjoy your own event as a guest. From first impressions to
            lasting impressions, our commitment is to make every event a truly
            exceptional experience!
          </p>
          <SlidingButton text={"events"} />
        </div>

        <img
          src={aboutCollage}
          alt="about-collage"
          className="w-[500px] pr-10"
        />
      </div>

      <div
        id="core-val"
        className="bg-leaf/10 flex flex-col mt-10 items-center pt-5 w-full"
      >
        <p className="flex justify-center items-center text-center uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
          our core values
        </p>
        <h1 className="font-headerFont text-leaf text-3xl lg:text-7xl mt-3 w-2/3 text-center">
          Our Promise to You
        </h1>

        <div
          id="text-desc"
          className="flex flex-col lg:flex-row justify-center items-start p-10 gap-10"
        >
          <div className="flex flex-col max-lg:items-center w-full">
            <h2 className="font-headerFont text-leaf text-2xl font-medium">
              Service Excellence
            </h2>
            <p className="font-sans mt-2 text-gray-600">
              We are committed to proactively identifying and meeting the needs
              of our colleagues, clients, and communities.
            </p>
          </div>
          <div className="flex flex-col max-lg:items-center w-full">
            <h2 className="font-headerFont text-leaf text-2xl font-medium">
              Collaboration
            </h2>
            <p className="font-sans mt-2 text-gray-600">
              Our success is directly correlated to active participation and the
              exchange of sound knowledge.
            </p>
          </div>
          <div className="flex flex-col max-lg:items-center w-full">
            <h2 className="font-headerFont text-leaf text-2xl font-medium">
              Dedication
            </h2>
            <p className="font-sans mt-2 text-gray-600">
              We are dedicated to the success of every event, as passion,
              purpose, and pride are the driving forces behind our team.
            </p>
          </div>
          <div className="flex flex-col max-lg:items-center w-full">
            <h2 className="font-headerFont text-leaf text-2xl font-medium">
              Trustworthiness
            </h2>
            <p className="font-sans mt-2 text-gray-600">
              We refuse to compromise on our quality, making us a reliable
              resource and dependable partner.
            </p>
          </div>
        </div>
      </div>

      <div
        id="memorable-moments"
        className="flex flex-col justify-center items-center gap-3 mt-32"
      >
        <p className="flex justify-center items-center text-center uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
          giving back
        </p>
        <h1 className="font-headerFont text-leaf text-3xl lg:text-7xl mt-3 w-2/3 text-center">
          Regal Care
        </h1>
        <p className="w-2/3 font-sans mt-2 text-gray-600 text-xl text-center">
          We wholeheartedly believe that a generous spirit unites our community.
          Our Regal Culture Committee leads community service events throughout
          the year, dedicating our time to various causes and philanthropic
          work.
        </p>
        <br />
        <p className="w-2/3 font-sans mt-2 text-gray-600 text-xl text-center">
          Regal Revelry is proud to partner with XXX XXX XXX, a local non-profit
          organization that provides redistributed meals to the hungry. By
          donating our leftover and unused food to this great local program,
          every one of our events makes a difference in our community!
        </p>
      </div>
    </section>
  );
};

export default About;
