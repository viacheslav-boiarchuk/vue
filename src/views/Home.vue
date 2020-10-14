<template>
    <div>

        <Loader v-if="loading"/>
        <div v-else>loader ig gone</div>
        <div class="page-title">
            <h3>Счет</h3>

            <button class="btn waves-effect waves-light btn-small">
                <i class="material-icons">refresh</i>
            </button>
        </div>

        <div class="row">
            <div class="col s12 m6 l4">
                <div class="card light-blue bill-card">
                    <div class="card-content white-text">
                        <span class="card-title">Счет в валюте</span>

                        <p class="currency-line">
                            <span>12.0 Р</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col s12 m6 l8">
                <div class="card orange darken-3 bill-card">
                    <div class="card-content white-text">
                        <div class="card-header">
                            <span class="card-title">Курс валют</span>
                        </div>
                        <HomeBill
                            :rates="currency.rates"/>
                        <Baseinput
                            v-model="username"
                            required
                            placeholder="Введите имя пользователя">
                            <template v-slot:header>
                                <h5>Здесь мог быть заголовок страницы</h5>
                            </template>
                            <template v-slot:footer="paramObj">
                                <p>Некая контактная информация ---> {{ paramObj.param.second }} </p>
                            </template>
                        </Baseinput>

                        <button v-on:click="show = !show">
                            Переключить
                        </button>
                        <transition name="fade">
                            <p v-if="show">привет</p>
                        </transition>
                        <Baselist />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeBill from '@/components/HomeBill.vue';
import Baseinput from '@/views/Baseinput.vue';
import Baselist from '@/views/Baselist.vue';

export default {
    data: () => ({
        loading: true,
        currency: [],
        show: true,
    }),
    async mounted() {
        this.currency = await this.$store.dispatch('fetchCurrency');
        this.loading = false;
    },
    components: {
        HomeBill, Baseinput, Baselist,
    },
};
</script>

<style scoped>
    .bill-card {
        height: 100% !important;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>
