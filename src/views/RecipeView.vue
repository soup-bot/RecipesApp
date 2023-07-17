<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const meal = ref(null);

onMounted(() => {
  fetchRecipeDetails(route.params.idMeal);
  console.log(route.params.idMeal);
});

const fetchRecipeDetails = async (mealId) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const meals = response.data.meals;
    console.log(meals);
    meal.value = meals[0];
    console.log(meal.value.strMeal);
  } catch (error) {
    console.error(error);
  }
};

const getIngredients = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(`${measure} ${ingredient}`);
    } else if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  return ingredients;
};

</script>

<template>
  <body class="recipebody">
    
  
  <div v-if="meal" class="container">
    <div class="meal-title">{{ meal.strMeal }}</div>
    <div class="meal-img-container">
      <img class="img" :src="meal.strMealThumb" alt="">
      
    <ul>
      <li v-for="ingredient in getIngredients(meal)" :key="ingredient">{{ ingredient }}</li>
    </ul>
    </div>
    <h4>Instructions</h4>
    <p class="instructions" >{{ meal.strInstructions }}</p>
    
  </div>
</body>
</template>

<style scoped>
h2 {
  font-size: 23px;
  font-weight: bold;
  color: black;
}
h4{
  font-size: 20px;
  font-weight: bold;
  font-family: 'DM Serif Display', serif;
  margin: auto;
  margin-bottom: 20px;
}
.meal-img-container {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  justify-content: space-between;
  box-shadow: 1px 1px 10px rgba(128, 128, 128, 0.3);
  padding: 30px 30px;
  border-radius: 5%;
  margin-bottom: 50px;

}

ul {
  list-style-type: disc;
  padding-left: 20px;
}
.container{
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  
}
.recipebody{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
ul, .meal-title, .meal-img-container, .ingredients{
  align-self: center;
  justify-self: center;
}
.meal-title{
  font-size: 38px;
  font-family: 'DM Serif Display', serif;
  font-weight: bold;
  margin-bottom: 30px;
}
.img{
  width: 300px;
  margin: 20px 40px;
  
}
.instructions{
  margin-bottom: 50px;
}
*{
  animation: fadeIn 0.3s;
} 
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>