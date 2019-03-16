<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <test></test>
    <h2>hello {{name}}</h2>
  </div>
</template>

<script>
import test from '@/components/HelloWorld'
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  components: {
    test
  },
  computed: {
    ...mapState({
      name: state => state.common.name,
      age: state => state.common.age,
      number: state => state.common.number
    })
  },
  data () {
    return {
      msg: 'Welcome to page1'
    }
  },
  mounted () {
    this.$store.on('test', (data1, data2) => {
      console.log('test', data1, data2)
    })
  }
}
</script>

<style>
</style>
