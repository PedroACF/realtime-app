<template>
    <v-card>
        <v-card-title>
            <div>
                <div class="headline">
                    {{data.title}}
                </div>
                <span class="grey--text">
                    {{data.user}} said {{data.created_at}}
                </span>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="teal">Replies</v-btn>
        </v-card-title>

        <v-card-text v-html="body">
        </v-card-text>

        <v-card-actions v-if="own">
            <v-btn icon small @click="edit">
                <v-icon color="orange">mdi-pencil</v-icon>
            </v-btn>

            <v-btn icon small @click="destroy">
                <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ShowQuestion",
        props: ["data"],
        data(){
            return {
                own: User.own(this.data.user_id)
            };
        },
        computed: {
            body(){
                return md.parse(this.data.body);
            }
        },
        methods: {
            destroy(){
                axios.delete(`/api/question/${this.data.slug}`)
                    .then(res => this.$router.push('/forum'));
            },
            edit(){
                EventBus.$emit('startEditing');
            }
        }
    }
</script>

<style scoped>

</style>