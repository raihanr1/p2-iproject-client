<template>
  <div id="property">
    <section id="gallery">
      <div class="container">
        <select
          v-model="currency"
          class="form-select mb-3"
          aria-label="Default select example"
        >
          <option selected disabled>Currency</option>
          <option value="USD">USD</option>
          <option value="IDR">IDR</option>
          <option value="EUR">EUR</option>
        </select>
        <div class="row">
          <property-card
            :currency="currency"
            v-for="property in properties"
            :key="property.id"
            :property="property"
          >
          </property-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PropertyCard from "../components/PropertyCard.vue";
export default {
  data: function () {
    return {
      currency: "IDR",
    };
  },
  components: { PropertyCard },
  computed: {
    properties: function () {
      return this.$store.state.users.userProperties;
    },
  },
  watch: {},
  created: function () {
    this.$store.dispatch("users/fetchAllPropertyUsers");
  },
};
</script>

<style scoped>
#property {
  margin-top: 50px;
}
</style>
