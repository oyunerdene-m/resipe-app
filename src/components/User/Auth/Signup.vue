<template>
    <div>
        <h2>Sign up</h2>
      <form @submit.prevent="registerUser">
        <div class="form_input">
            <label>Name</label>
            <input v-model="user.name" type="text"/>
        </div>
        <div class="form_input">
            <label>Email</label>
            <input v-model="user.email" type="email">
        </div>
        <div class="form_input">
            <label>Password</label>
            <input v-model="user.password" type="password">
        </div>
        <button>SignUp</button>
      </form>
    </div>
</template>
<script>
    import firebase from "firebase";

    export default {
        data: function(){
            return {
                user: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },

        methods: {
            registerUser(){
                firebase
                .auth()
                .createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then((res) => {
                    res.user
                    .updateProfile({
                        displayName: this.user.name
                    })
                    .then(() => {
                        this.$router.push('/login')
                    });
                })
                .catch((error) => {
                    alert(error.message);
                });
            }
        },
    }
</script>
<style>
    .form_input {
        margin-bottom: 10px;
    }
    button {
        cursor: pointer;
    }
</style>