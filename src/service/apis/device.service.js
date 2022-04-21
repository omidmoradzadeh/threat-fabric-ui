export default class DeviceService {
  getCustomersSmall() {
    return fetch("static/demo/data/customers-small.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getCustomersMedium() {
    return fetch("static/demo/data/customers-medium.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getCustomersMedium2() {
    return fetch("customers-medium.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getCustomersLarge() {
    return fetch("static/demo/data/customers-large.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getCustomersXLarge() {
    return fetch("static/demo/data/customers-xlarge.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getCustomers(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";
    return fetch(
      "https://www.primefaces.org/data/customers?" + queryParams
    ).then((res) => res.json());
  }

  getdevices(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";
    return fetch("http://localhost:6060/device?" + queryParams).then((res) =>
      res.json()
    );
  }
}
