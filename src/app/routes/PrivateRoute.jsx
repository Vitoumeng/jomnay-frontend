import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Login from "../module/auth/Login";
import Dashboard from "../module/dashboard/Dashboard";
import Income from "../module/income/Income";
import Expense from "../module/expense/Expense";

const PrivateRoute = () => {
  const accessToken = false;

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
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default PrivateRoute;
