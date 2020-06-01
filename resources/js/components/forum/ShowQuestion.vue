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
            <v-btn color="teal" dark>{{replies_count}} Replies</v-btn>
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
                own: User.own(this.data.user_id),
                replies_count: this.data.replies_count
            };
        },
        created(){
            EventBus.$on('newReply', ()=>{
                this.replies_count++;
            });
            EventBus.$on('deleteReply', ()=>{
                this.replies_count--;
            });
            Echo.private('App.User.' + User.id())
                .notification((notification) => {
                    this.replies_count++;
                });
            Echo.channel('deleteReplyChannel')
                .listen('DeleteReplyEvent', (e)=>{
                    this.replies_count--;
                });
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
