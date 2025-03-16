import { combineReducers } from "redux";
import authReducer from "../module/auth/core/reducer";
import sidebarReducer from "../layout/core/reducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
});

export default rootReducer;
