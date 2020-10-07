import firebase from 'firebase/app';

export default {
    state: {
        autoData: {},
    },
    actions: {
        /*
        * { email,password } это payload
        * */
        async login({ dispatch, commit }, { email, password }) {
            console.log(dispatch, commit);
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (e) {
                throw new Error(e);
            }
        },
        getUid() {
          const user = firebase.auth().currentUser;
          return user ? user.uid : null;
        },
        async logout({ commit }) {
            await firebase.auth().signOut();
            /**
             * вызываем мутацию которая чистить наш state
             * */
            commit('clearInfo');
        },
    },
};
