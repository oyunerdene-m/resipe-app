<template>
    <div>
        <h2>Login</h2>
      <form @submit.prevent="userLogin">
        <div class="form_input">
            <label>Email</label>
            <input v-model="user.email" type="email">
        </div>
        <div class="form_input">
            <label>Password</label>
            <input v-model="user.password" type="password">
        </div>
        <button>Login</button>
      </form>
        
    </div>
</template>
<script>
    import firebase from 'firebase';
    import { eventBus } from "../../../main";

    export default {
        data: function(){
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            userLogin(){
                firebase
                .auth()
                .signInWithEmailAndPassword(this.user.email, this.user.password)
                .then(() => {
                    this.$router.push('/home')
                    eventBus.$emit('loggedInUser', this.user)
                })
                .catch((error) => {
                alert(error.message);
                });
               
            },
            

        },
        
    }
</script>
<style></style>