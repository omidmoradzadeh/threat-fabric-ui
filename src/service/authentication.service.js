import ApiService from "./api.service";
import TokenService from "./storage.service";
import { LOGIN_URL } from "../actions/login.actions";

class AuthService {
  login = (requestData) => {
    return ApiService.post(LOGIN_URL, requestData);
  };

  logout = () => {
    return TokenService.removeToken();
  };
}

export default new AuthService();
