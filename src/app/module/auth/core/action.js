import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth, setLogin, setLogout, setProfile } from "./reducer";
import { reqLogin } from "./request";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleChangeLogin = (e) =>
    dispatch(setLogin({ name: e.target.name, value: e.target.value }));

  const onLogin = async (e) => {
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
      console.log(err);
    }
  };

  const onLogout = () => {
    dispatch(setAuth(undefined));
    dispatch(setLogout());
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return {
    ...auth,
    handleChangeLogin,
    onLogin,
    onLogout,
  };
};

export { useLogin };
