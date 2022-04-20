import axios from "axios";

export default class DashboardService {
  getStatisticData() {
    return axios
      .get("http://localhost:6060/dashboard/Statistic")
      .then((res) => res.data);
  }

  getInfectedChartData() {
    return axios
      .get("http://localhost:6060/dashboard/InfectedChart")
      .then((res) => res.data);
  }

  getRootedChartData() {
    return axios
      .get("http://localhost:6060/dashboard/RootedChart")
      .then((res) => res.data);
  }

  getAbnormalChartData() {
    return axios
      .get("http://localhost:6060/dashboard/AbnormalChart")
      .then((res) => res.data);
  }

  getBooksForBanner() {
    return axios
      .get(window.origin + "/demo/data/book-banner.json")
      .then((res) => res.data.data);
  }
}
