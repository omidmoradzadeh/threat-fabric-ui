<template>
  <div class="surface-card shadow-2 border-round p-4">
    <div class="flex align-items-center justify-content-between mb-3">
      <div class="text-900 font-medium text-xl">{{ title }}</div>
    </div>

    <vue-frappe
      :id="id"
      :labels="this.labels"
      type="axis-mixed"
      :height="this.height"
      :colors="this.colors"
      :dataSets="this.chartData"
    >
    </vue-frappe>
  </div>
</template>

<script>
export default {
  name: "ChartView",
  props: {
    id: {
      type: String,
      default: () => "chart" + Math.floor(Math.random() * 10000),
    },
    labels: { type: Array, default: () => ["2022-04-30"] },
    title: {
      type: String,
      default: "No Title",
    },
    type: {
      type: String,
      default: "axis-mixed",
    },
    height: {
      type: Number,
      default: 350,
    },
    colors: { type: Array, default: () => ["purple"] },
    chartData: {
      type: Array,
      default: () => [
        {
          name: "Data",
          chartType: "bar",
          values: [1],
        },
      ],
    },
  },
};
</script>
