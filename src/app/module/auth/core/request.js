import axios from "axios";

export const reqLogin = (payload) =>
  axios.post("auth/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
