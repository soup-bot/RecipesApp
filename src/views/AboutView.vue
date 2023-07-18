<template>
  <div class="deeznuts">
<h1>About us</h1>
  <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quia, tempore sed est consectetur qui. Repellendus earum aut voluptate magnam cum, debitis nobis porro quos. Veniam voluptatem at quae maiores odio id voluptatibus officiis provident quia odit, error atque eveniet eius consectetur natus exercitationem eaque quis, iste harum aut minima.</h2>
</div>
</template>

<style scoped>
h1{
  font-family: 'DM Serif Display', serif;
  font-weight: bold;
  color: black;
  font-size: 26px;
  margin-top: 30px;
}

h2{
  font-size: 20px;
  margin: auto;
  opacity: 0;
  /* margin: 60px 20px; */
  max-width: 500px;
  text-align: center;
  animation: slideIn 1s ease-in-out forwards;

}

.deeznuts{
  animation: slideIn 1s ease-in-out forwards;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes slideIn {
  0% {
    margin-top: 100vh; /* Start offscreen */
    opacity: 0;
  }
  100% {
    margin-top: 40px; /* Slide in position */
    opacity: 1;
  }
}
</style>