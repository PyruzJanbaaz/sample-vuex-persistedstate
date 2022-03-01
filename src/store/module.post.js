import axios from "axios";

export default {
    namespaced: true,
    state: {
        post: {},
        postId: 0
    },
    mutations: {
        SAVE_POST(state, _posts) {
            state.post = _posts;
        },
        SET_POST_ID(state, _postId) {
            state.postId = _postId;
        }
    },
    actions: {
        loadPostById({commit}, postId) {
            axios.get('http://jsonplaceholder.typicode.com/posts/' + postId).then(result => {
                commit('SET_POST_ID', postId);
                commit('SAVE_POST', result.data);
            }).catch(error => {
                commit('SET_POST_ID', '[' + error.response.status + '] ' + error.response.statusText);
            });
        }
    },
    getters: {
        post: state => state.post,
        postId: state => state.postId,
    }
}