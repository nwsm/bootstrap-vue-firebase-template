<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h2>{{content}}</h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Main',
  data () {
    return {
      content: 'App Content'
    }
  },
  methods: {

  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
