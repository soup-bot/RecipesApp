<script setup>
import { ref, onMounted, watch } from 'vue';
import {RouterView} from "vue-router"
import axios from 'axios';

    const meals = ref([]);
    const search = ref("");
   
    const searchMeal = () => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
    .then(response => {
      meals.value = response.data.meals;
    })
    .catch(error => {
      console.error(error);
    });
};

onMounted(() => {
  searchMeal();
});

watch(search, () => {
  searchMeal();
});




</script>

<template>
  <body>
    
  
    <div class="search-container">
      <input v-model="search" type="text" placeholder="Search" class="searchbar">
    </div>
    <div class="page">
    <div class="cards-container">
    <router-link :to="`/${meal.idMeal}`" v-for="meal in meals" class="card" :key="meal.idMeal">
      <div><img class="img" :src="meal.strMealThumb" alt=""></div>
      <div class="meal-name">{{ meal.strMeal }}</div>
      <div class="meal-category">{{ meal.strCategory }}</div>
      <div class="meal-area">{{ meal.strArea }}</div>
      
    </router-link>
  </div>
</div>
</body>
</template>

<style scoped>

.page{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  vertical-align: top;
}

.card {
  text-decoration: none;
  color: black;
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  margin: 25px 15px;
  padding: 10px 10px;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  border-radius: 3%;
  box-shadow: 1px 1px 10px rgb(128, 128, 128, 0.2);
  transition: scale 0.2s;
  
}
.card:hover{
  scale: 1.05;
}

.card-image {
  
}

.img {
  width: 180px;
  object-fit: cover;
}

.meal-name {
  font-weight: bold;
  margin-top: 15px;
  font-size: 18px;
  margin-bottom: 10px;
}

.meal-area {
  color: #888;
  
  font-size: 12px;
 
}
.meal-category{
  font-size: 13px;
}
.searchbar{
  align-self: center;
  justify-self: center;
  text-align: center;
  min-width: 80%;
}
.body{
  display: flex;
  justify-content: center;
}
.search-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>