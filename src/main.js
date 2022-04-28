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
import Calendar from "primevue/calendar";
import Column from "primevue/column";
import Rating from "primevue/rating";
import DataTable from "primevue/datatable";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import Badge from "primevue/badge";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import NewChart from "vue2-frappe";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "./theme/style/color-palette.css";
import "./theme/style/global.css";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(NewChart);
app.use(ToastService);

app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.component("Card", Card);
app.component("Menubar", Menubar);
app.component("Chart", Chart);
app.component("Calendar", Calendar);
app.component("Column", Column);
app.component("Rating", Rating);
app.component("DataTable", DataTable);
app.component("Dropdown", Dropdown);
app.component("MultiSelect", MultiSelect);
app.component("Badge", Badge);
app.component("Toast", Toast);

app.mount("#app");
