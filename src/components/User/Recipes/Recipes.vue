<template>
    <div class="list">
        <h2>Recipe list</h2>
        <ul>
            <recipe-item  v-for="recipe in recipes" :recipe="recipe"></recipe-item>
        </ul>
    </div>
   
</template>

<script>
    import Recipe from './Recipe.vue'

    export default {
        props: {
            'recipes': {
                type: Array
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