<template>
    <div class="app-main-layout">
        <NavBar v-on:togglesidebar="isOpen = !isOpen"/>
        <Sidebar :isOpenParam="isOpen"/>
        <main class="app-content" :class="{full: !isOpen}">
            <div class="app-page">
                <router-view/>
            </div>
        </main>

        <div class="fixed-action-btn">
            <router-link class="btn-floating btn-large blue"
                         v-mydirectivetooltip="'Add new'" to="/record">
                <i class="large material-icons">add</i>
            </router-link>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/app/NavBar.vue';
import Sidebar from '@/components/app/Sidebar.vue';
import { mapGetters } from 'vuex';
import messages from '@/utils/messages';

export default {
    name: 'main-layout',
    components: {
        Sidebar,
        NavBar,
    },
    computed: {
        error() {
            return this.$store.getters.error;
        },
        ...mapGetters([
            'info',
        ]),
    },
    watch: {
        error(fbError) {
            this.$error(messages[fbError.code] || 'Что то не так!');
        },
    },
    /**
     * желательно делать все асинхронные запросы тут, html к этому времени уже отрендерился
     * */
    async mounted() {
        if (!Object.keys(this.info).length) {
            await this.$store.dispatch('fetchUserInfo');
        }
    },
    data: () => ({
        isOpen: true,
    }),
};
</script>
