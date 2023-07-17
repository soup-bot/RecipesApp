import { createRouter, createWebHistory } from 'vue-router';
import RecipeView from '../views/RecipeView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView,
  },
  {
    path: '/:idMeal',
    name: 'recipe-view',
    component: RecipeView,
  }
 
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;