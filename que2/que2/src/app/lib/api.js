import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mfapi.in", // update later
  headers: {
    "Content-Type": "application/json",
  },
});

// Example interceptor (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
