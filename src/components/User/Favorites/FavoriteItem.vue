<template>
    <li>
        <div class="recipe"> 
            <div class="recipe_image">
                <img :src="favorite.image" alt="">
            </div>
            <div class="recipe_text">
                <h3 @click="showDetail" class="recipe_name">{{ favorite.name }}</h3>
                <p>{{favorite.description}}</p>
                <button @click="onRemoveFromFavorites(favorite.id)">Remove from favorites</button>

            </div>

        </div>
    </li>
</template>

<script>
    import {eventBus} from '../../../main'
    export default {
        data: function(){
            return {
            }
        },

        props: {
            'favorite': {
                type: Object
            },
            'onRemoveFromFavorites':{
                type: Function
            }
        },

        methods:{
            showDetail(){
                eventBus.$emit('favoriteSelected', this.favorite)
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