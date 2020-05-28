<template>
    <div class="mt-3">
        <vue-simplemde v-model="form.body" ref="markdownEditor" />
        <v-btn color="green" dark @click="submit">
            Reply
        </v-btn>
    </div>
</template>

<script>
    import VueSimplemde from 'vue-simplemde';
    export default{
        name: 'NewReply',
        props: ['questionSlug'],
        data(){
            return {
                form: {}
            };
        },
        components: {
            VueSimplemde
        },
        methods: {
            submit(){
                const self = this;
                axios.post(`/api/question/${this.questionSlug}/reply`, self.form)
                    .then(res=>{
                        self.form = {};
                        EventBus.$emit('newReply', res.data.reply);
                        window.scrollTo(0, 0);
                    });
            }
        }
    }
</script>