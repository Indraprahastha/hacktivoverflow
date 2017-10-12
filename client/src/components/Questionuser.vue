<template>
  <div class="container">

    <div v-if="cat!=null">

      <div v-for="question in questionuser">

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

    <div class="note" v-else>
      <h4><b>Anda belum memiliki Question</b></h4>
    </div>
    <!-- <a href="#" class="list-group-item" v-for="artikel in artikel" v-if>
      <h5><b>{{artikel.judul}}</b></h5>
      <p>{{artikel.pertanyaan}}</p>
    </a> -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Questionuser',
  // props: ['artikel'],
  data () {
    return {
      cat: localStorage.getItem('token')
    }
  },
  computed: {
    ...mapState([
      'questionuser'
    ])
  },
  methods: {
    ...mapActions([
      'dapatkanQuestionUser'
    ])
  },
  created () {
    // dijalankan ketika pertamakali komponen di load
    this.dapatkanQuestionUser()
    console.log(this.cat)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.load {
  padding-top: 10px;
  padding-bottom: 10px;
}
/*.note {
  padding-top: 50px;
}*/
</style>
