<template>
    <div class="recipe_detail" v-if="recipe">
        <h1>{{recipe.name}}</h1>
        <div class="content">
            <div class="image">  
                <img :src="recipe.image" alt=""/>
            </div>
            <div class="text">
                <p>{{recipe.description}}</p>
                <h5>Instruction:</h5> 
                <p>{{recipe.instruction}}</p>
                <h5>Ingredients:</h5> 
                <p>{{recipe.ingredients}}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
    import {eventBus} from '../../../main'
    export default {
        data: function(){
            return {
                recipe: null,
            }
        },

        created(){
            eventBus.$on('recipeSelected', (data) => {
                this.recipe = data

            })
            eventBus.$on('recipeDeleted', (id) => {
                if(this.recipe.id === id){
                    this.recipe = null
                }

            })
        }
    }
</script>

<style scoped>

    .recipe_detail {
        border: 1px solid red;
        width: 60%;
        text-align: center;
    }
    .content {
        display: flex;
        border: 1px solid aqua;

    }
    .image {
        width: 40%;
        border: 1px solid purple;
    }

    .image img {
        width: 100%;
        height: 100%;
    }
    .text {
        width: 60%;
        border: 1px solid green;
    }
     li {
        list-style: none
     }
</style>