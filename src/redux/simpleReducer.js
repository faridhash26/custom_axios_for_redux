import { initstate } from "./initstate";
import { GET_USER_FAIL, GET_USER_REQ, GET_USER_SUCCESS } from "./types";
const simplereducer = (state = initstate.user, action) => {
  switch (action.type) {
    case GET_USER_REQ:
      return { ...state, isloading: true };
    case GET_USER_SUCCESS:
      return { ...state, isloading: false, users: action.payload };
    case GET_USER_FAIL:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export default simplereducer;
