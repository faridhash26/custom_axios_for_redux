import { combineReducers } from "redux";

import users from "./simpleReducer";

const rootReducer = combineReducers({
  user: users,
});
export default rootReducer;
