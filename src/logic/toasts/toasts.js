import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const invalidDeliveryDataToast = () => {
  toast.error("🙊incorrectly selected delivery data!", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });
};

export const invalidBuyerNameToast = () => {
  toast("👾please enter your initials", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });
};

export const invalidBuyerPhoneToast = () => {
  toast("🤙please enter your phone number", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });
};

export const invalidBuyerEmailToast = () => {
  toast("📧please enter your Email", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });
};

export const validToast = () => {
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
