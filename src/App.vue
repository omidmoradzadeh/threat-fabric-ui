<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/menu">Menu</router-link>
  </nav> -->

  <div class="min-h-screen flex relative lg:static surface-ground">
    <SideMenu :items="items" />
    <div class="min-h-screen flex flex-column relative flex-auto">
      <div class="p-5 flex flex-column flex-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "./views/SideMenu.vue";

export default {
  components: {
    SideMenu,
  },
  data() {
    return {
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
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
