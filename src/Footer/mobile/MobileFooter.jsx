import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

const MobileFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer__container-mobile">
        <div className="footer__body">
          <span className="footer__list social ">
            <li>
              <a href="https://t.me/exc4l1bxxxr" className="telegram__logo">
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

          <div className="years__container">
            <div className="underline"></div>
            <div className="years">©2022-{currentYear} Armure exquise</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
