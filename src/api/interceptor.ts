import axios from "axios";

const baseURL = `${process.env.VITE_API_URL}`;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
