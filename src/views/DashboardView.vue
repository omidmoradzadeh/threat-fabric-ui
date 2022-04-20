<template>
  <!-- <MenuView /> -->
  <div class="min-h-screen flex relative lg:static surface-ground">
    <SideMenu />
    <div class="min-h-screen flex flex-column relative flex-auto">
      <div class="p-5 flex flex-column flex-auto">
        <div class="grid">
          <div class="col-12 lg:col-6 xl:col-3">
            <CardView :details="menu1" :v-if="menu1 != undefined" />
          </div>
          <div class="col-12 lg:col-6 xl:col-3">
            <CardView :details="menu2" />
          </div>
          <div class="col-12 lg:col-6 xl:col-3">
            <CardView :details="menu3" />
          </div>
          <div class="col-12 lg:col-6 xl:col-3">
            <CardView :details="menu4" />
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
          <button @click="awesome = !awesome">{{ chart2 }}</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 
  <div class="card">
    <div class="flex card-container indigo-container">
      <div class="flex-1 text-center p-4 border-round">
        <CardView />
      </div>
      <div class="flex-1 text-center p-4 border-round">
        <CardView />
      </div>
      <div class="flex-1 text-center p-4 border-round">
        <CardView />
      </div>
    </div>
  </div> -->
</template>

<script>
import CardView from "./CardView.vue";
// import MenuView from "./MenuView.vue";
import SideMenu from "./SideMenu.vue";
import BaseChartView from "./BaseChartView.vue";
import DashboardService from "../service/apis/dashboard.service";

export default {
  components: {
    // MenuView,
    CardView,
    SideMenu,
    BaseChartView,
  },
  data() {
    return {
      awesome: false,
      menu1: undefined,
      menu2: undefined,
      menu3: undefined,
      menu4: undefined,
      chart1: undefined,
      chart2: undefined,
      chart3: undefined,
    };
  },
  created() {
    var dashboardService = new DashboardService();
    dashboardService.getInfectedChartData().then((data) => {
      this.chart1 = data.chart;
    });
    dashboardService.getRootedChartData().then((data) => {
      this.chart2 = data.chart;
    });
    dashboardService.getAbnormalChartData().then((data) => {
      this.chart3 = data.chart;
    });
    // dashboardService.getChartData().then((data) => {
    //   this.menu1 = data.dashboardData;
    // });
  },
  mounted() {},
};
</script>
