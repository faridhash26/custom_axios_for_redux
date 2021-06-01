
import axios from 'axios'

axios.defaults.headers.post["Content-Type"] = "aplication/json";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
