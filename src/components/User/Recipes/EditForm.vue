<template>
    <div v-if="recipe">
        <h2>Edit recipe</h2>
        <form @submit.prevent="editRecipe">
            <div>
                <label>Name</label>
                <input v-model="recipe.name" type="text">
            </div>
            <div>
                <label>Description</label>
                <input  v-model="recipe.description"  type="text">
            </div>
            <div>
                <label>Image</label>
                <input v-model="recipe.image"  type="imageUrl">
            </div>
            <div>
                <label>Instruction</label>
                <input  v-model="recipe.instruction"  type="text">
            </div>
            <div>
                <label>Ingredients</label>
                <textarea  v-model="recipe.inredients" id="" cols="20" rows="10"></textarea>
            </div>
            <button>Save</button>
        </form>
    </div>
</template>
<script>
    import {db} from '../../../main'

    export default {
        data: function(){
            return {
                id: this.$route.params.recipeId,
                currentUserId: this.$route.params.userId,
                recipe: null
            }
        } ,
        created() {
            const userRecipeRef = db.collection('users').doc(this.currentUserId).collection('recipes');
            userRecipeRef.get().then(snapshot=>{
               snapshot.forEach(doc=> {
                    if(doc.id === this.id){
                        this.recipe = doc.data()
                    }
               })
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        },

        methods: {
            editRecipe(){
                const userEditRecipeRef = db.collection('users').doc(this.currentUserId).collection('recipes').doc(this.id);
                userEditRecipeRef.update(this.recipe).then(() => {
                    window.location.reload()
                    console.log("Document updated");
                })
                .catch((error) => {
                    console.error("Error editing document: ", error);
                });
                
                this.$router.push(`/my-recipes/${this.currentUserId}`)
            }
        }
       
    }
   
</script>
<style></style>