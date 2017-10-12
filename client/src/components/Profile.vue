<template>
  <div class="">
    <div class="hello">
      <!-- <Login/> -->
      <div class="container">
        <div class="kiri col-sm-6">
          <h4>Selamat Datang,   " {{userprofile.username}} "</h4>
        </div>
        <div class="kanan col-sm-6">
          <h5>Dibawah adalah beberapa Question yang telah anda buat.</h5>
        </div>
      </div>




    </div>
    <div class="">
      <Questionuser/>
    </div>
  </div>
</template>

<script>
// import Login from '@/components/Login'
import { mapActions, mapState } from 'vuex'
import Questionuser from '@/components/Questionuser'
// import Questionall from '@/components/Questionall'
export default {
  name: 'Profile',
  components: {
    // Login,
    Questionuser
    // Questionall
  },
  data () {
    return {
      cat: localStorage.getItem('token')
    }
  },
  computed: {
    ...mapState([
      'userprofile'
    ])
  },
  methods: {
    ...mapActions([
      'dapatkanUser'
    ])
  },
  created () {
    // dijalankan ketika pertamakali komponen di load
    this.dapatkanUser()
    console.log(this.cat)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello {
  background-color: #000000;
}
.kiri, .kanan{
  color: #ffffff;
}
</style>
