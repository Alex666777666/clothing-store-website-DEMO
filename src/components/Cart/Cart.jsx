import React, { useState, useEffect, useRef } from "react";
import { useSelector, dispatch, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faHouse,
  faChevronDown,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { useSelect } from "../../hooks/useSelect";
import { useCart } from "../../hooks/useCart";

import {
  scrollToTop,
  scrollToDown,
} from "../../logic/aditionalFunctions/scroll/scrollTo.js";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import apiMail from "../../logic/NovaPoshta/API.js";

import { setUserData } from "../../logic/addDataCustomerSelect/customerDataSelectSlice.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { string } from "prop-types";

const Cart = () => {
  const dispatch = useDispatch();

  const { handleRemoveFromCart, handleRemoveAllFromCart } = useCart();
  const { handleSelect } = useSelect();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [initials, setInitials] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [Email, setEmail] = useState("");

  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const [errorState, setErrorState] = useState(false);

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

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const result = await apiMail("getAreas");
        setAreas(result.data);
      } catch (error) {
        console.error("Error fetching areas:", error.message);
      }
    };

    fetchAreas();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const result = await apiMail("getCities");
        setCities(result.data);
      } catch (error) {
        console.error("Error fetching cities:", error.message);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const result = await apiMail("getWarehouses");
        setDepartments(result.data);
      } catch (error) {
        console.error("Error fetching departments:", error.message);
      }
    };

    fetchDepartments();
  }, []);

  const isValidDelivery = (selectedValue) => {
    return (
      areas.some((value) => value.Description === selectedValue) ||
      cities
        .filter((city) => city.AreaDescription === selectedArea)
        .some((value) => value.Description === selectedValue) ||
      departments
        .filter(
          (department) => department.SettlementDescription === selectedCity
        )
        .some((value) => value.Description === selectedValue)
    );
  };

  const invalidDeliveryDataToast = () => {
    toast.error("🙊incorrectly selected delivery data!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  const invalidBuyerNameToast = () => {
    toast("👾please enter your initials", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  const invalidBuyerPhoneToast = () => {
    toast("🤙please enter your phone number", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  const invalidBuyerEmailToast = () => {
    toast("📧please enter your Email", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  const validToast = () => {
    const url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/66955/parrot.gif";

    toast.success(
      <span>
        <img src={url} alt="Parrot" style={{ width: "20px", height: "20px" }} />
        Good!
      </span>,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      }
    );
  };

  const handleSubmitPayment = () => {
    const wrongInitials = initials.length <= 0 || Number(initials);
    const wrongPhoneNumber = phoneNumber.length !== 13;
    const wrongEmail = Email.length <= 0 || !/@gmail\.com$/.test(Email);

    if (
      !isValidDelivery(selectedArea) ||
      !isValidDelivery(selectedCity) ||
      !isValidDelivery(selectedDepartment) ||
      wrongInitials ||
      wrongPhoneNumber ||
      wrongEmail
    ) {
      invalidDeliveryDataToast();
      setErrorState(true);
      if (wrongInitials) {
        invalidBuyerNameToast();
      } else if (wrongPhoneNumber) {
        invalidBuyerPhoneToast();
      } else if (wrongEmail) {
        invalidBuyerEmailToast();
      }
    } else {
      setErrorState(false);
      validToast();
      dispatch(
        setUserData({
          userInitials: initials,
          userPhoneNumber: phoneNumber,
          userEmail: Email,
          userArea: selectedArea,
          userCity: selectedCity,
          userDepartment: selectedDepartment,
        })
      );
    }
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
          <div className="side-order-container">
            <div className="order-container">
              <div className="order-elements">
                <h3>Data of the buyer</h3>
                <div className="buyer-info-conteiner">
                  <div className="buyer-info-el">
                    <label ref={processingOrderRef}>Initials:</label>
                    <input
                      className={`cart-input `}
                      type="text"
                      required
                      placeholder="Enter your initials..."
                      value={initials}
                      onChange={(e) => setInitials(e.target.value)}
                    />
                  </div>
                  <div className="buyer-info-el">
                    <label>Phone number:</label>
                    <PhoneInput
                      defaultCountry="ua"
                      hideDropdown={true}
                      required
                      value={phoneNumber}
                      onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
                    />
                  </div>
                  <div className="buyer-info-el">
                    <label>Email:</label>
                    <input
                      className={`cart-input `}
                      type="text"
                      required
                      placeholder="Enter your Email..."
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="order-elements">
                <h3>Delivery</h3>
                <div className="nova_poshta-container">
                  <img
                    className="nova_poshta-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Nova_Poshta_2014_logo.svg/210px-Nova_Poshta_2014_logo.svg.png"
                    alt="Nova Poshta logo"
                  />
                  <div className="nova_poshta-el">
                    <label>Region:</label>
                    <input
                      className={`cart-input ${
                        errorState && !isValidDelivery(selectedArea)
                          ? "invalid"
                          : ""
                      }`}
                      list="areas"
                      value={selectedArea}
                      required
                      onChange={(e) => setSelectedArea(e.target.value)}
                      placeholder={
                        selectedArea.length === 0 ? "Choose Region" : ""
                      }
                    />

                    <datalist id="areas">
                      {areas
                        .sort((a, b) => {
                          const startsWithInputA =
                            a.Description.toLowerCase().startsWith(
                              selectedArea.toLowerCase()
                            );
                          const startsWithInputB =
                            b.Description.toLowerCase().startsWith(
                              selectedArea.toLowerCase()
                            );

                          if (startsWithInputA && !startsWithInputB) {
                            return -1;
                          } else if (!startsWithInputA && startsWithInputB) {
                            return 1;
                          } else {
                            return a.Description.localeCompare(b.Description);
                          }
                        })
                        .map((area) => (
                          <option key={area.Ref} value={area.Description} />
                        ))}
                    </datalist>
                  </div>
                  <div className="nova_poshta-el">
                    <label>City:</label>
                    <input
                      className={`cart-input ${
                        errorState && !isValidDelivery(selectedCity)
                          ? "invalid"
                          : ""
                      }`}
                      list="cities"
                      value={selectedCity}
                      required
                      onChange={(e) => setSelectedCity(e.target.value)}
                      placeholder={
                        selectedArea.length === 0
                          ? "First, choose an area"
                          : "Choose a city"
                      }
                      disabled={selectedArea.length === 0}
                    />

                    <datalist id="cities">
                      {selectedArea.length > 0 &&
                        cities
                          .filter(
                            (city) => city.AreaDescription === selectedArea
                          )
                          .sort((a, b) => {
                            const startsWithInputA =
                              a.Description.toLowerCase().startsWith(
                                selectedCity.toLowerCase()
                              );
                            const startsWithInputB =
                              b.Description.toLowerCase().startsWith(
                                selectedCity.toLowerCase()
                              );

                            if (startsWithInputA && !startsWithInputB) {
                              return -1;
                            } else if (!startsWithInputA && startsWithInputB) {
                              return 1;
                            } else {
                              return a.Description.localeCompare(b.Description);
                            }
                          })
                          .map((city) => (
                            <option
                              key={city.Ref}
                              value={city.Description.replace(
                                /\s\([^)]+\)/,
                                ""
                              )}
                            />
                          ))}
                    </datalist>
                  </div>
                  <div className="nova_poshta-el">
                    <label>Department:</label>

                    <input
                      className={`cart-input department ${
                        errorState && !isValidDelivery(selectedDepartment)
                          ? "invalid"
                          : ""
                      }`}
                      list="departments"
                      required
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      placeholder={
                        selectedCity.length === 0
                          ? "First, choose a city"
                          : "Choose a department"
                      }
                      disabled={selectedCity.length === 0}
                    />

                    <datalist id="departments">
                      {selectedCity.length > 0 &&
                        departments
                          .filter(
                            (department) =>
                              department.SettlementDescription === selectedCity
                          )
                          .sort((a, b) => a.Number - b.Number)
                          .map((department) => (
                            <option
                              key={department.Ref}
                              value={department.Description}
                            />
                          ))}
                    </datalist>
                  </div>
                </div>
              </div>
              <div className="order-elements">
                <h3>Payment</h3>
                <div className="payment-container">
                  <div className="payment-el">
                    <label>Payment upon receipt</label>
                    <input style={{ marginLeft: "8px" }} type="radio" />
                  </div>
                  <div className="payment-el">
                    <label>Pay now</label>
                    <input style={{ marginLeft: "8px" }} type="radio" checked />
                  </div>
                </div>
                {/* payment methods */}
              </div>
            </div>
            <button
              className={`removeAll submit`}
              onClick={handleSubmitPayment}
            >
              Submit &nbsp;
              <FontAwesomeIcon icon={faDollarSign} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
