<template>
    <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <a href="#" @click.prevent="$emit('togglesidebar')">
                    <i class="material-icons black-text">dehaze</i>
                </a>
                <span class="black-text">current second from Date: {{modifyDate}}</span>
            </div>

            <ul class="right hide-on-small-and-down">
                <li>
                    <a
                        class="dropdown-trigger black-text"
                        href="#"
                        data-target="dropdown"
                        ref="dropdownToggleLink"
                    >
                        Welcome, {{ name }}
                        <i class="material-icons right">arrow_drop_down</i>
                    </a>

                    <ul id='dropdown' class='dropdown-content'>
                        <li>
                            <router-link to="/profile" class="black-text">
                                <i class="material-icons">account_circle</i>Профиль
                            </router-link>
                        </li>
                        <li class="divider" tabindex="-1"></li>
                        <li>
                            <a href="#" class="black-text" @click.prevent="logout">
                                <i class="material-icons">assignment_return</i>Выйти
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import M from 'materialize-css';

export default {
    /* свойство срабатывает когда ДОМ-дерево уже готово */
    mounted() {
        this.interval = setInterval(() => {
            this.date = new Date();
        }, 1000);
        this.dropdownVal = M.Dropdown.init(this.$refs.dropdownToggleLink, {
            constrainWidth: true,
        });
    },
    unmounted() {
        clearInterval(this.interval);
        /**
         * данная проверка нужна потому что иногда компонент грузиться или удаляется слишком
         * быстро и для того чтоб удалить очистить переменную, нужно вначале проверить,
         * а заинициализировалась ли она вообще */
        if (this.dropdownVal && this.dropdownVal.destroy) {
            this.dropdownVal.destroy();
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/login?message=logout');
        },
    },
    data: () => ({
        date: new Date(),
        interval: null,
        dropdownVal: null,
    }),
    computed: {
        modifyDate() {
            return this.date.getSeconds();
        },
        name() {
            const { info } = this.$store.getters;
            if (!info) {
                return 'Vasya';
            }
            return info.name;
        },
    },
};
</script>
