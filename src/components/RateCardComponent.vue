<template>
  <div class="surface-card shadow-2 border-round p-4">
    <div class="flex align-items-center justify-content-between mb-4">
      <span class="text-xl font-medium text-gray-1">{{ title }}</span>
    </div>
    <div class="surface-border border-1 border-round p-3 mb-4">
      <div class="progress">
        <div
          v-for="item in progress"
          :key="item.name"
          class="progress-bar"
          :class="item.color"
          v-bind:style="{ width: item.length + '%' }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <ul class="mt-4 list-none p-0 mx-0">
      <li
        v-for="item in progress"
        :key="item.name"
        class="flex align-items-center pb-3"
      >
        <span
          class="border-round mr-3 flex-shrink-0 item-selector"
          :class="item.color"
        ></span
        ><span class="text-xl text-base text-90"> {{ item.name }}</span
        ><span class="text-600 text-xl text-base ml-auto"
          >{{ item.length }} %
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RateCardComponent",
  components: {},
  props: {
    title: {
      type: String,
      default: "No Title",
    },
    progress: {
      type: Array,
      default: () => [
        {
          name: "Item",
          color: "bg-pink-300",
          length: 100,
        },
      ],
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.progress {
  height: 1rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
}

.progress,
.progress-bar {
  display: flex;
  overflow: hidden;
}

.progress-bar {
  flex-direction: column;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  transition: width 0.6s ease;
  color: var(--surface-a);
}
.item-selector {
  width: 1rem;
  height: 1rem;
}
</style>
