<script setup>
import {RouterLink} from "vue-router"

</script>

<template>
  <div class="navbar">
  <router-link active-class="active" to="/">Home</router-link>
  <img class="logo" src="../assets/icon.svg" alt="">
   <a href="#">About</a>
  </div>
</template>

<style scoped>
.navbar{
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
.logo{
  width: 50px;
}
*{
  text-decoration: none;
  color: black;
  font-weight: bold;

}

</style>