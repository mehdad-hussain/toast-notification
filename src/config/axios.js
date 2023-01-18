import axios from "axios";

const instance = axios.create({
  withCredentials: true.valueOf,
  baseURL: "http://localhost:5000/api/",
  // baseURL: "",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    // timeout: 1000,
    // Authorization: `Bearer ${user ? user.token : null}`,
  },
});

// idea: use interceptor to handle token not found error from localStorage when first login in

instance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    // console.log("request config", config);
    return config;
  },
  (error) => {
    // console.log("request error", error);
    return Promise.reject(error);
  }
);

export default instance;
