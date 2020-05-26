<template>
    <div>
        <v-app-bar
                color="deep-purple accent-4"
                dense
                dark
        >
            <v-toolbar-title>Realtime App</v-toolbar-title>

            <v-spacer></v-spacer>

            <div>
                <router-link to="/forum" style="text-decoration: none">
                    <v-btn text>Forum</v-btn>
                </router-link>
                <router-link style="text-decoration: none">
                    <v-btn text>Ask questions</v-btn>
                </router-link>
                <router-link style="text-decoration: none">
                    <v-btn text>Categories</v-btn>
                </router-link>
                <router-link to="/login" style="text-decoration: none">
                    <v-btn text>Login</v-btn>
                </router-link>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>

</style>