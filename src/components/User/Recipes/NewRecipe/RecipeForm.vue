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
    import data from '../../../../lib/data';

    export default {
        data: function(){
            return {
                recipe: {
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
                const ingredientsArr = this.recipe.ingredients.split('\n')
                this.recipe.ingredients = ingredientsArr;
                data.user.userRecipes.push(this.recipe)
                this.$router.push('/my-recipes')
                console.log(data.user.userRecipes)
            }
        }
    }
   
</script>
<style></style>