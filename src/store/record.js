import firebase from 'firebase/app';

export default {
    actions: {
        async createRecord({ commit, dispatch }, record) {
            try {
                const uid = await dispatch('getUid');
                return await firebase.database().ref(`/${uid}/records`).push(record);
            } catch (e) {
                commit('setError', e);
                throw Error(e);
            }
        },
        async fetchRecords() {
            return {
                info: 300,
                id: 12478345935,
            };
        },
    },
};
