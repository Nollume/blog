<template>
  <section>
    <div class="title-wrapper">
      <h2>As a Designer, I Refuse to Call People 'Users'</h2>
    </div>
    <div class="content-container" v-if="!pending">
      <picture>
        <source :srcset="image?.urls?.small" media="(max-width: 600px)" />
        <img :src="image?.urls?.regular" :alt="image?.alt_description" />
      </picture>
      <article>
        <p>
          {{ text }}
        </p>
        <p>
          {{ text }}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          atque officiis culpa doloribus doloremque nisi ratione omnis tenetur
          accusantium aliquam veritatis exercitationem harum quae, possimus hic.
          Voluptate provident fuga quo sequi, distinctio cumque consequuntur
          pariatur, nam quasi molestiae explicabo.
        </p>
      </article>
      <picture>
        <source :srcset="image?.urls?.small" media="(max-width: 600px)" />
        <img :src="image?.urls?.regular" :alt="image?.alt_description" />
      </picture>
      <p>
        {{ text }}
      </p>
    </div>
    <p class="loading" v-else>Loading...</p>
    <p v-if="error" class="error">{{ error }}.</p>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { GetImages } from "@/composables/useFetch";
import { onMounted } from "vue";

const text: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem vero, voluptates vel laudantium quibusdam officia rem quae asperiores deserunt quasi? Voluptatum corrupti eius minima itaque, temporibus atque mollitia. Quod provident amet, nihil recusandae assumenda nesciunt soluta consequatur natus itaque blanditiis corrupti! Mollitia eum dicta sequi consectetur sit adipisci ullam optio minima quia cupiditate beatae, id exercitationem, nemo atque ut aspernatur nulla autem quidem recusandae. Perspiciatis, error praesentium eveniet libero similique soluta odit ipsum minus totam! Iure omnis in eius sequi. Nostrum esse architecto cupiditate voluptatibus possimus commodi. Voluptatem quisquam, ea voluptatum quam, eveniet et nostrum enim explicabo, corporis sed tempora laborum? Distinctio, amet neque. Ipsam magni ex reiciendis ab illo omnis numquam saepe dolor, praesentium at incidunt totam id fugit neque. Voluptatibus eaque in consequatur reprehenderit quos dicta natus assumenda repellat quo. Officia excepturi alias, quam tempora ducimus necessitatibus.";
const route = useRoute();
const id = route.params.id;

const { loadData, image, error, pending } = GetImages(
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
@import "../assets/css/var";
.loading,
.error {
  padding-block: 2rem;
  text-align: center;
  font-size: 1.25rem;
}
.title-wrapper {
  @extend %title;
}
section {
  width: 100%;
}
.content-container {
  width: 40%;
  margin: 0 auto;

  display: grid;
  gap: 1.5rem;

  article {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    & > p:last-child {
      font: {
        style: italic;
        weight: bold;
      }

      padding: 1.3rem;
      background-color: $blog-accent-color;
    }
  }

  p {
    margin: 0;
    line-height: 1.38rem;
  }
  & > :last-child {
    margin-bottom: 4.25rem;
  }

  picture {
    aspect-ratio: 2/0.83;

    display: flex;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
