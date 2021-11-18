<template>
  <div id="property">
    <section id="gallery">
      <div class="container">
        <div class="row">
          <book-mark-card
            v-for="bookMark in bookMarks"
            :key="bookMark.id"
            :bookMark="bookMark"
          >
          </book-mark-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BookMarkCard from "../components/BookMarkCard.vue";
export default {
  components: { BookMarkCard },
  name: "BookMark",
  computed: {
    bookMarks: function () {
      return this.$store.state.users.bookMarks;
    },
  },
  created: function () {
    this.$store.dispatch("users/getAllBookMarksUsers");
  },
};
</script>

<style></style>
