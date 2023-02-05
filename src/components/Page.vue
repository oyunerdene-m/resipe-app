<template>
    <div class="container">
        <div>
            <nav class="navbar">
                <ul v-if="!user">
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
                <li>
                    <router-link to="/signup">Sign up</router-link>
                </li>
                </ul>
            </nav>
        </div>
        <div class="main_page">
            <app-recipes :recipes="recipes"></app-recipes>
            <recipe-detail></recipe-detail>
        </div>
    </div>
</template>

<script>
    import Recipes from './Recipes/Recipes.vue'
    import RecipeDetail from './Recipes/RecipeDetail.vue'
    import data from '../lib/data'

    export default {
        components: {
            appRecipes: Recipes,
            recipeDetail: RecipeDetail
        },

        data: function(){
            return {
                user : null,
                recipes: data.recipes
            }
        }
    }
</script>