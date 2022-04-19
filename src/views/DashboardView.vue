<template>
  <!-- <MenuView /> -->
  <div class="min-h-screen flex relative lg:static surface-ground">
    <SideMenu />
    <div class="min-h-screen flex flex-column relative flex-auto">
      <div class="p-5 flex flex-column flex-auto">
        <div class="grid">
          <div class="col-12 lg:col-6 xl:col-3">
            <CardView :details="menu1" />
          </div>
          <div class="col-12 lg:col-6 xl:col-3">
            <CardView :details="menu2" />
          </div>
          <div class="col-12 lg:col-6 xl:col-3">
            <CardView :details="menu3" />
          </div>
          <div class="col-12 lg:col-6 xl:col-3">
            <CardView :details="menu4" />
          </div>
          <div class="col-12"><ChartView /></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 
  <div class="card">
    <div class="flex card-container indigo-container">
      <div class="flex-1 text-center p-4 border-round">
        <CardView />
      </div>
      <div class="flex-1 text-center p-4 border-round">
        <CardView />
      </div>
      <div class="flex-1 text-center p-4 border-round">
        <CardView />
      </div>
    </div>
  </div> -->
</template>

<script>
import CardView from "./CardView.vue";
// import MenuView from "./MenuView.vue";
import SideMenu from "./SideMenu.vue";
import ChartView from "./ChartView.vue";

export default {
  components: {
    // MenuView,
    CardView,
    SideMenu,
    ChartView,
  },
  data() {
    return {
      menu1: {
        iconClass: "pi-shopping-cart text-blue-500 text-xl",
        title: "Orders",
        value: "970",
        descriptionValue: "24%",
        descriptionClass: "pi-arrow-up text-green-500",
        descriptionText: "since last visit",
      },
      menu2: {
        iconClass: "pi-map-marker text-orange-500 text-xl",
        title: "Orders",
        value: "5200 $",
        descriptionValue: "+81%",
        descriptionClass: "pi-arrow-up text-green-500",
        descriptionText: "Since Last Week",
      },
      menu3: {
        iconClass: "pi-inbox text-cyan-500 text-xl",
        title: "Customer",
        value: "394,652",
        descriptionValue: "791",
        descriptionClass: "pi-arrow-down text-pink-500",
        descriptionText: "New Registed",
      },
      menu4: {
        iconClass: "pi-comment text-purple-500  text-xl",
        title: "Orders",
        value: "970",
        descriptionValue: "12",
        descriptionClass: "pi-arrow-up text-green-500",
        descriptionText: "Responded",
      },
    };
  },
};
</script>
