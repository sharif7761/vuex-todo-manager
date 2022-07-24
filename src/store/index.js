import Vuex from 'vuex';
import { createStore } from 'vuex-extensions';
import todos from "./modules/todos";

const store = createStore(Vuex.Store, {
    modules: {
        todos: todos,
    },

})

export default store;