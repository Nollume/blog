<template>
  <nav :class="menu ? 'hiddenNav' : ''">
    <RouterLink
      @click="closeNavigation"
      class="home-link"
      :to="{ name: 'home' }"
      >Home</RouterLink
    >
    <RouterLink @click="closeNavigation" :to="{ name: 'about' }"
      >About</RouterLink
    >
    <RouterLink @click="closeNavigation" :to="{ name: 'blog' }"
      >Blog</RouterLink
    >
    <RouterLink @click="closeNavigation" :to="{ name: 'contact' }"
      >Contact</RouterLink
    >
    <CloseIcon @click="closeNavigation" class="close-menu" />
  </nav>
</template>

<script setup lang="ts">
import CloseIcon from "@/components/icons/CloseIcon.vue";
defineProps<{ menu: boolean }>();
const emits = defineEmits(["closeNav"]);

const closeNavigation = () => emits("closeNav", true);
</script>

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

  .close-menu {
    display: none;
  }
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
.hiddenNav {
  display: flex;
}
@media (max-width: 64rem) {
  nav {
    flex-direction: column;
    justify-content: center;

    position: fixed;
    inset: 0;
    z-index: 50;

    margin-right: 0;

    background-color: $bg-color;
    .close-menu {
      display: inline-block;
      cursor: pointer;

      position: absolute;
      top: 1rem;
      right: 0;
      padding-inline: clamp(1rem, 2.5vw, 3rem);
    }
  }
  .hiddenNav {
    display: none;
  }
}
</style>
