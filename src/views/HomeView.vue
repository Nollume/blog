<template>
  <section class="wrapper">
    <ul v-if="!pending">
      <li v-for="img in images" :key="img.id">
        <div class="image">
          <img
            :src="img.urls.small"
            :alt="img.alt_description ? img.alt_description : ''"
          />
        </div>
        <BlogPost>
          <template #headline><p class="headline">lifestyle</p></template>
          <template #title
            ><h3>organize your life with 10</h3>
            <h3>Simple rule</h3></template
          >
          <template #button
            ><RouterLink
              :to="{
                name: 'blog-detail',
                params: { id: img.id },
              }"
              >Read More</RouterLink
            ></template
          >
        </BlogPost>
      </li>
    </ul>
    <p class="loading" v-else>Loading...</p>
    <p v-if="error" class="error">{{ error }}.</p>
  </section>
  <Blog />
</template>

<script setup lang="ts">
import BlogPost from "@/components/BlogPost.vue";
import Blog from "@/components/Blog.vue";
import { useGetImages } from "@/composables/useFetch";
import { onMounted } from "vue";

const { loadData, images, error, pending } = useGetImages(
  `https://api.unsplash.com/photos?client_id=${
    import.meta.env.VITE_ACCES_KEY
  }&per_page=4&page=23&order_by=latest`
);

onMounted(() => {
  loadData();
});
</script>

<style scoped lang="scss">
@import "../assets/css/var";
.loading,
.error {
  padding-block: 2rem;
  text-align: center;
  font-size: 1.25rem;
}
.wrapper {
  margin-bottom: 5.65rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;

  li {
    width: 100%;
    aspect-ratio: 6/7.17;
    position: relative;

    display: flex;
    align-items: flex-end;
  }
  .image {
    position: absolute;
    z-index: -1;
    inset: 0;

    display: flex;

    img {
      width: 100%;
      object-fit: cover;
      filter: contrast(85%) brightness(60%);
    }
  }
  .info {
    color: $bg-color;
    .headline {
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }

    a {
      margin-top: 1.55rem;
      margin-bottom: 0.75rem;
      color: $bg-color;
    }

    a::after {
      @extend %hoverPseudoElEffect;

      opacity: 0.5;

      inset: 0;
      z-index: -1;
    }
    a:is(:hover, :active) {
      &::after {
        transform: scaleX(100%);
      }
    }
  }
}
</style>
