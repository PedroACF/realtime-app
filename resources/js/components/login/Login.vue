<template>
    <v-container>
        <v-form @submit.prevent="login">
            <v-text-field
                    v-model="form.username"
                    label="E-mail"
                    type="email"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    required
            ></v-text-field>

            <v-btn color="green" type="submit">
                Login
            </v-btn>
            <router-link to="/signup" style="text-decoration: none">
                <v-btn color="blue">Sign Up</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },
        created(){
            const self = this;
            if(User.loggedIn()){
                self.$router.push({name: 'forum'});
            }
        },
        methods: {
            login(){
                const self = this;
                User.login(self.form);
            }
        }
    }
</script>

<style scoped>

</style>