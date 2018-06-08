import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'

import Main from '@/components/Main'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        requiresAuth: true  //remove to allow anonymous entry
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

router.beforeEach((to,from,next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next('/Login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }

})
export default router;
