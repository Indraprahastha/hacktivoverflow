<template>
  <div class="">
    <div class="hello">
      <Login/>
    </div>
    <div class="">
      <Questionall/>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Questionuser from '@/components/Questionuser'
import Questionall from '@/components/Questionall'
export default {
  name: 'Index',
  components: {
    Login,
    Questionuser,
    Questionall
  },
  data () {
    return {
      cat: localStorage.getItem('token')
    }
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
</style>
