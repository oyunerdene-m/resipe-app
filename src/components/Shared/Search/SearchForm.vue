<template>
    <form @submit.prevent="searchMeal">
        <input type="text" placeholder="Search..." v-model="searchInput">
    </form>
</template>
<script>
    import data from '../../../lib/data';
    import { eventBus } from '../../../main';
    export default {
        data: function(){
            return {
                searchInput: '',
            }
        },
        methods: {
            searchMeal(){
                const filtered = data.recipes.filter(recipe=> {
                    if(recipe.name.toLowerCase().includes(this.searchInput.toLowerCase()) || recipe.description.toLowerCase().includes(this.searchInput.toLowerCase()) || recipe.instruction.toLowerCase().includes(this.searchInput.toLowerCase()) || recipe.ingredients.toLowerCase().includes(this.searchInput.toLowerCase())) {
                        return recipe
                    } 
                })
                eventBus.$emit('filtered', filtered)
            }
        }
    }
</script>
<style></style>