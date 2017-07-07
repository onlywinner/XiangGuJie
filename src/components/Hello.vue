<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <hr/>
    <button @click="savedata"></button>

    <ul>
      <li v-for="item in $stort.state.list" ref="inputValue"></li>
    </ul>

  </div>
</template>

<script>
import {mapGetters,mapAction} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  margin: 0 10px;
}

</style>
