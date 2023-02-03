<template>
    <ul>
        <recipe-item  v-for="recipe in recipes" :recipe="recipe"></recipe-item>
    </ul>
</template>

<script>
    import Recipe from './Recipe.vue'

    export default {
        props: {
            'recipes': {
                type: Array
            }
        },

        components :{
            recipeItem: Recipe
        }
    }
</script>

<style></style>