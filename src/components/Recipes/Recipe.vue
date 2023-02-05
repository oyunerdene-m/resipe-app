<template>
    <li>
        <div class="recipe"> 

            <div class="recipe_image">
                <img :src="recipe.image" alt="">
            </div>
            <div class="recipe_text">
                <h3 @click="showDetail" class="recipe_name">{{ recipe.name }}</h3>
                <p>{{recipe.description}}</p>
                <button>
                    <p v-if="userstate">
                        <span v-if="!isFavorited" @click="addToFavorites">Add to favorites</span>
                        <span v-else>Favorited </span>
                    </p>
                    <p v-else>
                        <span @click="addToFavorites">Add to favorites</span>
                    </p>
                  
                </button>

            </div>

        </div>
    </li>
</template>

<script>
    import {isFavorited} from '../../lib/getFavorites';
    import data from '../../lib/data';
    import firebase from 'firebase';
    import { eventBus } from '../../main';

    export default {
        data: function(){
            return {
                isFavorited: isFavorited(this.recipe, data.user.favoritesIds),
                favoritesIds: data.user.favoritesIds,
                userstate:false
            }
        }, 
        props: ['recipe'],
        methods:{
            showDetail(){
                eventBus.$emit('myrecipeSelected', this.recipe)
                eventBus.$emit('isFavorited', this.isFavorited)
            },
            addToFavorites(){
                this.favoritesIds.push(this.recipe.id)
                this.isFavorited = true

            }
        },
        created(){
            this.userstate = firebase.auth().currentUser

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