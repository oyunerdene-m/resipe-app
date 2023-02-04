<template>
    <div>
        <router-link to="/home">Home</router-link>
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
    import data from '../../../lib/data';
    import {getFavorites} from '../../../lib/getFavorites';

    export default {
        data: function(){
            return {
                favorites: getFavorites(data.recipes,  data.user.favoritesIds)
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