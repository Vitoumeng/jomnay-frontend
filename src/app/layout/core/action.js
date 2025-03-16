import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./reducer";

const useLayout = () => {
  const dispath = useDispatch();
  const sidebar = useSelector((state) => state.sidebar);

  const handleCollapse = () => {
    console.log();

    dispath(toggleSidebar());
  };

  return { ...sidebar, handleCollapse };
};

export { useLayout };
