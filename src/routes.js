import Signup from "./components/User/Auth/Signup.vue";
import Login from "./components/User/Auth/Login.vue";
import Home from "./components/Home.vue";
import FavoritesList from "./components/User/Favorites/FavoritesList.vue";

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
	{
		path: "/favorites",
		name: "favorites",
		component: FavoritesList,
	},
];
