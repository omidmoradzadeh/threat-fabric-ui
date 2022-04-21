import axios from "axios";
import API_BASE_URL from "../../environment/enviroment";

export default class DashboardService {
  getStatisticData() {
    return axios.get(API_BASE_URL + "Statistic").then((res) => res.data);
  }

  getInfectedChartData() {
    return axios.get(API_BASE_URL + "InfectedChart").then((res) => res.data);
  }

  getRootedChartData() {
    return axios.get(API_BASE_URL + "RootedChart").then((res) => res.data);
  }

  getAbnormalChartData() {
    return axios
      .get(this.API_BASE_URL + "AbnormalChart")
      .then((res) => res.data);
  }

  getDashboard() {
    debugger;

    return axios.get(API_BASE_URL + "dashboard").then((res) => res.data);
  }
}
