<template>
  <div class="surface-card shadow-2 border-round p-4">
    <div class="flex align-items-center justify-content-between mb-4">
      <span class="text-xl font-medium text-900">Filter</span>
    </div>
    <div class="flex mb-4 calender-area">
      <label for="rangeDate" class="mb-2">Range</label>
      <div class="flex-container">
        <Calendar
          id="rangeDate"
          v-model="selectedDate"
          selectionMode="range"
          :manualInput="false"
        />
        <Button label="Search" class="p-button ml-4" @click="reload" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardFilterView",
  components: {},
  created() {},
  data() {
    return {
      selectedDate: null,
    };
  },
  methods: {
    reload() {
      this.$emit("reload", "reload");
    },
  },
};
</script>

<style>
.calender-area {
  flex-direction: column;
  align-items: flex-start;
}
</style>
