import axios from "axios";
import { API_BASE_URL, API_KEY } from "../environment/environment";
import AxiosInterceptors from "./axios-interceptors.service";

class ApiService {
  init = () => {
    axios.defaults.baseURL = API_BASE_URL + API_KEY;
    AxiosInterceptors.configRequestHeader();
  };

  removeHeader = () => {
    axios.defaults.headers.common = {};
  };

  get = (resource) => {
    return axios.get(resource);
  };

  post = (resource, data) => {
    return axios.post(resource, data);
  };

  put = (resource, data) => {
    return axios.put(resource, data);
  };

  delete = (resource) => {
    return axios.delete(resource);
  };
}

export default new ApiService();
