<template>
  <div class="container">
    <div v-for="question in questionuserall">
      <div class="load">
        <a href="#" class="list-group-item" >
          <div class="col-md-6">
            <h5><b>{{question.judul}}</b></h5>
          </div>
          <div class="">
            <p>{{question.iduser[0].username}}</p>
            <p>{{question.iduser[0]._id}}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Questionall',
  // props: ['artikel'],
  data () {
    return {
      cat: localStorage.getItem('token')
    }
  },
  computed: {
    ...mapState([
      'questionuserall'
    ])
  },
  methods: {
    ...mapActions([
      'dapatkanQuestionAll'
    ])
  },
  created () {
    // dijalankan ketika pertamakali komponen di load
    this.dapatkanQuestionAll()
    console.log(this.cat)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.note {
  padding-top: 50px;
}*/
.load {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
