import { createApp } from 'vue';
import messagePlugin from '@/utils/message.plugin';
import firebase from 'firebase/app';
import velocityPlugin from 'velocity-vue';
import Loader from '@/components/app/Loader.vue';
import tooltipDirective from '@/directives/tooltip.directive';
// import localizeFilter from '@/filters/localize.filters';
import App from './App.vue';
import router from './router';
import store from './store';
import 'materialize-css/dist/js/materialize.min';

import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
    apiKey: 'AIzaSyDx9g0eA14Gdza2AMFA_ik3e1CoT5yZRDQ',
    authDomain: 'test-vue-project-092020.firebaseapp.com',
    databaseURL: 'https://test-vue-project-092020.firebaseio.com',
    projectId: 'test-vue-project-092020',
    storageBucket: 'test-vue-project-092020.appspot.com',
    messagingSenderId: '245899282863',
    appId: '1:245899282863:web:e515e279b448d3f30f475a',
    measurementId: 'G-4QH877S1CS',
});

let app;

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);
        app.use(velocityPlugin);
        app.use(messagePlugin);
        app.use(store);
        app.use(router);
        app.mount('#app');
        app.directive('mydirectivetooltip', tooltipDirective);
        // app.directive('localize', localizeFilter);
        app.component('Loader', Loader);
    }
});
