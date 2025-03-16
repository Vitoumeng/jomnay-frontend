import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBalance: 0,
  totalIncome: 0,
  totalExpense: 0,
  last30daysExpense: {
    total: 0,
    transactions: [],
  },
  last60DaysIncome: {
    total: 0,
    transactions: [],
  },
  recentTransactions: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboard: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
