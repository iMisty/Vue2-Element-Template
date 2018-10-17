<template>
  <div id="app">
    <div>
      <input type="text" v-model="inputValue"/>
      <button class="btn btn-primary" @click="handleSubmit">提交</button>
    </div>
    <ul>
      <todo-item 
        v-for="(item,index) of list"
        :content="item"
        :key="index"
        :index="index"
        @delete="handleDelete"
      ></todo-item>
    </ul>
  </div>  
</template>

<script>
import TodoItem from './components/Todoitem'
import bootstrap from 'bootstrap'

export default {
  components: {
    'todo-item': TodoItem
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
