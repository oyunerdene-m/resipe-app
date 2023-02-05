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
            <div class="my_content">
                <div class="my_list">
                    <app-recipes :recipes="recipes"></app-recipes>
                </div>
                <div class="my_detail">
                    <recipe-detail></recipe-detail>
                </div>
            </div>
           
            
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
<style scoped>
    .my_content {
        display: flex;
    }
    .my_list {
        width: 60%;
    }
    .my_detail {
        width: 40%;
    }
</style>