// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import store from './store'
import config from './config'
Vue.config.productionTip = false

let app;

firebase.initializeApp(config.firebase)
firebase.auth().onAuthStateChanged(function(user) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      store,
      components: { App },
      router
    })
});
