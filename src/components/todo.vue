<template>
    <section class="wrap">
    <tabs 
        :filter="filter"
        :todos="todos"
        @toggle="toggleFilter"
        @clearAllCompleted="clearAllCompleted"
    />
    <input 
        type="text"
        class="input-value"
        autofocus="autofocus"
        placeholder="接下来要做什么?"
        @keyup.enter="addTodo"

        >   
    <item 
        :todo="todo"
        v-for="todo in filteredTodos"
        :key="todo.id"  
        @del="deleteTodo"  
    /> 
    </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id = 0;

export default {
    components: {
        Item,
        Tabs
    },
    data() {
        return{
            todos: [],
            filter: 'all'
        }
    },
    computed:{
        filteredTodos(){
            if(this.filter === 'all'){
                return this.todos
            }
            const completed = this.filter === 'completed'
            return this.todos.filter(todo => completed === todo.completed)
        }
    },
    methods: {
        addTodo(event) {
            this.todos.unshift({
                id: id++,
                content: event.target.value.trim(),
                completed: false
            })
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
        },
        toggleFilter(state){
            this.filter = state
        },
        clearAllCompleted(){
            this.todos = this.todos.filter(todo => !todo.completed)
        }
    }
}
</script>

<style scoped>
.todo-item{
    display: flex;
    align-content: baseline;
    justify-content: space-around;
    line-height: 30px;
    text-align: left;
    padding: 8px 0;
    width: 50%;
    margin: 0 auto;
}
.toggle{
    margin: auto 0;
    transform: translateY(-30%);
}
label{
    padding: 0 8px;
    line-height: 48px;
}
</style>
