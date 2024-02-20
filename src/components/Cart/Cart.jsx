import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faHouse,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useSelect } from "../../hooks/useSelect";
import { useCart } from "../../hooks/useCart";

import {
  scrollToTop,
  scrollToDown,
} from "../../logic/aditionalFunctions/scroll/scrollTo.js";

import { string } from "prop-types";

import OrderSection from "./logic/sendToUserEmailAndDelivery/OrderSection.jsx";

const Cart = () => {
  const { handleRemoveFromCart, handleRemoveAllFromCart } = useCart();
  const { handleSelect } = useSelect();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const processingOrderRef = useRef();

  const calculateTotal = () => {
    let total = 0;

    cartItems.forEach((item) => {
      const itemPrice =
        item.discountedPrice !== undefined ? item.discountedPrice : item.price;

      const priceString = itemPrice.toString();

      total += parseFloat(priceString);
    });

    return total;
  };

  return (
    <div className="cart__container">
      <div className="chapter">Your Cart</div>
      <div className="chapter__line"></div>
      {cartItems.length === 0 ? (
        <div className="message__container">
          <p className="message">
            Oops... There are no products in the cart 🛒
          </p>
          <button onClick={scrollToTop}>
            <Link to="/" className="shop-house">
              Back to home &nbsp;
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </button>
        </div>
      ) : (
        <>
          <div className="chapter">Total price: {calculateTotal()} грн</div>
          <div className="chapter__line"></div>
          <div className="btn-container">
            <button
              className={` removeAll `}
              onClick={() => handleRemoveAllFromCart()}
            >
              Remove All &nbsp;
              <FontAwesomeIcon icon={faTrashCan} />
            </button>

            {cartItems.length >= 3 ? (
              <button
                className="shop-house"
                onClick={() => scrollToDown(processingOrderRef)}
              >
                Scroll to payment &nbsp;
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            ) : null}
          </div>
          {cartItems.map((item, index) => (
            <div className="cart__body" key={index}>
              <div className="item-chapter__line"></div>
              <picture className="cart-items-container">
                <div className="image-wrapper">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={() => handleSelect(item)}
                  >
                    <div
                      className="blur-load"
                      style={{ backgroundImage: `url(${item.blurImage})` }}
                    >
                      <img
                        href={item.link}
                        className="cart__images"
                        src={item.image}
                        alt={`Product ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  </Link>
                </div>
                <div className="cart-item-container">
                  <div className="cart-item-description">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={() => handleSelect(item)}
                    >
                      <div className="products__info label">{item.name}</div>
                    </Link>
                    <div className="products__info size">
                      {item.selectedSize}
                    </div>
                  </div>
                  <div className="cart-item-description">
                    <div className="products__info price">
                      {item.discounts ? (
                        <>
                          <span className={`products__info price-decrease`}>
                            {item.price} грн
                          </span>
                          <span className={`products__info price`}>
                            &nbsp; {item.discountedPrice} грн
                          </span>
                        </>
                      ) : (
                        `${item.price} грн`
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={` heart `}
                  onClick={() => handleRemoveFromCart(item)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              </picture>
            </div>
          ))}
          <div className="chapter">Processing the order</div>
          <div className="chapter__line"></div>
          <OrderSection processingOrderRef={processingOrderRef} />
        </>
      )}
    </div>
  );
};

export default Cart;
