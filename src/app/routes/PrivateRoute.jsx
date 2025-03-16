import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "../layout/components/RootLayout";
import Dashboard from "../module/dashboard/components/Dashboard";
import Income from "../module/income/Income";
import Expense from "../module/expense/Expense";
import { useLogin } from "../module/auth/core/action";
import Auth from "../module/auth/components/Auth";

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
          <Route path="/auth" element={<Auth />} />
          <Route path="/*" element={<Navigate to="/auth" />} />
        </>
      )}
    </Routes>
  );
};

export default PrivateRoute;
