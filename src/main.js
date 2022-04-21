/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Menubar from "primevue/menubar";
import Chart from "primevue/chart";
import NewChart from "vue2-frappe";
import Calendar from "primevue/calendar";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(NewChart);

app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.component("Card", Card);
app.component("Menubar", Menubar);
app.component("Chart", Chart);
app.component("Calendar", Calendar);

app.mount("#app");
