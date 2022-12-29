<template>
  <ul :class="listClass">
    <li v-for="img in images" :key="img.id">
      <div class="image">
        <img
          :src="img.urls.small"
          :alt="img.alt_description ? img.alt_description : 'image'"
        />
      </div>
      <BlogPost>
        <template #headline><p class="headline">travel</p></template>
        <template #title><h3>charming evening field</h3> </template>
        <template #paragraph
          ><p class="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magne aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p></template
        >
        <template #button
          ><RouterLink :to="{ name: 'blog-detail', params: { id: img.id } }"
            >Read More</RouterLink
          ></template
        >
      </BlogPost>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ImagesData } from "@/interfaces/types";
import BlogPost from "./BlogPost.vue";
defineProps<{
  images: ImagesData[];
  listClass: string;
}>();
</script>

<style scoped lang="scss">
@import "../assets/css/_var.scss";

.first-list {
  li:first-child {
    .image {
      aspect-ratio: 1/1.425;
    }
  }
  li:nth-child(2) {
    .image {
      aspect-ratio: 1/1.27;
    }
  }
  li:nth-child(3) {
    .image {
      aspect-ratio: 1/1.425;
    }
  }
  li:nth-child(4) {
    .image {
      aspect-ratio: 1/0.68;
    }
  }
  li:nth-child(5) {
    display: none;
    .image {
      aspect-ratio: 1/1.08;
    }
  }
  li:nth-child(6) {
    display: none;
    .image {
      aspect-ratio: 1/1.08;
    }
  }
}

.second-list {
  li:first-child {
    .image {
      aspect-ratio: 1/0.68;
    }
  }
  li:nth-child(2) {
    .image {
      aspect-ratio: 1/0.68;
    }
  }
  li:nth-child(3) {
    .image {
      aspect-ratio: 1/1.08;
    }
  }
  li:nth-child(4) {
    .info {
      display: none;
    }
    .image {
      aspect-ratio: 1/1.03;
    }
  }
  li:nth-child(5) {
    .image {
      aspect-ratio: 1/1.08;
    }
  }
  li:nth-child(6) {
    display: none;
    .image {
      aspect-ratio: 1/1.27;
    }
  }
  li:nth-child(7) {
    display: none;
    .image {
      aspect-ratio: 1/1.22;
    }
  }
}
.third-list {
  li:first-child {
    .image {
      aspect-ratio: 1/1.08;
    }
  }
  li:nth-child(2) {
    .image {
      aspect-ratio: 1/1.27;
    }
  }
  li:nth-child(3) {
    .image {
      aspect-ratio: 1/1.08;
    }
  }
  li:nth-child(4) {
    .image {
      aspect-ratio: 1/1.22;
    }
  }
}
li {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.75rem;

  width: 100%;

  .image {
    width: 100%;
    overflow: hidden;
    display: flex;

    img {
      width: 100%;
      object-fit: cover;
      filter: contrast(85%) brightness(60%);
    }
  }
}

.info {
  color: $text-color;

  h3 {
    font-weight: bold;
    padding-bottom: 1.8rem;
  }
  .headline,
  .paragraph {
    color: $text-color-lighten;
    text-align: center;
  }
  .paragraph {
    margin: 0;
    padding-top: 1.8rem;
    line-height: 1.35rem;

    position: relative;
  }
  .paragraph::after {
    content: "";
    position: absolute;
    top: -0.0625rem;
    left: 50%;
    transform: translateX(-50%);

    background-color: $text-color-lighten;

    width: 6rem;
    height: 0.125rem;
  }

  .headline {
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  a {
    color: $text-color-lighten;

    margin-top: 1rem;
    font-weight: bold;
  }
  a::after {
    @extend %hoverPseudoElEffect;

    width: 100%;
    height: 0.125rem;
    left: 0;
    bottom: 0;
  }
  a:is(:hover, :active) {
    &::after {
      transform: scaleX(100%);
    }
  }
}
@media (max-width: 64rem) {
  .info {
    margin-bottom: 2rem;
  }
  .first-list,
  .second-list {
    li:nth-child(5),
    li:nth-child(6),
    li:nth-child(7) {
      display: flex;
    }
  }
  .third-list {
    display: none;
  }
}
</style>
