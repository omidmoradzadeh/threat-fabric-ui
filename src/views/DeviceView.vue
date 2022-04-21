<template>
  <div>
    <DataTable
      :value="devices"
      :lazy="true"
      :paginator="true"
      :rows="10"
      v-model:filters="filters"
      ref="dt"
      dataKey="id"
      :totalRecords="totalRecords"
      :loading="loading"
      @page="onPage($event)"
      @sort="onSort($event)"
      @filter="onFilter($event)"
      filterDisplay="row"
      :globalFilterFields="[
        'deviceId',
        'deviceType',
        'deviceRiskLevelScore',
        'lastSeenTimestamp',
      ]"
      responsiveLayout="scroll"
      v-model:selection="selectedDevices"
      :selectAll="selectAll"
      @select-all-change="onSelectAllChange"
      @row-select="onRowSelect"
      @row-unselect="onRowUnselect"
    >
      <!-- <Column selectionMode="multiple" headerStyle="width: 3em"></Column> -->
      <Column
        field="deviceId"
        header="Device Id"
        filterMatchMode="startsWith"
        ref="deviceId"
        :sortable="true"
      >
      </Column>
      <Column
        field="deviceType"
        header="Device Type"
        filterField="deviceType"
        filterMatchMode="contains"
        ref="deviceType"
        :sortable="true"
      >
        <template #body="slotProps">
          <img
            :src="getDeviceTypeImg(slotProps.data.deviceType)"
            width="30"
            class="deviceImage mr-1"
          />
          <span class="image-text">{{ slotProps.data.deviceType }}</span>
        </template>
        <!-- <template #body="slotProps">
          <span>{{ slotProps.data.deviceType }}</span>
        </template> -->
      </Column>
      <Column
        field="deviceRiskLevelScore"
        header="Device Risk Level Score"
        filterMatchMode="contains"
        ref="deviceRiskLevelScore"
        :sortable="true"
      >
        <template #body="slotProps">
          <span
            v-bind:class="
              getDeviceRiskLevelBadge(slotProps.data.deviceRiskLevelScore)
            "
            >{{
              getDeviceRiskLevelValue(slotProps.data.deviceRiskLevelScore)
            }}</span
          >
        </template>
      </Column>
      <Column
        field="lastSeenTimestamp"
        header="Last Seen Timestamp"
        filterField="lastSeenTimestamp"
        ref="lastSeenTimestamp"
        :sortable="true"
      >
      </Column>
    </DataTable>
  </div>
</template>

<script>
import DeviceService from "../service/apis/device.service";
export default {
  data() {
    return {
      loading: false,
      totalRecords: 0,
      devices: null,
      selectedDevices: null,
      selectAll: false,
      filters: {
        name: { value: "", matchMode: "contains" },
        "country.name": { value: "", matchMode: "contains" },
        company: { value: "", matchMode: "contains" },
        "representative.name": { value: "", matchMode: "contains" },
      },
      lazyParams: {},
      columns: [
        { field: "deviceId", header: "Device Id" },
        { field: "deviceType", header: "Device Type" },
        { field: "deviceRiskLevelScore", header: "Device Risk Level Score" },
        { field: "lastSeenTimestamp", header: "Last Seen Timestamp" },
      ],
      iosImg: require("@/assets/static/icons/ios.png"),
      androidImg: require("@/assets/static/icons/android.png"),
      pcImg: require("@/assets/static/icons/pc.png"),
    };
  },
  deviceService: null,
  created() {
    this.deviceService = new DeviceService();
  },
  mounted() {
    this.loading = true;

    this.lazyParams = {
      first: 0,
      rows: this.$refs.dt.rows,
      sortField: null,
      sortOrder: null,
      filters: this.filters,
    };

    this.loadLazyData();
  },
  methods: {
    loadLazyData() {
      this.loading = true;

      setTimeout(() => {
        this.deviceService
          .getdevices({ lazyEvent: JSON.stringify(this.lazyParams) })
          .then((data) => {
            this.devices = data.devices._elements;
            this.totalRecords = data.totalRecords;
            this.loading = false;
          });
      }, Math.random() * 1000 + 250);
    },
    onPage(event) {
      this.lazyParams = event;
      this.loadLazyData();
    },
    onSort(event) {
      this.lazyParams = event;
      this.loadLazyData();
    },
    onFilter() {
      this.lazyParams.filters = this.filters;
      this.loadLazyData();
    },
    onSelectAllChange(event) {
      const selectAll = event.checked;

      if (selectAll) {
        this.deviceService.getdevices().then((data) => {
          this.selectAll = true;
          debugger;
          this.selectedDevices = data.devices._elements;
        });
      } else {
        this.selectAll = false;
        this.selectedDevices = [];
      }
    },
    onRowSelect() {
      this.selectAll = this.selectedDevices.length === this.totalRecords;
    },
    onRowUnselect() {
      this.selectAll = false;
    },

    getDeviceRiskLevelBadge(deviceRiskLevel) {
      return {
        "device-badge status-success": deviceRiskLevel == 1,
        "device-badge status-warning": deviceRiskLevel == 2,
        "device-badge status-danger": deviceRiskLevel == 3,
      };
    },
    getDeviceRiskLevelValue(deviceRiskLevel) {
      if (deviceRiskLevel == 1) return "None";
      if (deviceRiskLevel == 2) return "Middle";
      if (deviceRiskLevel == 3) return "High";
    },
    getDeviceTypeImg(deviceType) {
      if (deviceType == "IOS") return this.iosImg;
      if (deviceType == "Android") return this.androidImg;
      if (deviceType == "PC") return this.pcImg;
    },
  },
};
</script>

<style scoped>
.device-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
}

.device-badge.status-success {
  background-color: #c8e6c9;
  color: #256029;
}

.device-badge.status-warning {
  background-color: #feedaf;
  color: #8a5340;
}

.device-badge.status-danger {
  background-color: #ff0000;
  color: #feedaf;
}

.deviceImage {
  vertical-align: middle;
}
</style>
