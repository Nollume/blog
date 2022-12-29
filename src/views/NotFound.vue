<template>
  <div>
    <h2>404</h2>
    <p>
      Page <span>{{ path }}</span> not found
    </p>
    <button @click="redirectHome">Back Home</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const path = route.path;

const redirectHome = () => {
  router.push({ name: "home" });
};
</script>

<style scoped lang="scss">
@import "../assets/css/var";
div {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
h2 {
  font-size: clamp(2rem, 5vw, 5rem);
  margin: 0;
}
p {
  margin: 0;

  font-size: clamp(1.5rem, 5vw, 3rem);
}
span {
  color: $accent-color;
}
button {
  @extend %buttons;
  margin-top: 1.5rem;
  margin-bottom: 4.25rem;
  &::after {
    @extend %hoverPseudoElEffect;
    opacity: 0.5;
    inset: 0;
    z-index: -1;
  }
  &:is(:hover, :active) {
    &::after {
      transform: scaleX(100%);
    }
  }
}
</style>
