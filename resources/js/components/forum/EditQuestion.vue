<template>
    <v-container fluid>
        <v-card class="pa-4">
            <v-form @submit.prevent="update">
                <v-text-field
                        v-model="form.title"
                        label="Title"
                        type="text"
                        required
                ></v-text-field>

                <vue-simplemde v-model="form.body" ref="markdownEditor" />

                <v-card-actions>
                    <v-btn color="green" type="submit">
                        Submit
                    </v-btn>
                    <v-btn @click="cancel">
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
    import VueSimplemde from 'vue-simplemde';

    export default {
        name: "EditQuestion",
        props: ["data"],
        data(){
            return {
                form: {}
            }
        },
        components: {
            VueSimplemde
        },
        created(){
            this.form = this.data;
        },
        methods: {
            update(){
                axios.patch(`/api/question/${this.form.slug}`, this.form)
                    .then(res => this.cancel());
            },
            cancel(){
                EventBus.$emit('cancelEditing');
            }
        }
    }
</script>

<style scoped>

</style>