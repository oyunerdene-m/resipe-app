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
        <div v-else>
            <nav class="navbar">
                <ul>
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
                <li>
                    <router-link to="/">Sign up</router-link>
                </li>
                </ul>
            </nav> 
        </div>
        <input type="text" placeholder="Search..." v-model="searchInput">
        <div class="main_page">
            <app-recipes :recipes='filteredRecipe' :searchInput="searchInput"></app-recipes>
            <recipe-detail></recipe-detail>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import Recipes from './Recipes/Recipes.vue'
    import RecipeDetail from './Recipes/RecipeDetail.vue'
    import data from '../lib/data'
    import { eventBus } from '../main'

    export default {

        components: {
            appRecipes: Recipes,
            recipeDetail: RecipeDetail,
        },

        data: function(){
            return {
                user : null,
               searchInput: ''
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
            eventBus.$on('filtered', data=>{
                this.recipes = data

            })
        },
        methods: {
            logOut() {
                firebase.auth().signOut().then(() => {
                    firebase.auth().onAuthStateChanged(() => {
                    this.$router.push('/')
                    })
                })
            },
        },
      
        computed: {
            filteredRecipe: function(){
                const filtered = data.recipes.filter(recipe=> {
                    if(recipe.name.toLowerCase().includes(this.searchInput.toLowerCase()) || recipe.description.toLowerCase().includes(this.searchInput.toLowerCase()) || recipe.instruction.toLowerCase().includes(this.searchInput.toLowerCase()) || recipe.ingredients.toLowerCase().includes(this.searchInput.toLowerCase())) {
                        return recipe
                    } 
                });
                return filtered
            }
        }
    }
</script>

<style scoped>
   div.main_page {
        display: flex;
   }
</style>
