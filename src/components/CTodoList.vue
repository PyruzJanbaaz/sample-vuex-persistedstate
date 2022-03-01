<template>
  <strong class="text-center d-block">Get todo list by Id</strong>
  <pre class="text-center d-block ">
    Avoiding empty Vuex file after reload using
    <span class="text-danger text-uppercase fw-bold">Secure Local Storage</span> method!
  </pre>
  <label for="todoId">TodoId: </label>
  <input class="form-control" v-model="todoId" id="todoId" name="todoId" placeholder="Enter todo id here...">
  <div class="text-center">
    <button @click="getTodoList" class="btn btn-outline-success mt-2">Get todo list!</button>
    <p class="mt-3">{{ this.$store.state.todoModule.todoList }}</p>
  </div>
</template>

<script>

export default {
  name: "CTodoList",
  data() {
    return {
      todoId: this.$store.state.todoModule.todoId
    }
  },
  methods: {
    getTodoList() {
      this.$store.dispatch('todoModule/loadTodoList', this.todoId, this.$store.state.todoModule)
    }
  }
}
</script>

