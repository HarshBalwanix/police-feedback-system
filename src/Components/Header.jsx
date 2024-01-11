import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { FaUser } from "react-icons/fa6";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="bg-white text-center py-5 flex flex-wrap justify-around sticky top-0 ">
//         <div>
//           <Image src={"/logo.png"} alt="not found" width={70} height={70} />
//         </div>
//         <div>
//           <h1 className="text-orange-400 text-5xl text">Rajasthan Police</h1>
//           <p className="text-xl font-semibold text-orange-400 mt-3">
//             Feedback Portal
//           </p>
//         </div>

//         <div>
//           <button
//             onClick={() => {
//               window.location.href = "/";
//             }}
//             className=" bg-orange-400 py-1 px-6 rounded hover:bg-orange-600"
//           >
//             Home
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

const Header = () => {
  return (
    <>
      <header className="header fixed top-0 left-0 w-full bg-body-color shadow-md z-fixed">
        <nav className="nav h-header-height flex justify-between items-center">
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
            <h1 className="text-green-500 text-5xl text">Rajasthan Police</h1>
            <p className="text-xl font-semibold text-green-500 mt-3">
              Feedback Portal
            </p>
          </div>

          <div className="nav__menu  ">
            <ul className="nav__list flex flex-row gap-12">
              <li className="nav__item">
                <a href="#" className="nav__link hover:text-green-500">
                  Home
                </a>
              </li>
              {/* <li className="nav__item">
              <Link href="#" className="nav__link">
                About Us
              </Link>
            </li> */}
              {/* <li className="nav__item">
              <Link href="#" className="nav__link">
                Services
              </Link>
            </li> */}
              <li className="nav__item">
                <Link
                  href="./form.html"
                  className="nav__link hover:text-green-500"
                >
                  Feedback
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  href="./media.html"
                  className="nav__link hover:text-green-500"
                >
                  Community
                </Link>
              </li>
              <li className="nav__item">
                <Link href="#" className="nav__link hover:text-green-500">
                  Our Team
                </Link>
              </li>
            </ul>

            <div
              className="nav__close text-lg text-title-color cursor-pointer transition-color duration-400"
              id="nav-close"
            >
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions flex items-center gap-4">
            {/* <i
              className="ri-search-line nav__search text-lg text-title-color cursor-pointer transition-color duration-400"
              id="search-btn"
            ></i> */}
            <IoIosSearch className="ri-search-line nav__search text-lg text-title-color cursor-pointer transition-color duration-400 hover:text-green-500" />
            {/* <i
              className="ri-user-line nav__login text-lg text-title-color cursor-pointer transition-color duration-400"
              id="login-btn"
            ></i> */}
            <FaUser className="ri-user-line nav__login text-lg text-title-color cursor-pointer transition-color duration-400 hover:text-green-500" />
            <div
              className="nav__toggle text-lg text-title-color cursor-pointer transition-color duration-400"
              id="nav-toggle"
            >
              {/* <i className="ri-menu-line"></i> */}
              <SlMenu className="hover:text-green-500" />
            </div>
          </div>
        </nav>
      </header>
      <div
        className="search fixed left-0 top-0 w-full h-full z-modal bg-modal-backdrop backdrop-blur-lg bg-opacity-10 p-[8rem] md:p-[8rem] 1.5rem opacity-0 pointer-events-none transition-opacity duration-400 "
        id="search"
      >
        <form action="" class="search__form">
          <i class="ri-search-line search__icon"></i>
          <input
            type="search"
            placeholder="What are you looking for?"
            class="search__input"
          />
        </form>

        <i
          className="ri-close-line search__close absolute top-8 right-8 text-xl text-title-color cursor-pointer"
          id="search-close"
        ></i>
      </div>
    </>
  );
};

export default Header;
