import { GET_USER_FAIL, GET_USER_REQ, GET_USER_SUCCESS } from "./types";
import { getPosts, apicall } from "../api/apiService";

export const getuser = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQ });
  try {
    const { data } = await apicall({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    });
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (er) {
    dispatch({
      type: GET_USER_FAIL,
      payload: er,
    });
  }
};
