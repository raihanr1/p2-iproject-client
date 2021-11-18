<template>
  <div class="col-lg-4 mb-4">
    <div class="card mt-4">
      <img
        :src="bookMark.Property.image_url"
        width="200px"
        height="200px"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">{{ bookMark.Property.name }}</h5>
        <p class="card-text">Location: {{ bookMark.Property.address }}</p>
        <a
          id="like"
          class="btn btn-outline-success btn-sm"
          @click.prevent="transactionCreateVA"
          >Transaction</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMarkCard",
  props: ["bookMark"],
  methods: {
    transactionCreateVA: function () {
      this.$router.push(`/product/${this.bookMark.id}/transaction`);
    },
  },
};
</script>

<style></style>
