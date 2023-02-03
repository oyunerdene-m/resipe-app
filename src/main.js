import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";

export const eventBus = new Vue();

Vue.component("app-home", Home);

new Vue({
	el: "#app",
	render: (h) => h(App),
});
