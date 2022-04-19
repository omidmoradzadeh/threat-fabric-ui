<template>
  <div class="surface-card shadow-2 border-round p-4">
    <div class="flex align-items-center justify-content-between mb-3">
      <div class="text-900 font-medium text-xl">Infected Devices</div>
    </div>

    <Chart type="bar" :data="basicData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicData: {
        labels: [
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
          "05/03/2022",
        ],
        datasets: [
          {
            label: "IOS",
            backgroundColor: "#42A5F5",
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 1],
          },
          {
            label: "Android",
            backgroundColor: "#9CCC65",
            data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 29],
          },
          {
            label: "Pc",
            backgroundColor: "#7BCABB",
            data: [
              75, 12, 49, 55, 102, 34, 19, 75, 12, 49, 55, 102, 34, 19, 39,
            ],
          },
        ],
      },
    };
  },
};
</script>
