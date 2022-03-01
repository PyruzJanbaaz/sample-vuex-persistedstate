import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import todoModule from '@/store/module.todo'
import postModule from '@/store/module.post'
import Cookies from 'js-cookie'
import SecureLS from 'secure-ls';

const secureLS = new SecureLS({isCompression: false});

export const store = createStore({
    modules: {
        todoModule, postModule
    },
    plugins: [
        createPersistedState({
            paths: ['todoModule'],
            storage: {
                getItem: key => secureLS.get(key),
                setItem: (key, value) => secureLS.set(key, value),
                removeItem: key => secureLS.remove(key)
            }
        }),
        createPersistedState({
            paths: ['postModule'],
            storage: {
                getItem: key => Cookies.get(key),
                setItem: (key, value) => Cookies.set(key, value, {expires: 3, secure: true}),
                removeItem: key => Cookies.remove(key)
            }
        }),
    ]
});