import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import config from './modules/config';
import resources from './modules/resources';

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
    modules: {
        config,
        resources
    },
    strict: debug
});