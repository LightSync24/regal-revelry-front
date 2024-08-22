import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";

const Navbar = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  return (
    <nav className="flex w-full py-9 px-10 min-h-24">
      {/* Desktop Navigation */}
      <div className="lg:flex hidden w-full justify-between text-sm items-center uppercase font-sans">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/events">Events</Link>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/venues">Venues</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/availableEvents">
          <button className="bg-hazel px-3 py-2 rounded-3xl text-white uppercase">
            Available Events
          </button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex w-full relative justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <GiHamburgerMenu
          className="text-3xl"
          onClick={() => {
            setToggleDropDown((prev) => !prev);
          }}
        />

        {toggleDropDown && (
          <div className="dropdown z-50">
            <Link
              to="/about"
              className="dropdown_link"
              onClick={() => setToggleDropDown(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="dropdown_link"
              onClick={() => setToggleDropDown(false)}
            >
              Services
            </Link>
            <Link
              to="/events"
              className="dropdown_link"
              onClick={() => setToggleDropDown(false)}
            >
              Events
            </Link>
            <Link
              to="/venues"
              className="dropdown_link"
              onClick={() => setToggleDropDown(false)}
            >
              Venues
            </Link>
            <Link
              to="/contact"
              className="dropdown_link"
              onClick={() => setToggleDropDown(false)}
            >
              Contact Us
            </Link>
            <Link to="/availableEvents">
              <button className="bg-hazel px-3 py-2 rounded-3xl text-white uppercase">
                Available Events
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
