import { combineReducers } from "redux";
import authReducer from "../module/auth/core/reducer";
import dashboardReducer from "../module/dashboard/core/reducer";
import sidebarReducer from "../layout/core/reducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
