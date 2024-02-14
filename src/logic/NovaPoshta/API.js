import axios from "axios";

const apiUrl = "https://api.novaposhta.ua/v2.0/json/";

async function apiMail(argument) {
  const requestData = {
    apiKey: "d4933087965fa14e0c521ee28b384780",
    modelName: "Address",
    calledMethod: argument,
    methodProperties: {},
  };

  try {
    const response = await axios.post(apiUrl, requestData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default apiMail;
