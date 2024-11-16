import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import kemal from "../assets/img/kemal.jpg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full ">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer ">
          <img src={kemal} alt="Kemal" className="w-10 h-10 mr-2 rounded-full" />
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold ">FoodieWeb</h1>
          </div>

          <nav className="flex-row items-center hidden gap-8 text-lg font-medium md:flex">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-brightColor"
            >
              Home
            </Link>

            <div className="relative group">
              <div className="flex items-center gap-1 ">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="transition-all cursor-pointer hover:text-brightColor"
                >
                  Dishes
                </Link>

                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              <ul className="absolute hidden p-5 space-y-2 bg-white border border-gray-300 rounded-lg group-hover:block">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 transition-all cursor-pointer hover:text-brightColor"
                  >
                    Spicy
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 transition-all cursor-pointer hover:text-brightColor"
                  >
                    Tasty
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 transition-all cursor-pointer hover:text-brightColor"
                  >
                    Delicious
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 transition-all cursor-pointer hover:text-brightColor"
                  >
                    Crispy
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-brightColor"
            >
              About
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-brightColor"
            >
              Menu
            </Link>

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-brightColor"
            >
              Reviews
            </Link>

            <Button title="Login" />
          </nav>

          <div className="flex items-center md:hidden">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            Dishes
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer  hover:text-brightColor"
            onClick={closeMenu}
          >
            Reviews
          </Link>

          <Button title="login" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
