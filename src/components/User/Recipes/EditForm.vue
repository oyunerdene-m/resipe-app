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
    import data from '../../../lib/data';
    export default {
        data: function(){
            return {
                id: this.$route.params.id,
                recipe: null
            }
        } ,
        created() {
            this.recipe = data.user.userRecipes.find(recipe=>recipe.id === parseInt(this.id))
        },

        methods: {
            editRecipe(){
                const newData = data.user.userRecipes.map(recipe=> {
                    if(recipe.id === this.recipe.id){
                        return this.recipe
                    } else {
                        return recipe
                    }
                } )
                data.user.userRecipes = newData
                this.$router.push('/my-recipes')

            }
        }
       
    }
   
</script>
<style></style>