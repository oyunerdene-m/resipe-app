<template>
    <div class="content">
        <div class="my_list">
            <router-link to="/">Home</router-link>
            <h2>My recipes</h2>
            <button><router-link :to="`/my-recipes/${currentUserId}/new`">Add new recipe</router-link></button>
            <ul>
                <recipe-item  v-for="recipe in recipes" :recipe="recipe" :onDelete="deleteRecipe"></recipe-item>
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
            const userRecipeRef = db.collection('users').doc(this.currentUserId).collection('recipes');
            userRecipeRef.get().then(snapshot=>{
               snapshot.forEach(doc=>{
                   let recipe = doc.data();
                   recipe.id = doc.id;
                  this.recipes.push(recipe)
               })
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        },
        methods: {
            deleteRecipe(id){
                const userDeleteRecipeRef = db.collection('users').doc(this.currentUserId).collection('recipes').doc(id);
            
                userDeleteRecipeRef.delete().then(() => {
                    console.log("Document successfully deleted!");
                    window.location.reload()
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
            }
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