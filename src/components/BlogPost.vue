<template>
  <div class="info">
    <p class="headline">
      <slot name="headline" />
    </p>

    <slot name="title" />
    <p>
      <slot name="paragraph" />
    </p>

    <slot name="button" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "../assets/css/var";
.info {
  width: 100%;
  margin-bottom: 3.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font: {
      weight: normal;
      size: clamp(1rem, 2vw, 2rem);
    }
    line-height: 2.25rem;
    letter-spacing: -1px;

    margin: 0;
  }
  & h3:first-of-type {
    text-transform: capitalize;
  }

  .headline {
    text-transform: uppercase;
    font-weight: 100;
    margin: 0;
    margin-bottom: 1rem;
  }

  button {
    appearance: none;
    border: solid 1px $bg-color;

    padding-block: 0.5rem;
    padding-inline: 1.5rem;
    margin-top: 2rem;

    background-color: transparent;
  }
}
</style>
