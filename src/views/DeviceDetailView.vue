<template>
  <Toast position="top-right" />
  <div class="block-content">
    <div class="px-4 py-8 md:px-6 lg:px-8">
      <div class="surface-card p-4 shadow-2 border-round">
        <div class="font-medium text-3xl text-gray-1 mb-3">
          Device Details
          <a
            @click="goBack()"
            class="cursor-pointer color-gray-1 mr-3 p-ripple close"
            ><i class="pi pi-times text-4xl"></i><span class="p-ink"></span
          ></a>
        </div>

        <ul class="list-none p-0 m-0 border-top-1 surface-border">
          <li class="flex align-items-center py-3 px-2 flex-wrap --gray-3">
            <div class="text-gray-3 w-full md:w-2 font-medium">Device Type</div>
            <div class="text-gray-1 w-full md:w-10">
              <img
                :src="getDeviceTypeImg()"
                width="30"
                class="deviceImage mr-1"
              />{{ item?.deviceType }}
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 flex-wrap --gray-3">
            <div class="text-gray-3 w-full md:w-2 font-medium">Device Id</div>
            <div class="text-gray-1 w-full md:w-10">{{ item?.deviceId }}</div>
          </li>
          <li class="flex align-items-center py-3 px-2 flex-wrap --gray-3">
            <div class="text-gray-3 w-full md:w-2 font-medium">
              Device Risk Level Score
            </div>
            <div class="text-gray-1 w-full md:w-10">
              <span
                v-bind:class="
                  getDeviceRiskLevelBadge(item?.deviceRiskLevelScore)
                "
                >{{ getDeviceRiskLevelValue(item?.deviceRiskLevelScore) }}</span
              >
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 flex-wrap --gray-3">
            <div class="text-gray-3 w-full md:w-2 font-medium">
              Installation Timestamp
            </div>
            <div class="text-gray-1 w-full md:w-10">
              {{ item?.installationTimestamp }}
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 flex-wrap --gray-3">
            <div class="text-gray-3 w-full md:w-2 font-medium">
              Last Update Timestamp
            </div>
            <div class="text-gray-1 w-full md:w-10">
              {{ item?.lastUpdateTimestamp }}
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 flex-wrap">
            <div class="text-gray-3 w-full md:w-2 font-medium mb-2">
              More Details
            </div>
            <div class="text-gray-1 w-full md:w-10">
              <span class="p-tag p-component bg-red-1 mr-2 mr-2"
                ><span class="p-tag-value"
                  >App Name : {{ item?.appName }}</span
                ></span
              ><span class="p-tag p-component bg-blue-1 p-tag-rounded mr-2 mr-2"
                ><span class="p-tag-value"
                  >App Ver : {{ item?.appVersion }}</span
                ></span
              ><span
                class="p-tag p-component bg-green-1 p-tag-rounded mr-2 mr-2"
                ><span class="p-tag-value"
                  >Install Date : {{ item?.installDate }}</span
                ></span
              >
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 flex-wrap --gray-3">
            <div class="text-gray-3 w-full md:w-2 font-medium">Permissions</div>
            <div class="text-gray-1 w-full md:w-10">
              <div class="grid mt-0 mr-0">
                <div
                  class="col-12 md:col-6"
                  v-for="item in item?.permissions?._elements"
                  :key="item.id"
                >
                  <div
                    class="p-3 border-1 surface-border border-round surface-card"
                  >
                    <div class="text-gray-1 mb-2">
                      <i class="pi pi-qrcode text-blue-2 mr-2"></i
                      ><span class="font-medium">{{ item.name }}</span>
                    </div>
                    <div class="text-gray-4">
                      {{ item.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="col-12 p-3">
          <div class="text-gray-3 font-medium mb-3">Attachment</div>
          <div
            class="flex md:align-items-center md:justify-content-between border-top-1 surface-border p-3 flex-column md:flex-row"
          >
            <div class="flex align-items-center">
              <span class="block pi pi-file mr-2"></span
              ><span class="text-gray-1">Report.pdf</span>
            </div>
            <Button label="Download" class="p-button ml-4 bg-light-blue-1">
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeviceService from "../service/apis/device.service";
import { ToastSeverity } from "primevue/api";

export default {
  data() {
    return {
      item: null,
      iosImg: require("@/assets/static/icons/ios.png"),
      androidImg: require("@/assets/static/icons/android.png"),
      pcImg: require("@/assets/static/icons/pc.png"),
    };
  },
  deviceService: null,
  created() {
    this.deviceService = new DeviceService();
    this.deviceService.getDevicesDetails(this.$route.params.id).then((data) => {
      if (data.device === undefined) {
        this.$toast.add({
          severity: ToastSeverity.ERROR,
          summary: "Not found",
          detail: "Device is not exist",
          life: 3000,
        });
        this.$router.go(-1);
        return;
      }
      this.item = data.device;
    });
  },
  methods: {
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
    getDeviceTypeImg() {
      if (this.item?.deviceType == "IOS") return this.iosImg;
      if (this.item?.deviceType == "Android") return this.androidImg;
      if (this.item?.deviceType == "PC") return this.pcImg;
    },
    goBack() {
      this.$router.go(-1);
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

.close {
  float: right;
}
</style>
