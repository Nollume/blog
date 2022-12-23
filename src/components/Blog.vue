<template>
  <section class="blog-container">
    <div class="lists-wrapper" v-if="!pending">
      <BlogList :images="getImagesFirstColumn" :listClass="'first-list'" />
      <BlogList :images="getImagesSecondColumn" :listClass="'second-list'" />
      <BlogList :images="getImagesThirdColumn" :listClass="'third-list'" />
    </div>
    <p class="loading" v-else>Loading...</p>
    <p v-if="error" class="error">{{ error }}.</p>
  </section>
</template>

<script setup lang="ts">
import BlogList from "./BlogList.vue";
import { useGetImages } from "@/composables/useFetch";
import { onMounted, computed } from "vue";

const { loadData, images, error, pending } = useGetImages(
  `https://api.unsplash.com/photos?client_id=${
    import.meta.env.VITE_ACCES_KEY
  }&per_page=13&page=25&order_by=latest`
);

const getImagesFirstColumn = computed(() => {
  return images.value.slice(0, 4);
});
const getImagesSecondColumn = computed(() => {
  return images.value.slice(4, 9);
});
const getImagesThirdColumn = computed(() => {
  return images.value.slice(9, 13);
});

onMounted(() => {
  loadData();
});
</script>

<style scoped lang="scss">
@import "../assets/css/_var.scss";
.loading,
.error {
  padding-block: 2rem;
  text-align: center;
  font-size: 1.25rem;
}
.blog-container {
  margin: 0 auto;
  
  width: 58%;
}
.lists-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
}
</style>
