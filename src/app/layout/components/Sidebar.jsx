import { NavLink } from "react-router-dom";
import Logo from "../../../template/assets/big_logo.png";
import { RiHandCoinLine, RiHome5Line, RiWallet3Line } from "react-icons/ri";

const links = [
  { path: "/", name: "Dashboard", icon: RiHome5Line },
  { path: "/income", name: "Income", icon: RiWallet3Line },
  { path: "/expense", name: "Expense", icon: RiHandCoinLine },
];

const Sidebar = ({ collap }) => {
  return (
    <div
      className={`${
        collap ? "left-[-280px]" : "left-0"
      } fixed top-0 w-[260px] transition-[left] duration-400 bg-[#3a3a3a] min-h-screen flex flex-col items-center gap-y-[60px]`}
    >
      <div className="h-[180px] w-[240px] flex items-center justify-center">
        <NavLink to="/">
          <img src={Logo} className="w-[90px]" alt="Jomnay Logo" />
        </NavLink>
      </div>

      <ul className="flex pl-[40px] w-full flex-col gap-y-[20px] items-start">
        {links.map((item, index) => (
          <li className="w-full" key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex gap-x-[15px] items-center w-full px-3 py-2 transition-all duration-300 border-r-[2px] 
                 ${
                   isActive
                     ? "border-r-[#EFBB5E] text-[#EFBB5E]"
                     : "border-transparent text-[#fff] hover:border-r-[#fff]"
                 }`
              }
            >
              <item.icon size={24} />
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
