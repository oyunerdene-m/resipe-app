<template>
  <div class="container">
    <div class="App">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import { eventBus} from './main';
    export default {
        data: function(){
            return {
                user: null
            }
        },
        created(){
            eventBus.$on("loggedInUser", data=>{
                this.user = data
            })
        }
    }
</script>