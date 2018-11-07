<template>
  <div id="app">
    <vHeader/>
    <Todo/>
    <vFooter/>
  </div>  
</template>

<script>
import header from './components/header'
import todo from './components/todo'
import footer from './components/footer'

export default {
  components: {
    'vHeader': header,
    'Todo': todo,
    'vFooter': footer
  },
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit(){
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    handleDelete(index){
      this.list.splice(index,1)
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app{
  height: 100vh;
  text-align: center;
}
</style>
