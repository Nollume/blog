<template>
  <nav>
    <RouterLink class="home-link" to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/about">Blog</RouterLink>
    <RouterLink to="/about">Contact</RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/assets/css/var";
nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-right: 14%;

  text-transform: uppercase;

  a {
    color: $text-color;
    text-decoration: none;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
  }
}
.home-link {
  padding-right: 1.25rem;

  position: relative;

  &::after {
    content: "";

    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    width: 0;
    height: 0;

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid $text-color;
  }
}
</style>
