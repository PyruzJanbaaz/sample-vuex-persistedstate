import axios from "axios";

export default {
    namespaced: true,
    state: {
        todoList: [],
        todoId: 0
    },
    mutations: {
        SAVE_TODO_LIST(state, _todoList) {
            state.todoList = _todoList;
        },
        SET_TODO_ID(state, _todoId) {
            state.todoId = _todoId;
        }
    },
    actions: {
        loadTodoList({commit}, todoId) {
            axios.get('https://jsonplaceholder.typicode.com/todos/' + todoId).then(result => {
                commit('SET_TODO_ID', todoId);
                commit('SAVE_TODO_LIST', result.data);
            }).catch(error => {
                commit('SAVE_TODO_LIST', '[' + error.response.status + '] ' + error.response.statusText);
            });
        }
    },
    getters: {
        todoList: state => state.todoList,
        todoId: state => state.todoId,
    }
}