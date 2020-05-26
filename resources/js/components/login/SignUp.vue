<template>
    <v-container>
        <v-form @submit.prevent="signup">
            <v-text-field
                    v-model="form.name"
                    label="Name"
                    type="text"
                    required
                    :error-messages="errors.name"
            ></v-text-field>

            <v-text-field
                    v-model="form.username"
                    label="E-mail"
                    type="email"
                    required
                    :error-messages="errors.username"
            ></v-text-field>

            <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    required
                    :error-messages="errors.password"
            ></v-text-field>

            <v-text-field
                    v-model="form.password_confirmation"
                    label="Password confirmation"
                    type="password"
                    required
                    :error-messages="errors.password_confirmation"
            ></v-text-field>

            <v-btn color="green" type="submit">
                Sign Up
            </v-btn>
            <router-link to="/login" style="text-decoration: none">
                <v-btn color="blue">Login</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "SignUp",
        data(){
            return {
                form: {

                },
                errors: {}
            }
        },
        created(){
            const self = this;
            if(User.loggedIn()){
                self.$router.push({name: 'forum'});
            }
        },
        methods: {
            signup(){
                const self = this;
                axios.post('api/register', self.form)
                    .then(res=>{
                        User.responseAfterLogin(res)
                    })
                    .catch(err=>{
                        const {response: {data}={}} = err;
                        const {errors} = data;
                        self.errors = errors;
                    });
            }
        }
    }
</script>

<style scoped>

</style>