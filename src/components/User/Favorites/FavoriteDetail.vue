<template>
    <div class="recipe_detail" v-if="favorite">
        <h1>{{favorite.name}}</h1>
        <div class="content">
            <div class="image">  
                <img :src="favorite.image" alt=""/>
            </div>
            <div class="text">
                <p>{{favorite.description}}</p>
                <h5>Instruction:</h5> 
                <p>{{favorite.instruction}}</p>
                <h5>Ingredients:</h5> 
                <p>{{favorite.ingredients}}</p>
                
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from '../../../main'
    export default {
        data: function(){
            return {
                favorite: null
            }
        },

        methods: {
            removeFromFavorites(){
                eventBus.$emit('removedFromFavorites', this.favorite.id)
            }
        },

        created(){
            eventBus.$on('favoriteSelected', (data) => {
                this.favorite = data
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