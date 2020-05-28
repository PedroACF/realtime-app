<template>
    <div>
        <vue-simplemde v-model="form.body" ref="markdownEdit" />
        <v-card-actions>
            <v-btn icon small @click="update">
                <v-icon color="orange">mdi-pencil</v-icon>
            </v-btn>

            <v-btn icon small @click="cancel">
                <v-icon>mdi-cancel</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    import VueSimplemde from 'vue-simplemde';

    export default {
        name: "editReply",
        props: ['reply'],
        data(){
            return {
                form: {
                    body: this.reply.reply
                }
            };
        },
        components: {
            VueSimplemde
        },
        methods: {
            update(){
                axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, this.form)
                    .then(res=>{
                        this.reply.reply = this.form.body;
                        this.cancel()
                    });
            },
            cancel(){
                EventBus.$emit('cancelEditing');
            }
        }
    }
</script>

<style scoped>

</style>