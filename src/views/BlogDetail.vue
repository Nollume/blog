<template>
  <div>
    <!-- <img :src="images.urls.regular" /> -->
    {{ id }}
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useGetImages } from "@/composables/useFetch";
import { onMounted } from "vue";

const route = useRoute();
const id = route.params.id;

const { loadData, images, error, pending } = useGetImages(
  `https://api.unsplash.com/photos/Dwu85P9SOIk?client_id=${
    import.meta.env.VITE_ACCES_KEY
  }`
);

onMounted(() => {
  loadData();
});
</script>

<style scoped lang="scss"></style>
