import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Page from "./Page";
import Home from "./Home.tsx";
import Favorites from "./logic/addToFavorites/Favorites";
import Selected from "./logic/selectedProductInfo/Selected";
import Accessories from "./components/Accessories/Accessories";
import Cart from "./components/Cart/Cart";
import Clothes from "./components/Clothes/Clothes";
import DeliveryEtc from "./components/DeliveryEtc/DeliveryEtc";
import Discounts from "./components/Discounts/Discounts.tsx";
import New from "./components/New/New.tsx";
import Reviews from "./components/Reviews/Reviews";
import Shop from "./components/Shop/Shop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const blurDivs = document.querySelectorAll(".blur-load");

  blurDivs.forEach((div) => {
    const img = div.querySelector("img");

    const loaded = () => {
      div.classList.add("loaded");
    };

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/delivery-payment-return" element={<DeliveryEtc />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/new" element={<New />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/product/:productId" element={<Selected />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <motion.button
        className="scroll-button"
        animate={{ x: scroll ? -20 : 100 }}
        transition={{ delay: 0.1 }}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </motion.button>
    </>
  );
};

export default App;
