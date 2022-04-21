<template>
  <div
    class="h-full lg:h-auto surface-section lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none hidden"
  >
    <div class="flex flex-column h-full">
      <div
        class="flex align-items-center justify-content-center flex-shrink-0"
        style="height: 60px"
      >
        <img :src="images.logo" alt="Image" height="35" />
      </div>
      <div class="mt-3">
        <ul class="list-none p-0 m-0">
          <li v-for="item in items" :key="item.name" id="nav">
            <router-link
              :to="{ name: item.to }"
              class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center transition-duration-150 transition-colors p-ripple"
              ><i
                class="pi mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"
                :class="item.icon"
              ></i
              ><span class="font-medium inline text-base lg:text-xs lg:block">{{
                item.name
              }}</span
              ><span class="p-ink"></span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mt-auto">
        <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
        <a
          class="m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:surface-200 border-round text-600 transition-duration-150 transition-colors p-ripple"
          ><img
            :src="images.profileImg"
            class="mr-2 lg:mr-0"
            style="width: 32px; height: 32px; border-radius: 10px" /><span
            class="font-medium inline lg:hidden"
            >Omid Moradzadeh</span
          ><span class="p-ink"></span
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenuView",
  components: {},
  props: {
    items: {
      type: Array,
      default: () => [
        {
          name: "Dashboard",
          icon: "pi-home",
          color: "text-gray-500",
          to: "dashboard",
        },
      ],
    },
  },
  data() {
    return {
      images: {
        profileImg: require("@/assets/static/images/omid.jpg"),
        logo: require("@/assets/static/images/logo.jpg"),
      },
    };
  },
};
</script>

<style lang="css">
ul #nav {
  color: var(--bluegray-300);
  border-left-width: 2px !important;
  border-left-style: solid;
  border-color: var(--bluegray-300);
}

ul #nav:hover {
  color: var(--cyan-600) !important;
  border-left-width: 2px !important;
  border-left-style: solid;
  border-color: var(--cyan-600) !important;
}
.router-link-active {
  color: var(--cyan-600) !important;
  border-left-width: 2px !important;
  border-left-style: solid;
  border-color: var(--cyan-600) !important;
}
</style>
