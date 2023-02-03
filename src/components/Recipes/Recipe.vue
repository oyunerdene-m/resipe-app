<template>
    <li>
        <div> 
            <div>
                <img :src="recipe.image" alt="">
            </div>
            <div>
                <h3>{{ recipe.name }}</h3>
                <p>{{recipe.description}}</p>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        props: ['recipe']
    }
</script>

<style></style>