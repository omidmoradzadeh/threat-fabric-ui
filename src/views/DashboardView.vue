<template>
  <!-- <MenuView /> -->
  <div class="grid">
    <div class="col-12 lg:col-6 xl:col-3" v-if="this.menu1 != undefined">
      <CardView :details="menu1" />
    </div>
    <div class="col-12 lg:col-6 xl:col-3" v-if="this.menu2 != undefined">
      <CardView :details="menu2" />
    </div>
    <div class="col-12 lg:col-6 xl:col-3" v-if="this.menu3 != undefined">
      <CardView :details="menu3" />
    </div>
    <div class="col-12 lg:col-6 xl:col-3" v-if="this.menu4 != undefined">
      <CardView :details="menu4" />
    </div>

    <div class="col-12 lg:col-6 xl:col-6" v-if="this.progress != undefined">
      <RateCardView :title="progress?.title" :progress="progress?.progress" />
    </div>
    <div class="col-12 lg:col-3 xl:col-3">
      <DashboardFilterView @reload="reload" />
    </div>
    <div class="col-12" v-if="this.chart1 != undefined">
      <BaseChartView
        :title="chart1?.title"
        :type="chart1?.type"
        :labels="chart1?.labels"
        :height="chart1?.height"
        :colors="chart1?.colors"
        :chartData="chart1?.chartData"
      />
    </div>
    <div class="col-12" v-if="this.chart2 != undefined">
      <BaseChartView
        :title="chart2?.title"
        :type="chart2?.type"
        :labels="chart2?.labels"
        :height="chart2?.height"
        :colors="chart2?.colors"
        :chartData="chart2?.chartData"
      />
    </div>
    <div class="col-12" v-if="this.chart3 != undefined">
      <BaseChartView
        :title="chart3?.title"
        :type="chart3?.type"
        :labels="chart3?.labels"
        :height="chart3?.height"
        :colors="chart3?.colors"
        :chartData="chart3?.chartData"
      />
    </div>
  </div>
</template>

<script>
import CardView from "./CardView.vue";
// import MenuView from "./MenuView.vue";
// import SideMenu from "./SideMenu.vue";
import BaseChartView from "./BaseChartView.vue";
import RateCardView from "./RateCardView.vue";
import DashboardFilterView from "./DashboardFilterView.vue";
import DashboardService from "../service/apis/dashboard.service";

var dashboardService = new DashboardService();

export default {
  components: {
    CardView,
    BaseChartView,
    RateCardView,
    DashboardFilterView,
  },
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          icon: "pi-home",
        },
        {
          name: "Device",
          icon: "pi-home",
        },
        {
          name: "Setting",
          icon: "pi-home",
        },
      ],
      menu1: undefined,
      menu2: undefined,
      menu3: undefined,
      menu4: undefined,
      chart1: undefined,
      chart2: undefined,
      chart3: undefined,
      progress: undefined,
    };
  },
  created() {
    // dashboardService.getInfectedChartData().then((data) => {
    //   this.chart1 = data.chart;
    // });
    // dashboardService.getRootedChartData().then((data) => {
    //   this.chart2 = data.chart;
    // });
    // dashboardService.getAbnormalChartData().then((data) => {
    //   this.chart3 = data.chart;
    // });
    // dashboardService.getStatisticData().then((data) => {
    //   this.menu1 = data.menu1;
    //   this.menu2 = data.menu2;
    //   this.menu3 = data.menu3;
    //   this.menu4 = data.menu4;
    //   this.progress = data.progress;
    // });
    this.reload(null);
  },
  mounted() {},
  methods: {
    reload(date) {
      console.log("new date ", date);
      // dashboardService.getStatisticData().then((data) => {
      //   this.menu1 = data.menu1;
      //   this.menu2 = data.menu2;
      //   this.menu3 = data.menu3;
      //   this.menu4 = data.menu4;
      //   this.progress = data.progress;
      // });
      dashboardService.getDashboard().then((data) => {
        this.menu1 = data.menu1;
        this.menu2 = data.menu2;
        this.menu3 = data.menu3;
        this.menu4 = data.menu4;
        this.progress = data.progress;
        // this.chart1 = data.chart1;
        // this.chart2 = data.chart2;
        // this.chart3 = data.chart3;
      });

      dashboardService.getInfectedChartData().then((data) => {
        this.chart1 = data.chart;
      });
      dashboardService.getRootedChartData().then((data) => {
        this.chart2 = data.chart;
      });
      dashboardService.getAbnormalChartData().then((data) => {
        this.chart3 = data.chart;
      });
    },
  },
};
</script>
