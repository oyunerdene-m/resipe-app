<template>
    <div class="container">
        <div>
            <h3>Welcome <span v-if="user">{{user.displayName}}</span></h3>
            <button>My recipe</button>
            <button>My favorites</button>

            <button 
                type="submit" 
                @click="logOut()">
                    Log out
            </button>
        </div>
        <div class="main_page">
            <app-recipes :recipes="recipes"></app-recipes>
            <recipe-detail></recipe-detail>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import Recipes from './Recipes/Recipes.vue'
    import RecipeDetail from './Recipes/RecipeDetail.vue'

    export default {

        components: {
            appRecipes: Recipes,
            recipeDetail: RecipeDetail
        },

        data: function(){
            return {
                user : null,
                recipes: [
                    {
                    id: 1, 
                    name: 'Buuz', 
                    description: "Mongolian traditional holiday food with meat and flour", 
                    image: 'https://mongolamerican.files.wordpress.com/2012/07/buuz_831.jpg',
                    instruction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
                    inredients: ['meat', 'flour', 'water', 'salt', 'onion']
                    },
                    {
                    id: 2, 
                    name: 'Pizza', 
                    description: "Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of vegetable and other ingredients", 
                    image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-1152x1536.jpg',
                    instruction:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
                    inredients: ['flour', 'water', 'salt', 'onion', 'olive', 'ham', 'cheese', 'mushrooms']
                    },
                    {
                    id: 3, 
                    name: 'Spagetti', 
                    description: "It is long like a string (hence the name, as spago means string) – round in cross-section and made from durum wheat semolina", 
                    image: 'https://www.endofthefork.com/wp-content/uploads/2021/06/1200x1200-pasta-and-sauce.jpg',
                    instruction:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
                    inredients: ['spaghetti', 'Parmesan cheese', 'olive oil', 'chopped tomatoes', 'onion', 'garlic', "fresh basil"]
                    }
                ]
            }
        },
        created() {
            firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            } else {
                this.user = null;
            }
            });
        },
        methods: {
            logOut() {
                firebase.auth().signOut().then(() => {
                    firebase.auth().onAuthStateChanged(() => {
                    this.$router.push('/login')
                    })
                })
            }
        }
    }
</script>

<style scoped>
   div.main_page {
        display: flex;
   }
</style>
