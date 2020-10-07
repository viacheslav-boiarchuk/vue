<template>
    <!-- свойство component нужно чтоб рендерить layout, в то время как  -->
    <!-- router-view рендерит сам компонент -->
    <component :is="layout">
        <!-- vue с помощью router-view рендерит все компоненты которые загружаются по route-->
        <router-view/>
    </component>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout.vue';
import MainLayout from './layouts/MainLayout.vue';

export default {
    computed: {
        layout() {
            return `${this.$route.meta.customLayout || 'empty'}-layout`;
        },
    },
    components: {
        EmptyLayout,
        MainLayout,
    },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
