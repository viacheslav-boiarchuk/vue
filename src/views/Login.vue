<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input
                    id="email"
                    type="text"
                    v-model.trim="email"
                >
                <label for="email">Email</label>
                <small class="helper-text invalid">Email</small>
            </div>
            <div class="input-field">
                <input
                    id="password"
                    type="password"
                    v-model="password"
                >
                <label for="password">Пароль</label>
                <small class="helper-text invalid">Password</small>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
                >
                    Войти
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Нет аккаунта?
                <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';
import messages from '@/utils/messages';

export default {
    name: 'loginPage',
    data: () => ({
        password: '',
        email: '',
    }),
    validations: {
        password: { required, minLength: minLength(6) },
        email: { email, required },
    },
    mounted() {
        if (messages[this.$route.query.message]) {
            this.$message(messages[this.$route.query.message]);
        }
    },
    methods: {
        async submitHandler() {
            const formData = {
                email: 'test@test.com',
                password: '123456',
            };

            try {
                await this.$store.dispatch('login', formData);
                this.$router.push('/');
            } catch (e) {
                throw new Error(e);
            }
        },
    },
};
</script>
