<template>
    <div class="list">
        <h2>Recipe list</h2>
        <ul>
            <recipe-item  v-for="recipe in recipes" :recipe="recipe"></recipe-item>
        </ul>
        <p v-if="searchInput && recipes.length <= 0"> Not Found!</p>
    </div>
   
</template>

<script>
    import Recipe from './Recipe.vue'

    export default {
        props: {
            'recipes': {
                type: Array
            },
            'searchInput': {
                type: String
            }
        },

        components : {
            recipeItem: Recipe
        }
    }
</script>

<style>
    .list {
        border: 1px solid blue;
        width: 40%
    }
</style>