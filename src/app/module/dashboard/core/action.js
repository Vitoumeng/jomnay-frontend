import { useDispatch, useSelector } from "react-redux";
import { reqGetDashboard } from "./request";
import { setDashboard } from "./reducer";

const useDashboard = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboard);

  const fetchDashboard = async () => {
    return reqGetDashboard()
      .then((res) => {
        // console.log(res.data);
        dispatch(setDashboard(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { dashboard, fetchDashboard };
};

export { useDashboard };
