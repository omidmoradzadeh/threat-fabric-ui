<template>
  <div class="block-content">
    <div class="px-4 py-8 md:px-6 lg:px-8">
      <div class="surface-card p-4 shadow-2 border-round">
        <div class="flex align-items-center justify-content-between mb-4">
          <span class="text-xl font-medium text-gray-1">Device</span>
        </div>
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
          <template #header>
            <div class="flex justify-content-between">
              <Button
                label="Clear"
                class="p-button ml-4 bg-light-blue-1"
                @click="clearSearch"
              />
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="search" placeholder="Search Keyword" />
              </span>
            </div>
          </template>
          <template #empty> No Device found. </template>
          <template #loading> Loading device data. Please wait. </template>
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
          <Column :exportable="false" style="min-width: 8rem">
            <template #body="slotProps">
              <router-link
                :to="{
                  name: 'deviceDetail',
                  params: { id: slotProps.data.id },
                }"
              >
                <Button
                  icon=" pi pi-info-circle"
                  class="p-button-rounded -text-green-1 mr-2"
              /></router-link>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
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
      filters: null,
      search: null,
      lazyParams: {},
      columns: [
        { field: "deviceId", header: "Device Id" },
        { field: "deviceType", header: "Device Type" },
        { field: "deviceRiskLevelScore", header: "Device Risk Level Score" },
        { field: "lastSeenTimestamp", header: "Last Seen Timestamp" },
      ],
      awaitingSearch: false,
      iosImg: require("@/assets/static/icons/ios.png"),
      androidImg: require("@/assets/static/icons/android.png"),
      pcImg: require("@/assets/static/icons/pc.png"),
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    search(newQuestion, oldQuestion) {
      if (!this.awaitingSearch) {
        setTimeout(() => {
          this.loadLazyData();
          this.awaitingSearch = false;
        }, 2000);
      }
      this.awaitingSearch = true;
    },
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
      search: null,
    };

    this.loadLazyData();
  },
  methods: {
    loadLazyData() {
      this.lazyParams.search = this.search;
      // this.loading = true;
      this.deviceService
        .getDevices({ lazyEvent: JSON.stringify(this.lazyParams) })
        .then((data) => {
          this.devices = data.devices._elements;
          this.totalRecords = data.totalRecords;
          this.loading = false;
        });
    },
    onPage(event) {
      this.reloadData(event);
    },
    onSort(event) {
      this.reloadData(event);
    },
    onFilter() {
      this.lazyParams.search = this.search;
      this.loadLazyData();
    },
    reloadData(event) {
      this.lazyParams = event;
      this.lazyParams.search = this.search;
      this.loadLazyData();
    },
    clearSearch() {
      this.search = "";
      this.lazyParams.search = "";
      this.loadLazyData();
    },
    onSelectAllChange(event) {
      const selectAll = event.checked;

      if (selectAll) {
        this.deviceService.getDevices().then((data) => {
          this.selectAll = true;
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
    goToDetail() {},

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
  background-color: var(--green-100);
  color: var(--green-800);
}

.device-badge.status-warning {
  background-color: var(--yellow-100);
  color: var(--yellow-800);
}

.device-badge.status-danger {
  background-color: var(--red-1);
  color: var(--surface-0);
}

.deviceImage {
  vertical-align: middle;
}
</style>
