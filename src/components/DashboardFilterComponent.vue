<template>
  <Toast position="top-right" />
  <div class="surface-card shadow-2 border-round p-4">
    <div class="flex align-items-center justify-content-between mb-4">
      <span class="text-xl font-medium text-gray-1">Filter</span>
    </div>
    <div class="flex mb-4 calender-area">
      <label for="rangeDate" class="mb-2 text-gray-4">Range</label>
      <div class="flex-container">
        <Calendar
          id="rangeDate"
          v-model="selectedDate"
          selectionMode="range"
          :maxDate="new Date()"
          :manualInput="false"
        />
        <Button
          label="Search"
          class="p-button ml-4 bg-light-blue-1"
          @click="reload"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { useToast } from "primevue/usetoast";
import { ToastSeverity } from "primevue/api";

export default {
  name: "DashboardFilterComponent",
  components: {},
  created() {},
  setup() {},
  data() {
    return {
      selectedDate: null,
    };
  },
  methods: {
    reload() {
      var count = Object.keys(!this.selectedDate).length;
      console.log(count);
      if (!this.selectedDate) {
        this.$toast.add({
          severity: ToastSeverity.ERROR,
          summary: "Error",
          detail: "You must enter filter range",
          life: 3000,
        });
        return;
      }
      this.$emit("reload", this.selectedDate);
    },
  },
};
</script>

<style scoped>
.calender-area {
  flex-direction: column;
  align-items: flex-start;
}
</style>
