<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center pt-5">
        <img src="./assets/logo.png" alt="logo"/>
      </div>
      <div class="col-4"></div>
      <div class="col-4">
        <CUsers/>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
import CUsers from "@/components/CUsers";

export default {
  name: 'App',
  components: {
    CUsers
  }
}
</script>

<style scoped>
img{
  width: 4rem;
  border:0.1rem solid darkgray;
  border-radius: 5rem;
  padding: 0.2rem;
}
</style>
