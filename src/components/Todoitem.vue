<template>
    <li @click="handleDelete">
        {{ content }}
    </li>
</template>

<script>
export default {
    props: ['content','index'],
    methods: {
        handleDelete(){
            this.$emit('delete',this.index)
        }
    }
}
</script>

<style>
ul{
  list-style-type: none;
  padding: 4vh 0 0 0;
}
</style>
