<template>
  <Header />
  <Welcome />
  <Shapes />
</template>

<script lang="ts" setup>
import Header from "./components/Header.vue";
import Welcome from "./components/Welcome.vue";
import Shapes from "./components/Shapes.vue";
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border: 1px solid black; */
}

html {
  --clr-accent: #ff003e;
  --clr-accent-second: #00ba71;
  --clr-background: #ffd7e0;
  --clr-accent-dark: #680019;
  --clr-dark: #000000;

  --font-header: 'Jost', sans-serif;
}

::-webkit-scrollbar {
  background-color: transparent;
  width: .5rem;
  height: .5rem;
}

::-webkit-scrollbar-thumb {
  background-color: #ff003e;
  border-radius: 15px;
}

::selection {
  background-color: var(--clr-accent-dark);
  color: var(--clr-background);
}

html,
body {
  min-height: 100vh;
  width: 100%;
  background-color: var(--clr-background);
}

body {
  position: relative;
  max-width: 1920px;
  z-index: -2;
}

html {
  display: flex;
  justify-content: center;
}
</style>