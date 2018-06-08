<template>
  <div class="login">
    <h3>Sign In</h3>
    <b-button v-on:click="signInWithGoogle" variant="primary">Sign In With Google</b-button>
    <p>or</p>
    <b-container>
      <b-form @submit="signInWithEmail">
        <b-row>
          <b-col>
            <b-input-group prepend="Email">
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
            <p><router-link to="/SignUp">Sign Up With Email</router-link></p>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'Login',
    data: function() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      signInWithGoogle: function() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider).then((result) => {
          this.user = result.user
        }).catch(err => alert(err))
      },
      signInWithEmail: function() {
        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(
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

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
p {
  padding: 1em;
  font-size: 13px;
}
h3 {
  padding: 1em;
}
</style>
