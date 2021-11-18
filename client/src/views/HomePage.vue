<template>
  <div>
    <img
      src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
      width="1280px"
      height="550px"
    />
    <h1 class="text-center mt-5">This is best our product</h1>
    <carousel-3d :controls-visible="true" :clickable="false">
      <slide v-for="(property, i) in properties" :key="i" :index="i">
        <figure>
          <img :src="property.image_url" />
          <figcaption>
            {{ property.name }}
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  data: function () {
    return {};
  },
  components: {
    Carousel3d,
    Slide,
  },
  computed: {
    properties: function () {
      let data = [];
      for (let i = 0; i < 3; i++) {
        if (this.$store.state.users.userProperties[i]) {
          data.push(this.$store.state.users.userProperties[i]);
        } else {
          break;
        }
      }
      return data;
    },
  },
  created: function () {
    this.$store.dispatch("users/fetchAllPropertyUsers");
  },
};
</script>

<style>
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>
