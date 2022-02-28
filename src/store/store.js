import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

export const store = createStore({
    plugins: [createPersistedState()],
    state: {
        users: [],
        userId: 0
    },
    mutations: {
        SAVE_USERS(state, _users) {
            state.users = _users;
        },
        SET_USER_ID(state, _userId) {
            state.userId = _userId;
        }
    },
    actions: {
        loadUsers({commit}, userId) {
            axios.get('https://jsonplaceholder.typicode.com/todos/' + userId).then(result => {
                commit('SET_USER_ID', userId);
                commit('SAVE_USERS', result.data);
            }).catch(error => {
                commit('SAVE_USERS', '[' + error.response.status + '] ' + error.response.statusText);
            });
        }
    },
    getters: {
        users: state => state.users,
        userId: state => state.userId,
    }
});