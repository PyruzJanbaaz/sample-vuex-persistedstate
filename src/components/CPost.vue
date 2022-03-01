<template>
  <strong class="text-center d-block ">Get post by Id</strong>
  <small class="text-center d-block mb-3">
    Avoiding empty Vuex file after reload using <span class="text-danger text-uppercase fw-bold">cookie</span> method!
  </small>
  <label for="postId">PostId: </label>
  <input class="form-control" v-model="postId" id="postId" name="postId" placeholder="Enter post id here...">
  <div class="text-center">
    <button @click="getPostById" class="btn btn-outline-success mt-2">Get post!</button>
    <p class="mt-3">{{ this.$store.state.postModule.post }}</p>
  </div>
</template>

<script>
export default {
  name: "CPost",
  data() {
    return {
      postId: this.$store.state.postModule.postId
    }
  },
  methods: {
    getPostById() {
      this.$store.dispatch('postModule/loadPostById', this.postId, this.$store.state.postModule)
    }
  }
}
</script>

