<template>
    <div>
        <div class="page-title">
            <h3>Планирование</h3>
            <h4>{{ info.bill }}</h4>
        </div>

        <Loader v-if="loading"></Loader>
        <p class="center" v-else-if="!categories.length">Категорий пока что нет.
            <router-link to="/categories"
                         v-mydirectivetooltip="'Создать новую запись'">
                Добавить новую</router-link>
        </p>
        <section v-else>
            <div v-for="cat of categories" :key="cat.ID"  v-mydirectivetooltip="'Test!!'">
                <p>
                    <strong>{{ cat.title }}:</strong>
                    {{ cat.testId }} из {{ cat.limit }}
                </p>
                <div class="progress">
                    <div
                        class="determinate green"
                        :style="{ width: cat.testId*100/cat.limit+'%' }"
                    ></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: () => ({
       loading: true,
       categories: [],
    }),
    computed: {
        ...mapGetters(['info']),
    },
    async mounted() {
        const categories = await this.$store.dispatch('fetchCategories');
        this.categories = [{
            'messagingSenderId': categories.messagingSenderId,
            'testId': '1456',
            'limit': '10000',
            'ID': '5675675',
            'title': categories.measurementId,
        }];
        this.loading = false;
    },
};
</script>
