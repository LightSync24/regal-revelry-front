import React from "react";
import contactImg from "../assets/ContactPage/ContactPageBg.jpg";
import fullTime from "../assets/ContactPage/full-time.jpg";
import partTime from "../assets/ContactPage/part-time.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center items-center">
      <div id="contact-hero" className="flex flex-col">
        <img
          src={contactImg}
          className="object-cover w-full h-auto"
          alt="Venues Background"
        />
        <div className="flex flex-col justify-center items-center -mt-10">
          <p className="uppercase tracking-wider font-semibold font-serif text-leaf text-xl text-center bg-white h-[60px] w-[200px] rounded-full">
            <span className="opacity-70">Contact</span>
          </p>
          <h1 className="font-headerFont text-leaf text-5xl lg:text-8xl max-sm:text-2xl mt-2 w-3/4 text-center">
            Let’s Get This Party Started
          </h1>
          <p className="font-sans mt-5 text-gray-600 text-xl text-center w-[60%]">
            Tell us about your wedding, social gathering or corporate event! A
            Regal Revelry Catering & Event Specialist will be in touch to answer
            all of your questions and provide information about our catering and
            events services. We can’t wait to meet you!
          </p>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center mt-32"
        id="careers-intro"
      >
        <p className="uppercase tracking-wider font-semibold font-serif text-leaf text-xl text-center rounded-full">
          <span className="opacity-70">Careers</span>
        </p>
        <h1 className="font-headerFont text-leaf text-5xl lg:text-8xl max-sm:text-2xl mt-2 w-3/4 text-center">
          Grow With Us
        </h1>
        <p className="font-sans mt-5 text-gray-600 text-xl text-center w-[60%]">
          Our success and our journey is not one that’s taken alone. Passionate,
          talented people are a huge part of what has made Regal Revelry so
          successful. We are a hospitality-driven company with strong core
          values and a vision to create and inspire. Dedication, passion,
          purpose, and pride are the driving forces behind our exceptional team.
        </p>
        <p className="font-sans mt-5 text-gray-600 text-xl text-center w-[60%]">
          Please take a moment to view our open positions below and apply. We
          would love the opportunity to welcome you into our growing team!
        </p>
      </div>

      <div
        id="job-options"
        className="flex flex-col justify-center items-center bg-leaf/10 w-full mt-32 py-10"
      >
        <p className="uppercase tracking-wider font-semibold font-serif text-leaf text-xl text-center rounded-full">
          <span className="opacity-70">join the team</span>
        </p>
        <h1 className="font-headerFont text-leaf text-5xl lg:text-8xl max-sm:text-2xl mt-2 w-3/4 text-center">
          Open Positions
        </h1>
        <p className="font-sans mt-5 text-gray-600 text-xl text-center w-[65%]">
          Join our team of exceptional event and service staff! Enjoy
          competitive pay, flexible scheduling, hands-on training, and ample
          opportunity for growth. (And yes, there will be food.){" "}
        </p>

        <div
          id="job-options-images"
          className="flex max-md:flex-col justify-center items-center mt-5 gap-20"
        >
          <div
            id="career-img-container-1"
            className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-500"
          >
            <img
              src={fullTime}
              alt="full-time"
              className="h-[400px] w-[300px] object-cover rounded-full"
            />
            <h1 className="font-headerFont text-leaf text-4xl max-sm:text-2xl mt-2 w-3/4 text-center">
              Full Time
            </h1>
          </div>
          <div
            id="career-img-container-2"
            className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-500"
          >
            <img
              src={partTime}
              alt="full-time"
              className="h-[400px] w-[300px] object-cover rounded-full"
            />
            <h1 className="font-headerFont text-leaf text-4xl max-sm:text-2xl mt-2 w-3/4 text-center">
              Part Time
            </h1>
          </div>
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

export default Contact;
