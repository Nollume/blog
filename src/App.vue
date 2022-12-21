<template>
  <div class="container">
    <header>
      <h1>Logo</h1>
      <Navigation />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<style scoped lang="scss">
@import "@/assets/css/var";
.container {
  max-width: 120rem;
  min-height: 100vh;

  margin: 0 auto;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: 1rem;
}
h1 {
  color: $accent-color;

  margin: 0;
  padding-block: 0.5rem;
  padding-right: 2rem;
  padding-left: clamp(1rem, 2.5vw, 3rem);
}
</style>
