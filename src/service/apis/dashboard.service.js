import axios from "axios";

let VUE_APP_ROOT_API = "http://localhost:6060/api/";
export default class DashboardService {
  getStatisticData() {
    return axios
      .get(VUE_APP_ROOT_API + "Dashboard/Statistic")
      .then((res) => res.data);
  }

  getInfectedChartData() {
    return axios
      .get(VUE_APP_ROOT_API + "Dashboard/InfectedChart")
      .then((res) => res.data);
  }

  getRootedChartData() {
    return axios
      .get(VUE_APP_ROOT_API + "Dashboard/RootedChart")
      .then((res) => res.data);
  }

  getAbnormalChartData() {
    return axios
      .get(VUE_APP_ROOT_API + "Dashboard/AbnormalChart")
      .then((res) => res.data);
  }

  getDashboard() {
    return axios.get(VUE_APP_ROOT_API + "Dashboard").then((res) => res.data);
  }
}
