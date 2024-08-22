import React, { useState } from "react";
import HomeVideo from "../assets/HomePage/HomeVideo.mp4";
import venuesBg from "../assets/HomePage/venuesBg.png";
import SlidingButton from "../Components/SlidingButton";
import Home_Services_GIF_R3 from "../assets/HomePage/Home_Services_GIF_R3.gif";
import {
  magicalHeadings,
  magicalImage,
  magicalText,
  welcome,
} from "../assets/data";

const Home = () => {
  const [welIdx, setWelIdx] = useState(0);
  const [magIdx, setMagIdx] = useState(0);
  return (
    <div className="w-full flex flex-col">
      <div className="relative" id="video-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-auto"
        >
          <source src={HomeVideo} />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl text-center break-words font-headerFont">
            Simply the Finest
          </h2>
        </div>
      </div>

      <div
        id="welcome-section"
        className="mt-5 flex flex-col lg:flex-row gap-28 lg:gap-10 w-full p-12 pr-0"
      >
        <div className="lg:w-2/3 pr-12">
          <p className="uppercase tracking-wider opacity-60 font-semibold  text-leaf text-xl">
            Welcome to Regal Revelry
          </p>
          <h1 className="font-headerFont text-leaf text-5xl lg:text-7xl mt-2 text-center lg:text-left">
            Remarkable Catering & Events
          </h1>
          <p className="font-sans mt-2 text-gray-600 text-xl">
            Regal Revelry is the premier catering and events company of choice.
            We create remarkable experiences by offering the finest quality
            foods and providing unsurpassed personalized service, driven by our
            passion for life’s special occasions.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <img
            src={welcome[welIdx]}
            className="rounded-tl-full object-cover lg:w-[900px] h-[450px]"
          />
          <div id="btns" className="w-1/3 flex justify-center gap-5 mx-auto">
            <div
              className={`h-1 ${
                welIdx == 0 ? "bg-hazel" : "bg-leaf/50"
              } w-1/4 rounded-lg cursor-pointer`}
              onClick={() => setWelIdx(0)}
            ></div>
            <div
              className={`h-1 ${
                welIdx == 1 ? "bg-hazel" : "bg-leaf/50"
              } w-1/4 rounded-lg cursor-pointer`}
              onClick={() => setWelIdx(1)}
            ></div>
            <div
              className={`h-1 ${
                welIdx == 2 ? "bg-hazel" : "bg-leaf/50"
              } w-1/4 rounded-lg cursor-pointer`}
              onClick={() => setWelIdx(2)}
            ></div>
            <div
              className={`h-1 ${
                welIdx == 3 ? "bg-hazel" : "bg-leaf/50"
              } w-1/4 rounded-lg cursor-pointer`}
              onClick={() => setWelIdx(3)}
            ></div>
          </div>
        </div>
      </div>

      <div
        className="mt-5 hidden lg:flex w-full p-10 items-center lg:gap-5"
        id="magical-section"
      >
        <div className="w-2/3">
          <img
            src={magicalImage[magIdx]}
            alt="magImg"
            className="w-[500px] h-[750px] rounded-t-full object-cover"
          />
        </div>
        <div className="w-2/3 flex justify-between flex-col">
          <h1 className="font-headerFont text-leaf lg:text-7xl text-center lg:text-left w-full">
            Making Every Experience Magical
          </h1>
          <div className="mt-10 flex gap-20">
            <ul className="text-gray-400 flex flex-col gap-7 font-headerFont text-2xl">
              <li
                onClick={() => setMagIdx(0)}
                className={`cursor-pointer ${
                  magIdx === 0 ? "text-leaf" : "text-gray-400"
                } hover:text-hazel`}
              >
                Weddings
              </li>
              <li
                onClick={() => setMagIdx(1)}
                className={`cursor-pointer ${
                  magIdx === 1 ? "text-leaf" : "text-gray-400"
                } hover:text-hazel`}
              >
                Social
              </li>
              <li
                onClick={() => setMagIdx(2)}
                className={`cursor-pointer ${
                  magIdx === 2 ? "text-leaf" : "text-gray-400"
                } hover:text-hazel`}
              >
                Corporate
              </li>
              <li
                onClick={() => setMagIdx(3)}
                className={`cursor-pointer ${
                  magIdx === 3 ? "text-leaf" : "text-gray-400"
                } hover:text-hazel`}
              >
                Venues
              </li>
            </ul>

            <div className="flex flex-col justify-start gap-5">
              <h2 className="uppercase tracking-wider opacity-80 font-semibold  text-leaf text-xl">
                {magicalHeadings[magIdx]}
              </h2>
              <p className="font-sans mt-2 text-gray-600 text-xl">
                {magicalText[magIdx]}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex lg:hidden flex-col justify-center items-center mt-7 gap-10"
        id="magical-section-smaller"
      >
        <h1 className="font-headerFont text-leaf text-5xl text-center w-full">
          Make Every Experience Magical
        </h1>

        <div className="flex flex-col justify-center items-center p-10 gap-2">
          <img
            src={magicalImage[0]}
            className="h-[400px] w-[275px] object-cover rounded-full"
          />
          <h1 className="font-headerFont text-5xl text-leaf">Weddings</h1>
          <p className="uppercase tracking-wider opacity-80 font-semibold  text-leaf text-xl">
            {magicalHeadings[0]}
          </p>
          <p className="font-sans mt-2 text-gray-600 text-xl text-center">
            {magicalText[0]}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-10 gap-2">
          <img
            src={magicalImage[1]}
            className="h-[400px] w-[275px] object-cover rounded-full"
          />
          <h1 className="font-headerFont text-5xl text-leaf">Social</h1>
          <p className="uppercase tracking-wider opacity-80 font-semibold  text-leaf text-xl">
            {magicalHeadings[1]}
          </p>
          <p className="font-sans mt-2 text-gray-600 text-xl text-center">
            {magicalText[1]}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-10 gap-2">
          <img
            src={magicalImage[2]}
            className="h-[400px] w-[275px] object-cover rounded-full"
          />
          <h1 className="font-headerFont text-5xl text-leaf">Corporate</h1>
          <p className="uppercase tracking-wider opacity-80 font-semibold  text-leaf text-xl">
            {magicalHeadings[2]}
          </p>
          <p className="font-sans mt-2 text-gray-600 text-xl text-center">
            {magicalText[2]}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-10 gap-2">
          <img
            src={magicalImage[3]}
            className="h-[400px] w-[275px] object-cover rounded-full"
          />
          <h1 className="font-headerFont text-5xl text-leaf">Venues</h1>
          <p className="uppercase tracking-wider opacity-80 font-semibold  text-leaf text-xl">
            {magicalHeadings[3]}
          </p>
          <p className="font-sans mt-2 text-gray-600 text-xl text-center">
            {magicalText[3]}
          </p>
        </div>
      </div>

      <div id="venues" className="mt-40 flex flex-col">
        <img
          src={venuesBg}
          className="object-cover w-full h-auto"
          alt="Venues Background"
        />
        <div className="flex flex-col justify-center items-center -mt-10">
          <p className="uppercase tracking-wider font-semibold font-serif text-leaf text-xl text-center bg-white h-[60px] w-[200px] rounded-full">
            <span className="opacity-70">Venues</span>
          </p>
          <h1 className="font-headerFont text-leaf text-5xl lg:text-7xl max-sm:text-2xl mt-2 w-full text-center">
            Unforgettable Venues
          </h1>
          <p className="font-sans mt-2 text-gray-600 text-xl text-center w-[60%]">
            Regal Revelry is the exclusive or preferred caterer at India’s most
            spectacular properties. From intimate understated spaces to large
            and luxurious, we’ll help you find the event venue that makes your
            heart skip a beat.
          </p>
        </div>
        <SlidingButton text={"venues"} />
      </div>

      <div
        className="mt-10 bg-leaf/10 flex flex-col items-center justify-center"
        id="green-bg-div"
      >
        <div className="w-2/3 flex flex-col gap-5">
          <h1 className="font-headerFont text-leaf text-5xl lg:text-8xl mt-20 text-center">
            Far More Than Just Business
          </h1>
          <p className="font-sans mt-2 text-gray-600 text-xl text-center">
            The way you do anything is the way you do everything. We haven’t
            cracked the code on catering; we simply care unreasonably about
            every aspect of what we do. We care about people as much as we care
            about details, and we absolutely refuse to compromise on making your
            day anything but the best. We’ve got your back from the initial idea
            to the final farewell!
          </p>
        </div>
        <div className="w-2/3 flex flex-col gap-5">
          <h1 className="font-headerFont text-leaf text-5xl lg:text-8xl mt-20 text-center">
            Great Food & A Whole Lot More
          </h1>
          <p className="font-sans mt-2 text-gray-600 text-xl text-center">
            Catering is just the beginning. Sure, we love astonishing your
            guests with attentive service, thoughtful food, and an inviting
            environment. But what really matters most is helping you create
            memories that will last for a lifetime. Our industry experts think
            of all the little things that turn an ordinary event into an
            unforgettable experience.
          </p>
        </div>
        <SlidingButton text={"services"} className="mb-10" />
      </div>

      <div
        className="hidden lg:flex justify-center items-center mt-28 gap-10 px-5"
        id="gif-section"
      >
        <div className="flex flex-col w-1/3 gap-24">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-headerFont text-leaf text-3xl">
              Gourmet Catering
            </h1>
            <p className="font-sans mt-2 text-gray-600 text-lg text-center">
              Our professionally-trained culinary team is passionate and proud
              of our diverse and thoughtful menu, always cooking up something
              that aligns with your great taste.
            </p>
            <button className="border-2 border-hazel/95 text-hazel/95 w-1/3 rounded-full mt-5 h-10 transform hover:scale-110 transition-transform duration-300">
              Learn More
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="font-headerFont text-leaf text-3xl">Bar Service</h1>
            <p className="font-sans mt-2 text-gray-600 text-lg text-center">
              Our sophisticated flavor expertise enables us to create inventive
              concoctions that generate buzz in more ways than one!
            </p>
            <button className="border-2 border-hazel/95 text-hazel/95 w-1/3 rounded-full mt-5 h-10 transform hover:scale-110 transition-transform duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex w-1/3">
          <img
            src={Home_Services_GIF_R3}
            alt="homePagegif"
            className="rounded-t-full h-[700px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col w-1/3 gap-24">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-headerFont text-leaf text-3xl">Staffing</h1>
            <p className="font-sans mt-2 text-gray-600 text-lg text-center">
              The hand-selected team at Regal Revelry are just as important to
              our reputation as our gourmet food. Our staff is certainly the
              best at what they do, and you’ll work with professionals who
              genuinely care about the success of your event!
            </p>
            <button className="border-2 border-hazel/95 text-hazel/95 w-1/3 rounded-full mt-5 h-10 transform hover:scale-110 transition-transform duration-300">
              Learn More
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="font-headerFont text-leaf text-3xl">
              Event Production
            </h1>
            <p className="font-sans mt-2 text-gray-600 text-lg text-center">
              If mind-blowing spectacles and immersive guest experiences are
              what you’re after, the specialists at Regal Revelry can pull it
              off on an epic scale!
            </p>
            <button className="border-2 border-hazel/95 text-hazel/95 w-1/3 rounded-full mt-5 h-10 transform hover:scale-110 transition-transform duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex lg:hidden flex-col justify-center items-center mt-20 gap-3"
        id="gif-section-smaller"
      >
        <div>
          <img
            src={Home_Services_GIF_R3}
            alt="homePageGIF"
            className="h-[450px] w-[300px] rounded-t-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-20 w-2/3">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-headerFont text-leaf text-3xl">
                Gourmet Catering
              </h1>
              <p className="font-sans mt-2 text-gray-600 text-lg text-center w-2/3">
                Our professionally-trained culinary team is passionate and proud
                of our diverse and thoughtful menu, always cooking up something
                that aligns with your great taste.
              </p>
              <button className="border-2 border-hazel/95 text-hazel/95 w-1/3 rounded-full mt-5 h-10 transform hover:scale-110 transition-transform duration-300">
                Learn More
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-headerFont text-leaf text-3xl">Staffing</h1>
              <p className="font-sans mt-2 text-gray-600 text-lg text-center w-2/3">
                The hand-selected team at Regal Revelry are just as important to
                our reputation as our gourmet food. Our staff is certainly the
                best at what they do, and you’ll work with professionals who
                genuinely care about the success of your event!
              </p>
              <button className="border-2 border-hazel/95 text-hazel/95 w-1/3 rounded-full mt-5 h-10 transform hover:scale-110 transition-transform duration-300">
                Learn More
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-headerFont text-leaf text-3xl">
                Event Production
              </h1>
              <p className="font-sans mt-2 text-gray-600 text-lg text-center w-2/3">
                If mind-blowing spectacles and immersive guest experiences are
                what you’re after, the specialists at Regal Revelry can pull it
                off on an epic scale!
              </p>
              <button className="border-2 border-hazel/95 text-hazel/95 w-1/3 rounded-full mt-5 h-10 transform hover:scale-110 transition-transform duration-300">
                Learn More
              </button>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="font-headerFont text-leaf text-3xl">
                Bar Service
              </h1>
              <p className="font-sans mt-2 text-gray-600 text-lg text-center w-2/3">
                Our sophisticated flavor expertise enables us to create
                inventive concoctions that generate buzz in more ways than one!
              </p>
              <button className="border-2 border-hazel/95 text-hazel/95 w-1/3 rounded-full mt-5 h-10 transform hover:scale-110 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
