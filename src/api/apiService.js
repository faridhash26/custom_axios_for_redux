import http from "./apiFunc";
import axios from "axios";

// export const getPosts = () => {
//   return http.get("https://jsonplaceholder.typicode.com/users");
// };

export const apicall = ({ url, method, body = null, headers = null }) => {
  return axios[method](url, JSON.parse(headers), JSON.parse(body));
};
