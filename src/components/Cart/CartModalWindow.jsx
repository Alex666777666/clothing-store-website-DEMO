import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../hooks/useCart";
import { selectSize } from "../Cart/logic/cartSlice";

const CartModalWindow = ({ isVisible, toggleVisible, item }) => {
  const dispatch = useDispatch();
  const { handleToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSelectSize = (size) => {
    dispatch(selectSize({ id: item.id, size }));
    setSelectedSize(size);
  };

  return isVisible ? (
    <div className="overlay-search">
      <div className="modal-search">
        <div className="heart search-cancel" onClick={toggleVisible}>
          <FontAwesomeIcon icon={faTimes} />
        </div>

        <>
          <div className="cart-size-container">
            <h3>Choose your size:</h3>
            <ul style={{ display: "flex" }}>
              {item.size.map((size) => (
                <li
                  style={{ marginLeft: "5px" }}
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => {
                    handleSelectSize(size);
                    handleToCart({ ...item, selectedSize: size });
                    toggleVisible();
                  }}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </>
      </div>
    </div>
  ) : null;
};

export default CartModalWindow;
