<template>
  <div class="container">
    <header>
      <h1 @click="router.push({ name: 'home' })">Logo</h1>
      <Navigation />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>&copy; 2022</footer>
  </div>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
@import "@/assets/css/var";
.container {
  max-width: 120rem;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 0 auto;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: 1.37rem;
}
h1 {
  color: $accent-color;

  text-transform: uppercase;
  text-decoration: underline wavy;

  user-select: none;
  cursor: pointer;

  margin: 0;
  padding-block: 0.5rem;
  padding-right: 2rem;
  padding-left: clamp(1rem, 2.5vw, 3rem);
}
footer {
  width: 100%;
  height: 5rem;
  padding-inline: 2rem;

  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: $text-color;
  color: $bg-color;
}
</style>
