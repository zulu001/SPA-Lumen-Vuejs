/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import App from './layout/App.vue';

// Router Setup
import router from './routes/index';

new Vue({
    el: '#app',
    render: h => h(App),
    router
});