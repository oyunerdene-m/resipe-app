import Vue from "vue";
import App from "./App.vue";
import { routes } from "./routes";
import VueRouter from "vue-router";
import firebase from "firebase/app";

const router = new VueRouter({
	routes,
});
Vue.use(VueRouter);

Vue.config.productionTip = false;

const firebaseConfig = {
	apiKey: "AIzaSyBYN1lJSy3anFBpBi6Sbnch5yTrB9JuLhY",
	authDomain: "recipe-19b02.firebaseapp.com",
	projectId: "recipe-19b02",
	storageBucket: "recipe-19b02.appspot.com",
	messagingSenderId: "773226157543",
	appId: "1:773226157543:web:b232cc86bb659474319942",
	measurementId: "G-KMGRKH6YRD",
};

firebase.initializeApp(firebaseConfig);

export const eventBus = new Vue();

new Vue({
	el: "#app",
	router,
	render: (h) => h(App),
});
