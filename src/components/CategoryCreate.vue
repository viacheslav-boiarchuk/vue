<template>
    <div class="col s12 m6">
        <div>
            <div class="page-subtitle">
                <h4>Создать</h4>
            </div>

            <form @submit.prevent="submitHandler">
                <div class="input-field">
                    <input
                        id="name"
                        type="text"
                        v-model="title"
                    >
                    <label for="name">Название</label>
                    <span class="helper-text invalid">Введите название</span>
                </div>

                <div class="input-field">
                    <input
                        id="limit"
                        type="number"
                        v-model.number="limit"
                    >
                    <label for="limit">Лимит</label>
                    <span class="helper-text invalid">Минимальная величина</span>
                </div>

                <button class="btn waves-effect waves-light" type="submit">
                    Создать
                    <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css';

export default {
    data: () => ({
        title: '', limit: 1,
    }),
    mounted() {
        /**
         * когда загружается страница то в инпуте сразу стоит и placeholder text и значение value
         * эта функция помогает убрать placeholder */
        M.updateTextFields();
    },
    methods: {
        async submitHandler() {
            try {
                const category = await this.$store.dispatch('createCategory', {
                    title: this.title,
                    limit: this.limit,
                });
                this.title = '';
                this.limit = 1;
                this.$message('Категория была создана');
                this.$emit('created', category);
            } catch (e) {
                this.$error('Что то не так!');
            }
        },
    },
};
</script>
