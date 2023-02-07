import Signup from "./components/User/Auth/Signup.vue";
import Login from "./components/User/Auth/Login.vue";
import Home from "./components/Home.vue";
import FavoritesList from "./components/User/Favorites/FavoritesList.vue";
import Recipes from "./components/User/Recipes/Recipes.vue";
import RecipeForm from "./components/User/Recipes/NewRecipe/RecipeForm.vue";
import EditForm from "./components/User/Recipes/EditForm.vue";

export const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/signup",
		name: "signup",
		component: Signup,
	},
	{
		path: "/favorites",
		name: "favorites",
		component: FavoritesList,
	},
	{
		path: "/my-recipes/:userId",
		name: "my-recipes",
		component: Recipes,
	},
	{
		path: "/my-recipes/:userId/new",
		name: "create",
		component: RecipeForm,
	},
	{
		path: "/my-recipes/edit/:id",
		name: "edit",
		component: EditForm,
	},
];
