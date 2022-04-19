<template>
  <!-- <MenuView /> -->
  <div class="min-h-screen flex relative lg:static surface-ground">
    <SideMenu />
    <div class="min-h-screen flex flex-column relative flex-auto">
      <div class="p-5 flex flex-column flex-auto">
        <div class="grid">
          <div class="col-12 lg:col-6 xl:col-3">
            <CardView :details="menu1" />
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
          <div class="col-12">
            <BaseChartView
              :title="chart1.title"
              :type="chart1.type"
              :labels="chart1.labels"
              :height="chart1.height"
              :colors="chart1.colors"
              :chartData="chart1.chartData"
            />
          </div>
          <div class="col-12">
            <BaseChartView
              :title="chart2.title"
              :type="chart2.type"
              :labels="chart2.labels"
              :height="chart2.height"
              :colors="chart2.colors"
              :chartData="chart2.chartData"
            />
          </div>
          <div class="col-12">
            <BaseChartView
              :title="chart3.title"
              :type="chart3.type"
              :labels="chart3.labels"
              :height="chart3.height"
              :colors="chart3.colors"
              :chartData="chart3.chartData"
            />
          </div>
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

export default {
  components: {
    // MenuView,
    CardView,
    SideMenu,
    BaseChartView,
  },
  data() {
    return {
      menu1: {
        iconClass: "pi-shopping-cart text-blue-500 text-xl",
        title: "Orders",
        value: "970",
        descriptionValue: "24%",
        descriptionClass: "pi-arrow-up text-green-500",
        descriptionText: "since last visit",
      },
      menu2: {
        iconClass: "pi-map-marker text-orange-500 text-xl",
        title: "Orders",
        value: "5200 $",
        descriptionValue: "+81%",
        descriptionClass: "pi-arrow-up text-green-500",
        descriptionText: "Since Last Week",
      },
      menu3: {
        iconClass: "pi-inbox text-cyan-500 text-xl",
        title: "Customer",
        value: "394,652",
        descriptionValue: "791",
        descriptionClass: "pi-arrow-down text-pink-500",
        descriptionText: "New Registed",
      },
      menu4: {
        iconClass: "pi-comment text-purple-500  text-xl",
        title: "Orders",
        value: "970",
        descriptionValue: "12",
        descriptionClass: "pi-arrow-up text-green-500",
        descriptionText: "Responded",
      },
      chart1: {
        labels: [
          "04/18/2022",
          "04/19/2022",
          "04/20/2022",
          "04/21/2022",
          "04/22/2022",
          "04/23/2022",
          "04/24/2022",
          "04/25/2022",
          "04/26/2022",
          "04/27/2022",
          "04/28/2022",
          "04/29/2022",
          "04/30/2022",
          "05/01/2022",
          "05/02/2022",
        ],
        title: "Infected Devices",
        height: 350,
        colors: ["purple", "#ffa3ef", "light-blue"],
        chartData: [
          {
            name: "Ios",
            chartType: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, 4, 25, 40, 30, 35, 8, 52, 17],
          },
          {
            name: "Android",
            chartType: "bar",
            values: [
              25, 50, 10, 15, 18, 32, 27, 14, 25, 50, 10, 15, 18, 32, 27, 14,
            ],
          },
          {
            name: "Pc",
            chartType: "bar",
            values: [
              15, 20, 3, 9, 58, 12, 17, 37, 15, 20, 3, 9, 58, 12, 17, 37,
            ],
          },
        ],
      },
      chart2: {
        labels: [
          "04/18/2022",
          "04/19/2022",
          "04/20/2022",
          "04/21/2022",
          "04/22/2022",
          "04/23/2022",
          "04/24/2022",
          "04/25/2022",
          "04/26/2022",
          "04/27/2022",
          "04/28/2022",
          "04/29/2022",
          "04/30/2022",
          "05/01/2022",
          "05/02/2022",
        ],
        title: "Rooted Devices",
        height: 350,
        colors: ["purple", "#ffa3ef", "light-blue"],
        chartData: [
          {
            name: "Ios",
            chartType: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, 4, 25, 40, 30, 35, 8, 52, 17],
          },
          {
            name: "Android",
            chartType: "bar",
            values: [
              25, 50, 10, 15, 18, 32, 27, 14, 25, 50, 10, 15, 18, 32, 27, 14,
            ],
          },
          {
            name: "Pc",
            chartType: "bar",
            values: [
              15, 20, 3, 9, 58, 12, 17, 37, 15, 20, 3, 9, 58, 12, 17, 37,
            ],
          },
        ],
      },
      chart3: {
        labels: [
          "04/18/2022",
          "04/19/2022",
          "04/20/2022",
          "04/21/2022",
          "04/22/2022",
          "04/23/2022",
          "04/24/2022",
          "04/25/2022",
          "04/26/2022",
          "04/27/2022",
          "04/28/2022",
          "04/29/2022",
          "04/30/2022",
          "05/01/2022",
          "05/02/2022",
        ],
        title: "Abnormal Security Settings",
        height: 350,
        colors: [
          "#b554ff",
          "#ffa3ef",
          "#7cd6fd",
          "#54ffb5",
          "#a3ffef",
          "#d67cfd",
          "#b54ff5",
          "#a3efff",
        ],
        chartData: [
          {
            name: "ACCESS ALL DOWNLOADS",
            chartType: "line",
            values: [25, 40, 30, 35, 8, 52, 17, 4, 25, 40, 30, 35, 8, 52, 17],
          },
          {
            name: "ACCESS BLUETOOTH SHARE",
            chartType: "line",
            values: [
              25, 50, 10, 15, 18, 32, 27, 14, 25, 50, 10, 15, 18, 32, 27, 14,
            ],
          },
          {
            name: "ACCESS CACHE FILESYSTEM",
            chartType: "line",
            values: [
              15, 20, 3, 9, 58, 12, 17, 37, 15, 20, 3, 9, 58, 12, 17, 37,
            ],
          },
          {
            name: "ACCESS CHECKIN PROPERTIES",
            chartType: "line",
            values: [40, 30, 35, 8, 52, 17, 4, 25, 40, 30, 35, 8, 52, 17, 19],
          },
          {
            name: "ACCESS DOWNLOAD MANAGER",
            chartType: "line",
            values: [
              10, 15, 18, 32, 27, 14, 25, 50, 10, 15, 18, 32, 27, 14, 25, 50,
            ],
          },
          {
            name: "ACCESS DRM CERTIFICATES",
            chartType: "line",
            values: [
              9, 58, 12, 17, 37, 15, 20, 3, 9, 58, 12, 17, 37, 15, 20, 3,
            ],
          },
          {
            name: "ACCESS EPHEMERAL APPS",
            chartType: "line",
            values: [8, 52, 17, 4, 25, 40, 30, 35, 8, 52, 17, 25, 40, 30, 35],
          },
          {
            name: "ACCESS FM RADIO",
            chartType: "line",
            values: [
              32, 27, 14, 25, 50, 10, 15, 18, 32, 27, 14, 25, 50, 10, 15, 18,
            ],
          },
        ],
      },
    };
  },
};
</script>
