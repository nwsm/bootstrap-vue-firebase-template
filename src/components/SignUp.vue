<template>
  <div>
    <h3>Create new account</h3>
    <b-container>
      <b-form @submit="signUpWithEmail">
        <b-row>
          <b-col>
            <b-input-group prepend="Username">
              <b-form-input id="inputEmail"
                            type="email"
                            v-model="form.email"
                            required>
              </b-form-input>
            </b-input-group>
          </b-col>
          <b-col>
            <b-input-group prepend="Password">
              <b-form-input id="inputPassword"
                            type="password"
                            v-model="form.password"
                            required>
              </b-form-input>
            </b-input-group>
          </b-col>
          <b-col cols="2">
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>or go back to <router-link to="Login">login</router-link>.</p>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'SignUp',
    data: function() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      signUpWithEmail: function() {
        firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).then(
          (user) => {
            this.$router.replace('/')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    },
    mounted: function() {
      if(firebase.auth().currentUser){
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped>
p {
  padding: 1em;
  font-size: 13px;
}
h3 {
  padding: 1em;
}
</style>
