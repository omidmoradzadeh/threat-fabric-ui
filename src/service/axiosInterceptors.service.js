import axios from "axios";
import store from "../store/store";

class AxiosInterceptors {
  configRequestHeader = () => {
    axios.interceptors.request.use(async (config) => {
      const response = await store.dispatch("getToken");

      if (response) {
        config.headers.Authorization = response;
      }

      return config;
    });
  };
}

export default new AxiosInterceptors();
