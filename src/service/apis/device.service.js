import API_BASE_URL from "../../environment/enviroment";
export default class DeviceService {
  getDevices(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";
    return fetch(API_BASE_URL + "/device?" + queryParams).then((res) =>
      res.json()
    );
  }
}
