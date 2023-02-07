<template>
    <div>
        <h2>Add new recipe</h2>
        <form @submit="addNewRecipe">
            <div>
                <label>Name</label>
                <input v-model="recipe.name" type="text">
            </div>
            <div>
                <label>Description</label>
                <input v-model="recipe.description"  type="text">
            </div>
            <div>
                <label>Image</label>
                <input v-model="recipe.image"  type="imageUrl">
            </div>
            <div>
                <label>Instruction</label>
                <input v-model="recipe.instruction"  type="text">
            </div>
            <div>
                <label>Ingredients</label>
                <textarea v-model="recipe.ingredients" id="" cols="15" rows="10"></textarea>
            </div>
            <button>Add</button>
        </form>
    </div>
</template>
<script>
    import { db } from '../../../../main'
    import firebase from 'firebase'
    export default {
        data: function(){
            return {
                currentUserId: this.$route.params.userId,
                recipe: {
                    id: '',
                    name: '',
                    description: '',
                    image: '',
                    instruction: '',
                    ingredients: '',
                }
            }
        } ,
        
        methods: {
             addNewRecipe(){
                var userRef = db.collection("users").doc(this.currentUserId);
                // this.recipe.id = Math.random().toString()
                // userRef.update({
                //     userRecipes: firebase.firestore.FieldValue.arrayUnion(this.recipe)
                // });

                this.$router.push(`/my-recipes/${this.currentUserId}`)
            }
        },
        
    }
   
</script>
<style></style>