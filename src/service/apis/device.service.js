export default class DeviceService {
  getDevices(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";
    return fetch("http://localhost:6060/api/" + "device?" + queryParams).then(
      (res) => res.json()
    );
  }
}
