import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

import MobileFooter from "./mobile/MobileFooter";

import { scrollToTop } from "../logic/aditionalFunctions/scroll/scrollTo.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        {/* mobile */}
        <MobileFooter />
        {/* desktop */}

        <div className="footer__container">
          <div className="footer__body">
            <nav className="footer__menu">
              <ul className="footer__list">
                Catalogue
                <li onClick={scrollToTop}>
                  <Link
                    to="/discounts"
                    style={{ color: "red" }}
                    className="link inf footer__links"
                  >
                    Discounts
                  </Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link
                    to="/new"
                    style={{ color: "lime" }}
                    className="link inf footer__links"
                  >
                    New
                  </Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/clothes" className="link inf footer__links">
                    Clothes
                  </Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/accessories" className="link inf footer__links">
                    Accessories
                  </Link>
                </li>
              </ul>
              <ul className="footer__list">
                Info
                <li onClick={scrollToTop}>
                  <Link to="/reviews" className="link inf footer__links">
                    Reviews
                  </Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/shop" className="link inf footer__links">
                    Shop
                  </Link>
                </li>
              </ul>
              <ul>
                Social networks
                <span className="footer__list social ">
                  <li>
                    <a
                      href="https://t.me/exc4l1bxxxr"
                      className="telegram__logo"
                    >
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/armure.exquise/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                      className="instagram__logo"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </span>
              </ul>
            </nav>
            <div className="years__container">
              <div className="underline"></div>
              <div className="years">©2022-{currentYear} Armure exquise</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
