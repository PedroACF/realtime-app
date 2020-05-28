<template>
    <v-card class="mb-4">
        <v-card-title>
            <h3 class="headline mb-0">
                <router-link :to="data.path" style="text-decoration: none; color: inherit;">
                    {{data.title}}
                </router-link>
            </h3>
        </v-card-title>
        <v-card-subtitle>
            {{data.user}} said {{data.created_at}}
        </v-card-subtitle>
        <v-card-text>
            {{data.body}}
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "question",
        props: ['data']
    }
</script>

<style scoped>

</style>