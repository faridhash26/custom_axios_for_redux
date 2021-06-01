import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
import { initstate } from "./initstate";
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
