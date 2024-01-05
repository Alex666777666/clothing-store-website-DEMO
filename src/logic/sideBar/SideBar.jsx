import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhoneVolume,
  faUser,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faHouse,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import SearchBar from "../../logic/searchBar/SearchBar";

const SideBar = ({ isVisible, toggleVisible }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible((prevState) => {
      if (prevState) {
        toggleVisible();
      }
      return !prevState;
    });
  };

  return isVisible ? (
    <div className="overlay-sideBar">
      <div className="sideBar-container">
        <div className="header__container-mobile">
          <div className="header__body"></div>

          <nav className="header__menu">
            <ul className="header__list">
              <li>
                <a
                  className="link inf icons heart sideBar-cancel"
                  onClick={toggleVisible}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </a>
              </li>

              <li>
                <Link
                  to="/"
                  className="link inf icons house"
                  onClick={toggleVisible}
                >
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

              <li>
                <a
                  href=""
                  className="link inf icons user"
                  onClick={toggleVisible}
                >
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="link inf icons heart"
                  onClick={toggleVisible}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="link inf icons cart"
                  onClick={toggleVisible}
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="sideBar-menu">
          <ul className="sideBar-info">
            <li>
              <Link
                to="/discounts"
                style={{ color: "red" }}
                className="sideBar-link "
                onClick={toggleVisible}
              >
                Discounts
              </Link>
            </li>
            <li>
              <Link
                to="/new"
                style={{ color: "lime" }}
                className="sideBar-link "
                onClick={toggleVisible}
              >
                New
              </Link>
            </li>
            <li>
              <Link
                to="/clothes"
                className="sideBar-link"
                onClick={toggleVisible}
              >
                Clothes
              </Link>
            </li>
            <li>
              <Link
                to="/accessories"
                className="sideBar-link"
                onClick={toggleVisible}
              >
                Accessories
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="sideBar-menu">
          <ul className="sideBar-info">
            <li>
              <Link
                to="/reviews"
                className="sideBar-link inf"
                onClick={toggleVisible}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="sideBar-link inf"
                onClick={toggleVisible}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/delivery-payment-return"
                className="sideBar-link inf"
                onClick={toggleVisible}
              >
                Delivery, payment, return
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sideBar-chapter">Contact us:</div>
        <div className="sideBar-chapter__line"></div>
        <nav>
          <ul>
            <li>
              <a href="tel:0965010275" className="sideBar-link inf ">
                <FontAwesomeIcon icon={faPhoneVolume} />
                &nbsp; +380 96 501 0275
              </a>
            </li>
            <li>
              <a href="tel:0933319890" className="sideBar-link inf ">
                <FontAwesomeIcon icon={faPhoneVolume} />
                &nbsp; +380 93 331 9890
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  ) : null;
};

export default SideBar;
