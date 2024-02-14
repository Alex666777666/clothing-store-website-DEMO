import { useDispatch } from "react-redux";
import {
  addToCart,
  removeAll,
  removeCurrentItem,
} from "../components/Cart/logic/cartSlice";

import { setUserData } from "../logic/addDataCustomerSelect/customerDataSelectSlice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useCart = () => {
  const dispatch = useDispatch();

  const handleToCart = (product) => {
    dispatch(addToCart(product));

    toast.success("Product added to cart!🔥", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeCurrentItem(product));
  };

  const handleRemoveAllFromCart = () => {
    dispatch(removeAll());
  };

  return {
    handleToCart,
    handleRemoveFromCart,
    handleRemoveAllFromCart,
  };
};
