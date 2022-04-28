<template>
  <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
    <div class="flex justify-content-between mb-3 text-left">
      <div>
        <span class="block text-gray-4 font-medium mb-3">{{
          details?.title
        }}</span>
        <div class="text-gray-1 font-medium text-xl">{{ details?.value }}</div>
      </div>
      <div
        class="flex align-items-center justify-content-center border-round"
        :class="details?.iconBgClass"
        style="width: 2.5rem; height: 2.5rem"
      >
        <i class="pi text-xl" :class="details?.iconClass"></i>
      </div>
    </div>
    <i class="pi text-gray-l mr-2" :class="details?.descriptionClass"></i>
    <span class="font-medium m-1">
      {{ details?.descriptionValue }}
    </span>
    <span class="text-gray-2">{{ details?.descriptionText }}</span>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  created: function () {},
  props: {
    details: {
      iconClass: String,
      title: String,
      value: String,
      descriptionValue: String,
      descriptionClass: String,
      descriptionArrowClass: String,
      descriptionText: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.border-round {
  border-radius: 10px !important;
}
</style>
