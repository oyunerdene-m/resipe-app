<template>
    <div>
        <router-link to="/">Home</router-link>
        <div class="favorite_list">
            <div class="favorites">
                <h2>Favorite recipes</h2>
                <ul>
                    <favorite-item v-for="favorite in favorites" :favorite="favorite" :onRemoveFromFavorites="removeFromFavorites"></favorite-item >
                </ul>
            </div>
            <div class="detail">
                <favorite-detail></favorite-detail>
            </div>
        </div>
    </div>  
</template>

<script>
    import FavoriteItem from './FavoriteItem.vue'
    import FavoriteDetail from './FavoriteDetail.vue';
    import {db} from '../../../main'
    import firebase from 'firebase';

    export default {
        data: function(){
            return {
                favorites: [],
                favoritesIds:[],
                recipes: [],
                currentUserId: this.$route.params.userId
            }
        },

        components : {
            favoriteItem: FavoriteItem,
            favoriteDetail: FavoriteDetail
        },

        created(){
            db.collection('recipes').get().then(querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    let recipe = doc.data();
                    recipe.id = doc.id;
                    this.recipes.push(recipe)
                })
            })

            const userRef = db.collection('users').doc(this.currentUserId)
            userRef.get().then(snapshot=>{
               this.favoritesIds = snapshot.data().favoritesIds || [];
               this.favorites = this.recipes.filter((recipe) => this.favoritesIds.includes(recipe.id));
            })
        },
        methods: {
            removeFromFavorites(id){
                const userRef = db.collection('users').doc(this.currentUserId)
                userRef.update({
                    favoritesIds: firebase.firestore.FieldValue.arrayRemove(id)
                }).then(()=>{
                    console.log("Updated successfully");
                    window.location.reload()
                }).catch(error=>{
                    console.log("Updating error", error)
                })
            }
        }
    }
</script>

<style scoped>
    .favorite_list {
        border: 1px solid blue;
        display: flex
    }

    .favorites {
        width: 40%;
    }

    .detail {
        width: 60%;
    }
</style>