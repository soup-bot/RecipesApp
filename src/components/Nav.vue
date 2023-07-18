<script setup>
import {RouterLink} from "vue-router"

</script>

<template>
  <div class="nav-container">
  <div class="navbar">
  <router-link active-class="active" to="/">Home</router-link>
  <img class="logo" src="../assets/icon.svg" alt="">
  <router-link active-class="active" to="/about">About</router-link>
  </div>
</div>
</template>

<style scoped>
.navcontainer{
  margin: 500px;
}
.navbar{
  display: flex;
  position: sticky;
  width: 100vw;

  justify-content: space-around;
  padding: 20px;
  background-image: none;
}
.logo{
  width: 70px;
}
*{
  font-size: 25px;
  text-decoration: none;
  color: black;
  font-weight: bold;

}
a{
  position: relative;
  text-decoration: none;
  padding: 0 1px;
  color: rgba(0, 0, 0, 0.412);
}
a::after{
  content:"";
  position: absolute;
  background-color: black;
  width: 0;
  height: 5px;
  left: 0;
  bottom: 45px;
  transition: 0.3s;
}
a:hover:after{
width: 100%;
}
.active{
  color: black;
}

</style>