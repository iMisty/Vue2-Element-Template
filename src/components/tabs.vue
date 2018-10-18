<template>
    <section class="helper">
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tabs">
            <button
                v-for="state in states"
                :key="state"
                :class="[state, filter === state ? 'actived' : '']"
                @click="toggleFilter(state)"
            >
                {{state}}
            </button>
        </span>
        <button class="clear" @click="clearAllCompleted">Clear Completed</button>
    </section>
</template>

<script>
export default {
    props: {
        filter: {
            type: String,
            required: true
        },
        todos: {
            type: Array,
            required: true
        }
    },
    computed:{
        unFinishedTodoLength(){
            return this.todos.filter(todo => !todo.completed).length
        }
    },
    data() {
        return {
            states: ['all','active','completed']
        }
    },
    methods: {
        clearAllCompleted(){
            this.$emit('clearAllCompleted')
        },
        toggleFilter(state){
            this.$emit('toggle', state)
        }
    }
}
</script>

<style scoped>
    button{
        height: 32px;
        width: 120px;
        line-height: 16px;
        padding: 8px;
        margin: 8px 0;
        background-color: transparent;
        border-radius: 20px;
    }
    .clear{
        width: 160px;
    }
    .destory{
        width: 40px;
    }
</style>
