import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setAuth,
  setLogin,
  setLogout,
  setProfile,
  setRegister,
} from "./reducer";
import { reqLogin, reqRegister } from "./request";
import toast from "react-hot-toast";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleChangeLogin = (e) =>
    dispatch(setLogin({ name: e.target.name, value: e.target.value }));

  const onLogin = async () => {
    try {
      const res = await reqLogin(auth.login);

      const response = res.data;

      // console.log(response);
      dispatch(setProfile(response.user));
      dispatch(setAuth(response.token));
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("accessToken", response.token);

      navigate("/");
    } catch (err) {
      // console.log(err);
      toast.error("Invalid credentials");
    }
  };

  const onLogout = () => {
    dispatch(setAuth(undefined));
    dispatch(setLogout());
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const handleChangeRegister = (e) =>
    dispatch(setRegister({ name: e.target.name, value: e.target.value }));

  const onRegister = async () => {
    try {
      const { cpassword, ...userData } = auth.register;

      await reqRegister(userData);

      // console.log(res.data.data);
      toast.success("Registration successful");
      navigate("/login");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };

  return {
    ...auth,
    handleChangeLogin,
    onLogin,
    onLogout,
    onRegister,
    handleChangeRegister,
  };
};

export { useLogin };
