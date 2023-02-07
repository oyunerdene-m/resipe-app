<template>

    <div class="content">

        <div class="my_list">
            <router-link to="/">Home</router-link>

            <h2>My recipes</h2>
            <button><router-link :to="`/my-recipes/${currentUserId}/new`">Add new recipe</router-link></button>
            <ul>
                <recipe-item  v-for="recipe in recipes" :recipe="recipe" ></recipe-item>
            </ul>
        </div>
        <div class="detail">
            <recipe-detail></recipe-detail>
        </div>
    </div>
   
</template>

<script>
    import Recipe from './Recipe.vue'
    import RecipeDetail from './RecipeDetail.vue';
    import {db} from '../../../main'
    import { eventBus } from '../../../main';

    export default {
        data: function(){
            return {
                recipes: [],
                currentUserId: this.$route.params.userId
            }
        },

        components : {
            recipeItem: Recipe,
            recipeDetail: RecipeDetail
        },
       
        created(){
        const userRef = db.collection('users').doc(this.currentUserId)
        userRef.get().then(snapshot=>{
            if(snapshot.exists){
                this.recipes = snapshot.data().userRecipes
            } else {
                console.log('No recipe yet!')
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        
        eventBus.$on('recipeDeleted', id => {
            this.recipes =  this.recipes.filter(recipe => recipe.id !== id)
            db.collection('users').get().then(querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    console.log(doc.data())
                })
            })
            
        })
    }
    }
</script>

<style scoped>
    .content {
        display: flex
    }
    .my_list {
        border: 1px solid blue;
        width: 40%
    }

    .detail {
        border: 1px solid red;
        width: 60%
    }
</style>