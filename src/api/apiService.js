import http from "./apiFunc";
import axios from "axios";

// export const getPosts = () => {
//   return http.get("https://jsonplaceholder.typicode.com/users");
// };

export const apicall = ({
  url,
  method,
  body = null,
  headers = null,
  params = null,
}) => {
  // return axios[method](url, headers, JSON.parse(body));
  return axios({
    method: method,
    url: url,
    headers: headers,
    data: body,
    params: params,
  });
};
