<template>
  <section>
    <div class="title-wrapper">
      <h2>Contact</h2>
    </div>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label for="msg">Message</label>
        <textarea name="msg" id="msg"></textarea>
      </div>
      <div>
        <label for="terms">Accept the terms</label>
        <input type="checkbox" name="terms" id="terms" />
      </div>
      <button>Send</button>
    </form>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../assets/css/var";
.title-wrapper {
  @extend %title;
}
form {
  width: 40%;
  margin-inline: auto;
  margin-bottom: 7.25rem;

  display: grid;
  gap: 0.5rem;
  label {
    cursor: pointer;
  }

  div:not(div:last-of-type) {
    label {
      display: inline-block;
      margin-bottom: 0.25rem;
    }
    input,
    textarea {
      width: 100%;
      padding-block: 0.25rem;
      padding-inline: 0.5rem;

      border: 1px solid rgba($text-color, 0.2);
      background-color: $bg-color;

      outline: none;
      resize: none;
    }
  }
  & div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row-reverse;
    gap: 0.5rem;
  }

  button {
    width: 8rem;
    border: 1px solid rgba($text-color, 0.2);

    @extend %buttons;
    &::after {
      @extend %hoverPseudoElEffect;
      inset: 0;
      opacity: 0.5;
      z-index: -1;
    }
    &:is(:hover, :active) {
      &::after {
        transform: scaleX(100%);
      }
    }
  }
}
@media (max-width: 80rem) {
  form {
    width: 55%;
  }
}
@media (max-width: 64rem) {
  form {
    width: 65%;
  }
}
@media (max-width: 48rem) {
  form {
    width: 75%;
  }
}
@media (max-width: 40rem) {
  form {
    width: 85%;
  }
}
</style>
