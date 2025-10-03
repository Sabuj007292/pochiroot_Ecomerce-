import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api", // or your actual backend API base URL
  withCredentials: true,
});

// ✅ Attach token from localStorage to every request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
