<template>
  <div>
    <img
      src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
      width="1280px"
      height="550px"
    />
    <div id="example">
      <carousel-3d
        :controls-visible="true"
        :controls-prev-html="'&#10092; '"
        :controls-next-html="'&#10093;'"
        :controls-width="30"
        :controls-height="60"
        :clickable="false"
      >
        <slide v-for="(slide, i) in slides" :key="i" :index="i">
          <img src="../assets/1636776478402.jpg" alt="test" />
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  data: function () {
    return {
      slides: 4,
    };
  },
  components: {
    Carousel3d,
    Slide,
  },
  created: function () {
    if (this.$route.query.id) {
      this.$store.dispatch("users/");
    }
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
