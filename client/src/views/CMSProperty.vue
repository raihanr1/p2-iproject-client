<template>
  <div id="property">
    <section id="gallery">
      <div class="container">
        <div class="row">
          <CMSPropertyCard
            v-for="property in properties"
            :key="property.id"
            :property="property"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CMSPropertyCard from "../components/CMSPropertyCard.vue";
export default {
  name: "CMSProperty",
  components: {
    CMSPropertyCard,
  },
  data: function () {
    return {};
  },
  computed: {
    properties: function () {
      return this.$store.state.users.properties;
    },
  },
  created: function () {
    this.$store.dispatch("users/fetchAllProperty");
  },
};
</script>

<style scoped>
#property {
  margin-top: 50px;
}
</style>
