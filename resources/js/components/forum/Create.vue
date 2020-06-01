<template>
    <v-container>
        <v-form @submit.prevent="create">
            <v-text-field
                    v-model="form.title"
                    label="Title"
                    type="text"
                    required
                    :error-messages="errors.title"
            ></v-text-field>

            <v-select
            :items="categories"
            v-model="form.category_id"
            item-text="name"
            item-value="id"
            label="Category"
            autocomplete
            :error-messages="errors.category_id"
            ></v-select>

            <vue-simplemde v-model="form.body" ref="markdownEditor" :error-messages="errors.body"/>

            <v-btn color="green" type="submit">
                Submit
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
    import VueSimplemde from 'vue-simplemde';

    export default {
        name: "Create",
        components: {
            VueSimplemde
        },
        data(){
            return {
                form: {},
                categories: [],
                errors: {}
            }
        },
        created(){
            axios.get('/api/category')
                .then(res=>this.categories=res.data.data);
        },
        methods: {
            create(){
                const self = this;
                axios.post('/api/question', this.form)
                    .then(res=>this.$router.push(res.data.path))
                    .catch(err=>{
                        const {response: {data}={}} = err;
                        const {errors} = data;
                        self.errors = errors;
                    });
            }
        }
    }
</script>

<style scoped>
</style>