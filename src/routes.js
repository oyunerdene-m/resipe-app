import Signup from "./components/User/Signup.vue";
import Login from "./components/User/Login.vue";
import Home from "./components/Home.vue";

export const routes = [
	{
		path: "/",
		name: "signup",
		component: Signup,
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/home",
		name: "home",
		component: Home,
	},
];
