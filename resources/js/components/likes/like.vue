<template>
    <div>
        <v-btn icon @click="likedIt">
            <v-icon :color="color">mdi-thumb-up</v-icon>  {{count}}
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "like",
        props: ["content"],
        data(){
            return {
                liked: this.content.liked,
                count: this.content.like_count
            }
        },
        computed: {
            color(){
                return (this.liked)? 'red': 'red lighten-4'
            }
        },
        methods: {
            likedIt(){
                if(User.loggedIn()){
                    this.liked? this.decr(): this.incr();
                    this.liked = !this.liked;
                }
            },
            incr(){
                axios.post(`/api/like/${this.content.id}`)
                    .then(res=>this.count++);
            },
            decr(){
                axios.delete(`/api/like/${this.content.id}`)
                    .then(res=>this.count--);
            }
        }
    }
</script>

<style scoped>

</style>