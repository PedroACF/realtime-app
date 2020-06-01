<template>
    <div v-if="question">
        <edit-question v-if="editing" :data="question"></edit-question>
            <show-question :data="question" v-else></show-question>

        <v-container>
            <replies :question="question"></replies>

            <new-reply v-if="loggedIn" :questionSlug="question.slug"></new-reply>
            <router-link v-else to="/login">
                LogIn to Reply
            </router-link>
        </v-container>

    </div>

</template>

<script>
    import ShowQuestion from './ShowQuestion';
    import EditQuestion from './EditQuestion';
    import Replies from '../reply/replies';
    import NewReply from '../reply/newReply';
    export default {
        name: "Read",
        components: {
            ShowQuestion,
            EditQuestion,
            Replies,
            NewReply
        },
        data(){
            return {
                question: null,
                editing: false
            };
        },
        computed: {
            loggedIn(){
                return User.loggedIn();
            }
        },
        created(){
            this.listen();
            this.getQuestion();
        },
        methods: {
            listen(){
                EventBus.$on('startEditing', ()=>{
                    this.editing=true
                });
                EventBus.$on('cancelEditing', ()=>{
                    this.editing=false
                });
            },
            getQuestion(){
                axios.get(`/api/question/${this.$route.params.slug}`)
                    .then(res=>this.question=res.data.data);
            }
        }
    }
</script>

<style scoped>

</style>