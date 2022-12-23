<template>
  <div class="info">
    <slot name="headline" />

    <slot name="title" />

    <slot name="paragraph" />

    <slot name="button" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "../assets/css/var";
.info {
  width: 100%;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font: {
      weight: normal;
      size: clamp(1rem, 2vw, 2rem);
    }
    line-height: clamp(1.25rem, 2vw, 2.25rem);
    letter-spacing: -0.5px;

    margin: 0;
  }
  & h3:first-of-type {
    text-transform: capitalize;
  }

  .headline {
    text-transform: uppercase;
    font-weight: 100;
    margin: 0;
  }

  a {
    border: solid 1px $bg-color;
    @extend %buttons;
  }
}
</style>
