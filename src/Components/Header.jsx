import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  const hideSearch = () => {
    setSearchVisible(false);
  };

  return (
    <>
      <header className="header fixed top-0 left-0 w-full bg-body-color shadow-md z-10">
        <nav className="nav h-20 flex justify-between items-center max-w-1120 mx-4">
          <div className="logo-container flex justify-between">
            <a href="#">
              <Image
                className="rajpollogo"
                src="/logo.png"
                alt="Rajasthanpolice"
                width={70}
                height={70}
              />
            </a>
          </div>
          <div>
            <h1 className="text-green-500 text-4xl mt-3 text">
              Rajasthan Police
            </h1>
            <p className="text-xl text-green-500 ml-14 items-center mb-3">
              Feedback Portal
            </p>
          </div>

          <div className="nav__menu">
            <ul
              className={`nav__list flex flex-row gap-12 ${
                menuVisible ? "show-menu" : ""
              }`}
            >
              <li className="nav__item">
                <Link
                  href="#"
                  className="nav__link hover:text-green-500 hover:font-bold"
                >
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  href="./form.html"
                  className="nav__link hover:text-green-500 hover:font-bold"
                >
                  Feedback
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  href="./media.html"
                  className="nav__link hover:text-green-500 hover:font-bold"
                >
                  Community
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  href="#"
                  className="nav__link hover:text-green-500 hover:font-bold"
                >
                  Our Team
                </Link>
              </li>
            </ul>

            <div
              className={`nav__close text-lg hover:text-green-500 cursor-pointer transition-color duration-400 hover:font-bold ${
                menuVisible ? "show-menu" : ""
              }`}
              onClick={hideMenu}
              id="nav-close"
            >
              <RxCross1 className="ri-close-line hidden hover:font-bold" />
            </div>
          </div>

          <div className="nav__actions flex items-center mr-20 gap-4">
            <IoIosSearch
              className="ri-search-line nav__search text-lg text-title-color cursor-pointer transition-color duration-400 hover:text-green-500 hover:font-bold"
              onClick={toggleSearch}
            />
            <FaUser className="ri-user-line nav__login text-lg cursor-pointer transition-colors duration-400 hover:text-green-500 hover:font-bold" />
            <div
              className="nav__toggle text-lg text-title-color cursor-pointer transition-color duration-400"
              id="nav-toggle"
              onClick={toggleMenu}
            >
              <SlMenu className="hover:text-green-500 hidden hover:font-bold" />
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`search fixed left-0 top-0 w-full h-full z-20 bg-modal-backdrop backdrop-blur-lg bg-opacity-10 p-[8rem] md:p-[8rem] 1.5rem opacity-0 pointer-events-none transition-opacity duration-400 ${
          searchVisible ? "show-search" : ""
        }`}
        id="search"
      >
        <form action="" className="search__form">
          <IoIosSearch className="ri-search-line" />
          <input
            type="search"
            placeholder="What are you looking for?"
            className="search__input"
          />
        </form>

        <IoMdClose className="ri-close-line hidden" onClick={hideSearch} />
      </div>
    </>
  );
};

export default Header;
