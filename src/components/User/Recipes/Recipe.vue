<template>
    <li :key="recipe.id">
        <div class="recipe"> 
            <div class="recipe_image">
                <img :src="recipe.image" alt="">
            </div>
            <div class="recipe_text">
                <h3 @click="showDetail" class="recipe_name">{{ recipe.name }}</h3>
                <p>{{recipe.description}}</p>
                <button><router-link :to="`/my-recipes/edit/${recipe.id}`">edit</router-link></button>
                <button @click="deleteRecipe">delete</button>
            </div>

        </div>
    </li>
</template>

<script>
    import {eventBus} from '../../../main'
    
    export default {
        props: ['recipe'],

        methods:{
            showDetail(){
                eventBus.$emit('recipeSelected', this.recipe)
            },
            deleteRecipe(){
                eventBus.$emit('recipeDeleted', this.recipe.id)
            },
            
           
           
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        border-bottom: 2px solid #f0f0f0;

    }
    .recipe {
        display: flex;
    }

    .recipe_image {
        padding: 15px 0 15px 15px;
    }

    .recipe_image, .recipe_name {
        cursor: pointer;
    }
    .recipe_text {
        padding: 15px 15px 15px 20px;

    }
    .recipe_image img {
        width: 120px;
        height: 120px;
        border-radius: 5px;
    }
</style>