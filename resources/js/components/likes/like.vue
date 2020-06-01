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
        created(){
            Echo.channel('likeChannel')
                .listen('LikeEvent', (e) => {
                    if(this.content.id == e.id){
                        if(e.type == 1){
                            this.count++;
                        }else{
                            this.count--;
                        }
                    }
                });
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