// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

import Resources from "./components/Resources";
Vue.component("resources", Resources);
import Resource from "./components/Resource";
Vue.component("resource", Resource);

import store from './store/index';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: {App},
    template: '<App/>'
});
