<template>
  <div
    id="app-sidebar-9"
    class="h-full lg:h-auto surface-section lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none hidden"
  >
    <div class="flex flex-column h-full">
      <div
        class="flex align-items-center justify-content-center flex-shrink-0"
        style="height: 60px"
      >
        <img :src="images.logo" alt="Image" height="30" />
      </div>
      <div class="mt-3">
        <ul class="list-none p-0 m-0">
          <li>
            <a
              class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300 transition-duration-150 transition-colors p-ripple"
              ><i
                class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"
              ></i
              ><span class="font-medium inline text-base lg:text-xs lg:block"
                >Home</span
              ><span class="p-ink"></span
            ></a>
          </li>
          <li>
            <a
              class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
              ><i
                class="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"
              ></i
              ><span class="font-medium inline text-base lg:text-xs lg:block"
                >Search</span
              ><span class="p-ink"></span
            ></a>
          </li>
          <li>
            <a
              class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
              ><i
                class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"
              ></i
              ><span class="font-medium inline text-base lg:text-xs lg:block"
                >Team</span
              ><span class="p-ink"></span
            ></a>
          </li>
          <li class="relative">
            <a
              class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
              ><i
                class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl p-overlay-badge"
                ><span
                  id="pv_id_5_badge"
                  class="p-badge p-component p-badge-danger p-badge-dot"
                ></span></i
              ><span class="font-medium inline text-base lg:text-xs lg:block"
                >Reports</span
              ><i class="pi pi-chevron-down ml-auto lg:hidden"></i
              ><span class="p-ink"></span
            ></a>
            <ul
              class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem"
            >
              <li>
                <a
                  class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                  ><i class="pi pi-chart-line mr-2"></i
                  ><span class="font-medium">Revenue</span
                  ><i class="pi pi-chevron-down ml-auto"></i
                  ><span class="p-ink"></span
                ></a>
                <ul
                  class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out"
                >
                  <li>
                    <a
                      class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                      ><i class="pi pi-table mr-2"></i
                      ><span class="font-medium">View</span
                      ><span class="p-ink"></span
                    ></a>
                  </li>
                  <li>
                    <a
                      class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                      ><i class="pi pi-search mr-2"></i
                      ><span class="font-medium">Search</span
                      ><span class="p-ink"></span
                    ></a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                  ><i class="pi pi-chart-line mr-2"></i
                  ><span class="font-medium">Expenses</span
                  ><span class="p-ink"></span
                ></a>
              </li>
            </ul>
          </li>
          <li>
            <a
              class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
              ><i
                class="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"
              ></i
              ><span class="font-medium inline text-base lg:text-xs lg:block"
                >Events</span
              ><span class="p-ink"></span
            ></a>
          </li>
          <li>
            <a
              class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
              ><i
                class="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"
              ></i
              ><span class="font-medium inline text-base lg:text-xs lg:block"
                >Options</span
              ><span class="p-ink"></span
            ></a>
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

images.profileImg

<script>
export default {
  name: "SideMenuView",
  components: {},
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
