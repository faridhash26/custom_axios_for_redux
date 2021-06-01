import { GET_USER_FAIL, GET_USER_REQ, GET_USER_SUCCESS } from "./types";
import { getPosts, apicall } from "../api/apiService";

export const getuser = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQ });
  try {
    const { data } = await apicall({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      },
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(data);
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
