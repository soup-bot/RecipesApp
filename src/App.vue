<script setup>
import {RouterView} from "vue-router"
import Nav from "./components/Nav.vue"


</script>

<template>
  <body>
<div>
  <Nav></Nav>
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
    <component :is="Component"></component>
    </transition>
  </router-view>
</div>
</body>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap');
*{
  font-family: 'DM Sans', sans-serif;;
}
.fade-enter-from, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity 0.3s ease-out;
}

</style>