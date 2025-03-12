import React from "react";
import App from "../../App";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route element={<App />}>
          <Route path="/*" element={<PrivateRoute />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
};

export default AppRoute;
