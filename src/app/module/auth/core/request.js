import axios from "axios";

export const reqLogin = (payload) =>
  axios.post("auth/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const reqRegister = (payload) =>
  axios.post("auth/register", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
