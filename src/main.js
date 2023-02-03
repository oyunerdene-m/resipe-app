import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import { routes } from "./routes";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
});

export const eventBus = new Vue();

Vue.component("app-home", Home);
Vue.config.productionTip = false;

new Vue({
	el: "#app",
	router,
	render: (h) => h(App),
});
