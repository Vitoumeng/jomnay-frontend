import { createSlice } from "@reduxjs/toolkit";

const initUser = {
  email: "",
  password: "",
};

const createUser = {
  fullName: "",
  email: "",
  password: "",
  cpassword: "",
};

const initialState = {
  login: initUser,
  register: createUser,
  profile: JSON.parse(localStorage.getItem("user") ?? "{}"),
  accessToken: localStorage.getItem("accessToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.accessToken = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setLogin: (state, action) => {
      const data = action.payload;
      state.login[data.name] = data.value;
    },
    setRegister: (state, action) => {
      const data = action.payload;
      state.register[data.name] = data.value;
    },
    setLogout: (state, action) => {
      state.login = initUser;
    },
  },
});

export const { setAuth, setProfile, setLogin, setLogout, setRegister } =
  authSlice.actions;

export default authSlice.reducer;
