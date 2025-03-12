import axios from "axios";

const setUpAxios = () => {
  axios.defaults.baseURL = "http://localhost:8000/api/v1/";

  axios.interceptors.request.use(
    function (config) {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
};

export { setUpAxios };
