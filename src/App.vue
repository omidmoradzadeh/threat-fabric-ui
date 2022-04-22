<template>
  <div class="">
    <div class="min-h-screen flex relative lg:static surface-ground">
      <div
        id="app-sidebar-9"
        class="h-full lg:h-auto surface-section lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none"
        :class="isOpen ? 'hidden' : ''"
      >
        <div class="flex flex-column h-full">
          <div class="card">
            <div class="flex card-container blue-container overflow-hidden">
              <div
                class="flex-none flex align-items-center justify-content-center logo"
              >
                <div class=""></div>
              </div>
              <div
                class="flex-grow-1 flex align-items-center justify-content-center"
              >
                <img :src="images.logo" alt="Image" height="35" />
              </div>
              <div
                class="flex-none flex align-items-center justify-content-center"
              >
                <a
                  @click="this.isOpen = !this.isOpen"
                  class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                  ><i class="pi pi-times text-4xl"></i
                  ><span class="p-ink"></span
                ></a>
              </div>
            </div>
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
                  ><span
                    class="font-medium inline text-base lg:text-xs lg:block"
                    >{{ item.name }}</span
                  ><span class="p-ink"></span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
            <a
              class="m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:surface-200 border-round text-gray-4 transition-duration-150 transition-colors p-ripple"
              ><img
                :src="images.profileImg"
                class="mr-2 lg:mr-0 profile-img" /><span
                class="font-medium inline lg:hidden"
                >{{ userName }}</span
              ><span class="p-ink"></span
            ></a>
          </div>
        </div>
      </div>
      <div class="min-h-screen flex flex-column relative flex-auto">
        <div
          class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border navbar-detail"
        >
          <div class="flex">
            <a
              @click="this.isOpen = !this.isOpen"
              class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
              ><i class="pi pi-bars text-4xl"></i><span class="p-ink"></span></a
            ><span class="p-input-icon-left"
              ><i class="pi pi-search"></i
              ><input
                class="p-inputtext p-component border-none w-10rem sm:w-20rem border-none w-10rem sm:w-20rem"
                type="text"
                placeholder="Search..."
            /></span>
          </div>
          <a class="cursor-pointer block lg:hidden text-700 p-ripple"
            ><i class="pi pi-ellipsis-v text-2xl"></i><span class="p-ink"></span
          ></a>
          <ul
            class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
          >
            <li>
              <a
                class="flex p-3 lg:px-3 lg:py-2 align-items-center text-gray-4 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                ><i
                  class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"
                ></i
                ><span class="block lg:hidden font-medium">Inbox</span
                ><span class="p-ink"></span
              ></a>
            </li>
            <li>
              <a
                class="flex p-3 lg:px-3 lg:py-2 align-items-center text-gray-4 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                ><i
                  class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"
                  ><span
                    id="pv_id_3_badge"
                    class="p-badge p-component p-badge-danger p-badge-dot"
                  ></span></i
                ><span class="block lg:hidden font-medium">Notifications</span
                ><span class="p-ink"></span
              ></a>
            </li>
            <li class="border-top-1 surface-border lg:border-top-none">
              <a
                class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                ><img
                  :src="images.profileImg"
                  class="mr-3 lg:mr-0 profile-img" />
                <div class="block lg:hidden">
                  <div class="text-900 font-medium">{{ userName }}</div>
                  <span class="text-gray-4 font-medium text-sm">Developer</span>
                </div>
                <span class="p-ink"></span
              ></a>
            </li>
          </ul>
        </div>

        <div class="p-5 flex flex-column flex-auto">
          <!-- <div class="grid">
            <div class="col-12"> -->
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userName: "Omid Moradzadeh",
      isOpen: true,
      items: [
        {
          name: "Dashboard",
          icon: "pi-home",
          color: "text-gray-500",
          to: "dashboard",
        },
        {
          name: "Device",
          icon: "pi-th-large",
          color: "text-gray-500",
          to: "device",
        },
      ],
      images: {
        profileImg: require("@/assets/static/images/omid.jpg"),
        logo: require("@/assets/static/images/logo.jpg"),
      },
    };
  },
  methods: {
    openSide() {
      alert(this.isOpen);
      debugger;
      this.isOpen != this.isOpen;
      this.$emit("reload", "reload");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--blue-1);
}

ul #nav a:hover {
  color: var(--light-blue-1) !important;
  border-left-width: 2px !important;
  border-left-style: solid;
  border-color: var(--light-blue-1) !important;
}
.router-link-active {
  color: var(--light-blue-1) !important;
  border-left-width: 2px !important;
  border-left-style: solid;
  border-color: var(--light-blue-1) !important;
}

.logo {
  height: 60px;
}

.profile-img {
  width: 30px;
  height: 30px;
  border-radius: 10px;
}

.navbar-detail {
  height: 60px;
}

#nav a {
  color: var(--blue-3);
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>
