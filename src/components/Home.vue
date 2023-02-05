<template>
    <div class="container">
        <div v-if="user">
            <h3>Welcome <span v-if="user">{{user.displayName}}</span></h3>
            <button><router-link to="/my-recipes">My recipes</router-link></button>
            <button><router-link to="/favorites">My favorites</router-link></button>
            <button 
                type="submit" 
                @click="logOut()">
                    Log out
            </button>
        </div>
        <div class="main_page">
            <app-recipes :recipes="recipes"></app-recipes>
            <recipe-detail></recipe-detail>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import Recipes from './Recipes/Recipes.vue'
    import RecipeDetail from './Recipes/RecipeDetail.vue'
    import data from '../lib/data'

    export default {

        components: {
            appRecipes: Recipes,
            recipeDetail: RecipeDetail
        },

        data: function(){
            return {
                user : null,
                recipes: data.recipes
            }
        },
        created() {
            firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            } else {
                this.user = null;
            }
            });
        },
        methods: {
            logOut() {
                firebase.auth().signOut().then(() => {
                    firebase.auth().onAuthStateChanged(() => {
                    this.$router.push('/')
                    })
                })
            }
        }
    }
</script>

<style scoped>
   div.main_page {
        display: flex;
   }
</style>
