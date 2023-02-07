<template>
    <div>
        <router-link to="/">Home</router-link>
        <div class="favorite_list">
            <div class="favorites">
                <h2>Favorite recipes</h2>
                <ul>
                    <favorite-item v-for="favorite in favorites" :favorite="favorite"></favorite-item >
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
    import {eventBus} from '../../../main'
    import {db} from '../../../main'
    import data from '../../../lib/data';
    import {getFavorites} from '../../../lib/getFavorites';

    export default {
        data: function(){
            return {
                favorites: [],
                favoritesIds:[],
                recipes: [],
                currentUserId: this.$route.params.userId
                //getFavorites(data.recipes,  data.user.favoritesIds)
            }
        },

        components : {
            favoriteItem: FavoriteItem,
            favoriteDetail: FavoriteDetail
        },

        created(){
            eventBus.$on('removedFromFavorites', id => {
                data.user.favoritesIds = data.user.favoritesIds.filter(favoritesId=> favoritesId !== id);
                this.favorites = this.favorites.filter(favorite=> favorite.id !== id)
            })

            db.collection('recipes').get().then(querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    let recipe = doc.data();
                    recipe.id = doc.id;
                    this.recipes.push(recipe)
                })
            })

            const userFavotitesRef = db.collection('users').doc(this.currentUserId)
            userFavotitesRef.get().then(snapshot=>{
               this.favoritesIds = snapshot.data().favoritesIds||[];
               console.log("ids in",  this.favoritesIds, this.favoritesIds.length);
               this.favorites = this.recipes.filter((recipe) => this.favoritesIds.includes(recipe.id));
            })
            console.log("ids",  this.favoritesIds, this.favoritesIds.length);
            console.log("resipes",  this.recipes, this.recipes.length);


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