import { combineReducers } from "redux";
import authReducer from "../module/auth/core/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
