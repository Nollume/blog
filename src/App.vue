<template>
  <div class="container">
    <header>
      <h1 @click="redirectHome">Logo</h1>
      <Navigation :menu="menu" @closeNav="menu = $event" />
      <MenuIcon @click="menu = false" class="menu-icon" />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
  <footer>&copy; 2022</footer>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import MenuIcon from "./components/icons/MenuIcon.vue";
import { ref } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

const redirectHome = () => router.push({ name: "home" });

const menu = ref(true);
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: 1.37rem;
  .menu-icon {
    display: none;
  }
}
h1 {
  color: $accent-color;

  text-transform: uppercase;
  text-decoration: underline wavy;

  user-select: none;
  cursor: pointer;

  font-size: clamp(1.15rem, 2.5vw, 2rem);

  margin: 0;
  padding-block: 0.5rem;
  padding-right: 2rem;
  padding-left: clamp(1rem, 2.5vw, 3rem);
}

footer {
  width: 100%;
  height: 3rem;
  padding-inline: 2rem;

  position: absolute;
  bottom: 0;

  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: $text-color;
  color: $bg-color;
}
@media (max-width: 64rem) {
  header {
    padding-block: 0.5rem;
    .menu-icon {
      display: inline-block;
      cursor: pointer;

      padding-right: clamp(1rem, 2.5vw, 3rem);
    }
  }
}
</style>
