<template>
  <div class="hello">
    <h1>hello</h1>
  </div>
</template>

<script>

export default {
  mounted () {
    this.$store.$emit('test', 1, 3)
  }
}
</script>

<style>
</style>
