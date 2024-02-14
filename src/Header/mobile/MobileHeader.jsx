import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faBars,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import SearchBar from "../../logic/searchBar/SearchBar";
import SideBar from "../../logic/sideBar/SideBar";

import { scrollToTop } from "../../../src/logic/aditionalFunctions/scroll/scrollTo.js";

const MobileHeader = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible((prevState) => !prevState);
  };

  const toggleSideBar = () => {
    setSideBarVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="header__container-mobile">
        <div className="header__body"></div>

        <nav className="header__menu">
          <ul className="header__list">
            <li>
              <a className="link inf icons" onClick={toggleSideBar}>
                <FontAwesomeIcon icon={faBars} />
              </a>
              <SideBar
                isVisible={sideBarVisible}
                toggleVisible={toggleSideBar}
              />
            </li>

            <li onClick={scrollToTop}>
              <Link to="/" className="link inf icons house">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
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
      </div>
    </>
  );
};

export default MobileHeader;
