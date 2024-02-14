import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../dist/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhoneVolume,
  faUser,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import SearchBar from "../logic/searchBar/SearchBar";
import MobileHeader from "./mobile/MobileHeader.jsx";

import { scrollToTop } from "../logic/aditionalFunctions/scroll/scrollTo.js";

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible((prevState) => !prevState);
  };

  return (
    <>
      <header className="header">
        {/* mobile */}
        <MobileHeader />
        {/* desktop */}
        <div className="header__container">
          <div className="header__body"></div>
          <nav className="header__menu">
            <ul className="header__info">
              <li onClick={scrollToTop}>
                <Link to="/reviews" className="link inf">
                  Reviews
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/shop" className="link inf">
                  Shop
                </Link>
              </li>

              <li>
                <a href="tel:0965010275" className="link inf ">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                  &nbsp; +380 96 501 0275
                </a>
              </li>
              <li>
                <a href="tel:0933319890" className="link inf ">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                  &nbsp; +380 93 331 9890
                </a>
              </li>
              <li>
                <a className="link inf icons glass" onClick={toggleSearch}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
                <SearchBar
                  isVisible={searchVisible}
                  toggleVisible={toggleSearch}
                />
              </li>
              <li onClick={scrollToTop}>
                <a href="" className="link inf icons user">
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/favorites" className="link inf icons heart">
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/cart" className="link inf icons cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="header__menu">
            <ul className="header__list">
              <li onClick={scrollToTop}>
                <Link to="/" className="header__logo">
                  <img style={{ width: "60px" }} src={logo} alt="logo" />
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link
                  to="/discounts"
                  style={{ color: "red" }}
                  className="link "
                >
                  Discounts
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/new" style={{ color: "lime" }} className="link ">
                  New
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/clothes" className="link ">
                  Clothes
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/accessories" className="link ">
                  Accessories
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
