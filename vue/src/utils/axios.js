import axios from "axios";
import store from "../store";

const axiosClient = axios.create({
  baseURL: `http://localhost:8000/api`,
});

/* config.headers = {
  ...config.headers,
  Authorization: `Bearer ${store.state.user.token}`,
  "Access-Control-Allow-Origin": "*",
}; */

/* config.headers.Authorization = `Bearer ${store.state.user.token}`;
config.headers.common["Access-Control-Allow-Origin"] = "*";
config.headers.common["X-Requested-With"] = "XMLHttpRequest";
return config; */

axiosClient.interceptors.request.use((config) => {
  /* config.headers.common["Access-Control-Allow-Origin"] = "*";
  config.headers.common["X-Requested-With"] = "XMLHttpRequest"; */
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  return config;
});

export default axiosClient;
