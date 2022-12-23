<template>
  <section>
    <div v-if="!pending">
      <picture>
        <source :srcset="image?.urls?.small" media="(max-width: 600px)" />
        <img :src="image?.urls?.regular" :alt="image?.alt_description" />
      </picture>
    </div>
    <p class="loading" v-else>Loading...</p>
    <p v-if="error" class="error">{{ error }}.</p>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useGetImages } from "@/composables/useFetch";
import { onMounted } from "vue";

const route = useRoute();
const id = route.params.id;

const { loadData, image, error, pending } = useGetImages(
  `https://api.unsplash.com/photos/${id}?client_id=${
    import.meta.env.VITE_ACCES_KEY
  }`,
  "image"
);

onMounted(() => {
  loadData();
});
</script>

<style scoped lang="scss">
.loading,
.error {
  padding-block: 2rem;
  text-align: center;
  font-size: 1.25rem;
}
</style>
