import Vue from 'vue'
import Vuex from 'vuex'


// default router permission control
import permission from './modules/permission'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        permission
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters
})
