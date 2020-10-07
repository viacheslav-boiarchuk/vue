import firebase from 'firebase/app';

export default {
    state: {
        info: {
            field: 600,
            bill: 799,
        },
    },
    mutations: {
        setInfo(state, info) {
            state.info = info;
        },
        clearInfo(state) {
            state.info = {};
        },
    },
    actions: {
        async fetchUserInfo({ dispatch, commit }) {
            try {
                const uid = await dispatch('getUid');
                const info = (await firebase.database().ref(`/${uid}`).once('value')).v;
                commit('setInfo', info);
            } catch (e) {
                this.$error('Что то не так!');
            }
        },
    },
    getters: {
        info: (state) => state.info,
    },
};
