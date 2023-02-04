<template>
    <li>
        <div class="recipe"> 
            <div class="recipe_image">
                <img :src="recipe.image" alt="">
            </div>
            <div class="recipe_text">
                <h3 @click="showDetail" class="recipe_name">{{ recipe.name }}</h3>
                <p>{{recipe.description}}</p>
                <button >
                    <span v-if="!isFavorited" @click="addToFavorites">Add to favorites</span>
                    <span v-else>Favorited</span>
                </button>

            </div>

        </div>
    </li>
</template>

<script>
    import {eventBus} from '../../main'
    import {isFavorited} from '../../lib/getFavorites';
    import data from '../../lib/data';
    
    export default {
        data: function(){
            return {
                isFavorited: isFavorited(this.recipe, data.user.favoritesIds),
                favoritesIds: data.user.favoritesIds
            }
        }, 
        props: ['recipe'],
        methods:{
            showDetail(){
                eventBus.$emit('recipeSelected', this.recipe)
                eventBus.$emit('isFavorited', this.isFavorited)
            },
            addToFavorites(){
                this.favoritesIds.push(this.recipe.id)
                this.isFavorited = true

            }
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