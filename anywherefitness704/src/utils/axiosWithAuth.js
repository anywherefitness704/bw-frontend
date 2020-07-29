import axios from "axios";
import { BASE_URL } from "../constants/index";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: BASE_URL,
  });
};

export default axiosWithAuth;
