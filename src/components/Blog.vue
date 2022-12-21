<template>
  <section>
    <BlogPost>
      <template #headline>travel</template>
      <template #title><h3>charming evening field</h3> </template>
      <template #paragraph
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam
        vel ea laudantium nostrum aliquam facilis ex, id molestiae eos nesciunt
        provident debitis temporibus? Recusandae reprehenderit nisi, praesentium
        illo architecto quasi exercitationem illum perspiciatis nesciunt quo,
        temporibus est id suscipit!</template
      >
      <p></p>
      <template #button><button>Read More</button></template>
    </BlogPost>
  </section>
</template>

<script setup lang="ts">
import BlogPost from "./BlogPost.vue";
</script>

<style scoped lang="scss">
@import "../assets/css/_var.scss";
.info {
  color: $text-color;
}
</style>
