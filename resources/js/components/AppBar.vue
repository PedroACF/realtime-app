<template>
    <div>
        <v-app-bar
                color="deep-purple accent-4"
                dense
                dark
        >
            <v-toolbar-title>Realtime App</v-toolbar-title>
            <v-spacer></v-spacer>
            <app-notification v-if="loggedIn"></app-notification>
            <div>
                <router-link v-for="item in items" :key="item.title"
                             :to="item.to" style="text-decoration: none"
                v-if="item.show"
                >
                    <v-btn text>{{item.title}}</v-btn>
                </router-link>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
    import AppNotification from './AppNotification';
    export default {
        name: "Toolbar",
        components:{
            AppNotification
        },
        data(){
            return {
                items: [
                    {title: 'Forum', to: '/forum', show: true},
                    {title: 'Ask Question', to: '/ask', show: User.loggedIn()},
                    {title: 'Categories', to: '/category', show: User.admin()},
                    {title: 'LogIn', to: '/login', show: !User.loggedIn()},
                    {title: 'LogOut', to: '/logout', show: User.loggedIn()},
                ],
                loggedIn: User.loggedIn()
            };
        },
        created(){
            EventBus.$on('logout', ()=>{
                User.logOut();
            });
        }
    }
</script>

<style scoped>

</style>