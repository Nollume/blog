<template>
  <nav>
    <RouterLink class="home-link" :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'blog' }">Blog</RouterLink>
    <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/assets/css/var";
.router-link-exact-active {
  &::before {
    transform: scaleX(100%);
  }
}
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

    position: relative;

    &:is(:hover, :active) {
      &::before {
        transform: scaleX(100%);
      }
    }
  }
  a::before {
    @extend %hoverPseudoElEffect;
    bottom: 0;
    left: 0;
    height: 0.125rem;
    width: 100%;
  }
}
.home-link {
  padding-right: 1.25rem;

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
