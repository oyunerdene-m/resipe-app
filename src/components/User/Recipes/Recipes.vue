<template>

    <div class="content">

        <div class="my_list">
            <router-link to="/">Home</router-link>

            <h2>My recipes</h2>
            <button><router-link to="/my-recipes/new">Add new recipe</router-link></button>
            <ul>
                <recipe-item  v-for="recipe in recipes" :recipe="recipe" ></recipe-item>
            </ul>
        </div>
        <div class="detail">
            <recipe-detail></recipe-detail>
        </div>
    </div>
   
</template>

<script>
    import Recipe from './Recipe.vue'
    import RecipeDetail from './RecipeDetail.vue';
    import data from '../../../lib/data';
    import { eventBus } from '../../../main';

    export default {
        data: function(){
            return {
                recipes: data.user.userRecipes
            }
        },

        components : {
            recipeItem: Recipe,
            recipeDetail: RecipeDetail
        },

        created(){
            eventBus.$on('recipeDeleted', id=>{
                data.user.userRecipes = data.user.userRecipes.filter(recipe => recipe.id !== id)
                this.recipes = this.recipes.filter(recipe => recipe.id !== id)
            })
        }
    }
</script>

<style scoped>
    .content {
        display: flex
    }
    .my_list {
        border: 1px solid blue;
        width: 40%
    }

    .detail {
        border: 1px solid red;
        width: 60%
    }
</style>