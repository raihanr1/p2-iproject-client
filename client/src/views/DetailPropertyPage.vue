<template>
  <div>
    <h1 class="mt-5 ml-3">{{ property.name }}</h1>
    <img
      class="mt-5"
      :src="property.image_url"
      width="1280px"
      height="800px"
      alt=""
    />
    <div class="mt-5 text-center">
      <h1>ABOUT</h1>
      <p>{{ property.describe }}</p>
    </div>
    <div class="mt-5 text-center">
      <h1>Detail</h1>
      <p>Location: {{ property.address }}</p>
      <p>Price: Rp. {{ property.price.toLocaleString() }}</p>
    </div>
    <div class="mt-5 text-center">
      <h1>Transaction</h1>
      <p>
        Do you interest with this house? Let's go to check out here, and
        continue the transactions
      </p>
      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
      <a
        v-if="!loading"
        id="like"
        class="btn btn-outline-success btn-lg"
        @click.prevent="bookMarkProperty"
        >Check Out</a
      >
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "DetailPropertyPage",
  data: function () {
    return {
      loading: false,
    };
  },
  computed: {
    property: function () {
      let index = this.$store.state.users.userProperties.findIndex(
        (el) => el.id == this.$route.params.id
      );
      let property = this.$store.state.users.userProperties[index];
      return property;
    },
  },
  watch: {
    "$store.state.users.loading": function () {
      if (this.$store.state.users.loading) {
        this.loading = this.$store.state.users.loading;
      } else {
        this.loading = false;
      }
    },
    "$store.state.users.createBookMark": function () {
      if (this.$store.state.users.createBookMark == 200) {
        Swal.fire("Your already check-out this property.", "", "success");
      } else {
        Swal.fire("Your check-out has been saved.", "", "success");
      }
    },
  },
  methods: {
    bookMarkProperty: function () {
      this.$store.dispatch("users/createBookMarkUser", this.$route.params.id);
    },
  },
  created: function () {
    this.$store.dispatch("users/fetchAllPropertyUsers");
  },
};
</script>

<style></style>
