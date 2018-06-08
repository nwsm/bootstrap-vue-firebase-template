<template>
  <div id="app">
<b-navbar toggleable="md" type="dark" variant="primary">

  <b-navbar-brand>Project Name</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto" v-if="currentUser">

      <b-nav-item-dropdown :text="currentUser.email" right>
        <b-dropdown-item v-on:click="logout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <br>
    <router-view/>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',
  methods: {
    logout: function(){
      firebase.auth().signOut();
      this.$router.replace('Login')
    }
  },
  computed: {
    currentUser: function(){
      return firebase.auth().currentUser;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
