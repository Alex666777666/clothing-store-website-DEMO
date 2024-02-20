import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import apiMail from "../../../../logic/NovaPoshta/API.js";

import { setUserData } from "../../../../logic/addDataCustomerSelect/customerDataSelectSlice.js";

import {
  invalidDeliveryDataToast,
  invalidBuyerNameToast,
  invalidBuyerPhoneToast,
  invalidBuyerEmailToast,
  validToast,
} from "../../../../logic/toasts/toasts.js";

const OrderSection = ({ processingOrderRef }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

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

  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jq4afpu", "template_bonms4s", form.current, {
        publicKey: "rt30fw7zJ_hji0oGh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
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
                  name="user_name"
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
                  name="user_email"
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
                  placeholder={selectedArea.length === 0 ? "Choose Region" : ""}
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
                      .filter((city) => city.AreaDescription === selectedArea)
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
                          value={city.Description.replace(/\s\([^)]+\)/, "")}
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
          type="submit"
          value="Send"
        >
          Submit &nbsp;
          <FontAwesomeIcon icon={faDollarSign} />
        </button>
      </div>
      <textarea
        style={{ display: "none" }}
        name="message"
        value={`Your products: ${
          cartItems.length === 0
            ? null
            : cartItems
                .map((item) => {
                  if (item.name && item.selectedSize) {
                    return `${item.name} (${item.selectedSize})`;
                  } else if (item.name) {
                    return item.name;
                  }
                  return null;
                })
                .filter(Boolean)
                .join(", ")
        }
 \nYour total price is: ${calculateTotal()} грн

\nDelivery address:
         \nArea: ${selectedArea}\nCity: ${selectedCity}\nDepartment: ${selectedDepartment}`}
      />
    </form>
  );
};

export default OrderSection;
