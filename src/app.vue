<template>
  <div id="app">
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>  
</template>

<script>
import header from './components/header'
import todo from './components/todo'
import TodoItem from './components/item'
import footer from './components/footer'

export default {
  components: {
    'Header': header,
    'todo-item': TodoItem,
    'Todo': todo,
    'Footer': footer
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
