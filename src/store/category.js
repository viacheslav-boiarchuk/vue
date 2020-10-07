import firebase from 'firebase/app';

export default {
    actions: {
        async createCategory({ commit, dispatch }, { title, limit }) {
            try {
                const uid = await dispatch('getUid');
                const category = await firebase.database().ref(`/${uid}/categories`).push({ title, limit });
                return { title, limit, id: category.key };
            } catch (e) {
                commit('setError', e);
                throw Error(e);
            }
        },
        async fetchCategories({ commit, dispatch }) {
            try {
                const uid = await dispatch('getUid');
                const category = await firebase.database().ref(`/${uid}/categories`);
                return category.repo.app.options;
            } catch (e) {
                commit('setError', e);
                throw Error(e);
            }
        },
    },
};
