<template>
  <strong class="text-center d-block mb-3">Get users by Id</strong>
  <input class="form-control" v-model="userId" name="userId" placeholder="Enter user id here...">
  <button @click="getUsers" class="btn btn-warning mt-2">Get Users!</button>
  <p class="mt-3">{{ this.$store.state.users }}</p>
</template>

<script>
export default {
  name: "CUsers",
  data() {
    return {
      userId: this.$store.state.userId
    }
  },
  methods: {
    getUsers() {
      this.$store.dispatch('loadUsers', this.userId , this.$store.state)
    }
  }
}
</script>

