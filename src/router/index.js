import { createRouter, createWebHashHistory } from 'vue-router';
import firebase from 'firebase/app';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            customLayout: 'main',
        },
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        /**
         * название customLayout может быть любое - можно было назвать
         * просто Layout или что то еще - ты сам можешь выбирать название
         * */
        meta: {
            customLayout: 'empty',
        },
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            customLayout: 'empty', auth: true,
        },
        /**
         * эта строчка нужна для lazy loading компонента
         * */
        component: () => import('../views/Register.vue'),
    },
    {
        path: '/details-record',
        name: 'Details Record',
        meta: {
            customLayout: 'main', auth: true,
        },
        component: () => import('../views/DetailsRecord.vue'),
    },
    {
        path: '/history',
        name: 'History',
        meta: {
            customLayout: 'main', auth: true,
        },
        component: () => import('../views/History.vue'),
    },
    {
        path: '/record',
        name: 'Record',
        meta: {
            customLayout: 'main', auth: true,
        },
        component: () => import('../views/Record.vue'),
    },
    {
        path: '/planning',
        name: 'Planning',
        meta: {
            customLayout: 'main', auth: true,
        },
        component: () => import('../views/Planning.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            customLayout: 'main', auth: true,
        },
        component: () => import('../views/Profile.vue'),
    },
    {
        path: '/categories',
        name: 'Categories',
        meta: {
            customLayout: 'main', auth: true,
        },
        component: () => import('../views/Categories.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

/**
 * метод вызывается перед каждой сменой роута
 *
 * to - куда
 * from - откуда
 * next - функция, запускаем если хотим продолжить выполнение редиректа на новый роут
 * */

router.beforeEach((to, from, next) => {
    const { currentUser } = firebase.auth();
    const requireAuth = to.matched.some((record) => record.meta.auth);
    console.log(currentUser);
    if (requireAuth && !currentUser) {
        next({
            path: '/login',
            query: {
                message: 'login',
            },
        });
    } else {
        next();
    }
});

export default router;
