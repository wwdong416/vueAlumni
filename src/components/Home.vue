<template>

  <div>
    <mt-header title="首页"></mt-header>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      if (this.inputValue === '') {
        return
      }
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    handleDelete (index) {
      console.log(index)
      this.list.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
