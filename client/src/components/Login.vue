<template>
  <div class="hello">
    <div class="container">
      <div class="kiri col-sm-6">
        <form class="form-inline">
          <input type="text" class="form-control" v-model="username" placeholder="Input Username">
          <input type="text" class="form-control" v-model="password" placeholder="Input Password">
          <div class="button">
            <button class="btn btn-primary btn-sm" type="button" @click="masuk" data-dismiss="modal">Login</button>
          </div>
        </form>
      </div>
      <div class="kanan col-sm-6">

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    masuk: function () {
      axios.post('http://localhost:3000/user/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        console.log('token', response.data)
        localStorage.setItem('token', response.data)
      })
    }
  }
  // created () {
  //
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #000000;
}
.kiri {
  background-color: rgba(255, 0, 0, 0.7);
  border-radius: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.form-control {
  width: 70%;
  margin-bottom: 5px;
}
.form-inline {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
