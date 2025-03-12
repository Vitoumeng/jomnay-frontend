import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Login from "../module/auth/components/Login";
import Dashboard from "../module/dashboard/Dashboard";
import Income from "../module/income/Income";
import Expense from "../module/expense/Expense";
import { useLogin } from "../module/auth/core/action";
import Register from "../module/auth/components/Register";

const PrivateRoute = () => {
  const { accessToken } = useLogin();

  return (
    <Routes>
      {accessToken ? (
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Route>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default PrivateRoute;
