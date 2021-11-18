<template>
  <div class="col-lg-4 mb-4">
    <div class="card">
      <img
        :src="property.image_url"
        width="200px"
        height="200px"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">{{ property.name }}</h5>
        <p class="card-text">Location: {{ property.address }}</p>
        <p class="card-text">Price: {{ price }}</p>
        <a
          id="detail"
          class="btn btn-outline-success btn-sm ml-5"
          @click.prevent="detailProperty"
          >See Detail</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PropertyCard",
  props: ["property", "currency"],
  data: function () {
    return {
      price: `Rp. ${this.property.price.toLocaleString("id-ID")}`,
    };
  },
  methods: {
    detailProperty: function () {
      this.$router.push({ path: `/property/${this.property.id}` });
    },
  },
  watch: {
    currency: function () {
      if (this.currency === "IDR") {
        this.price = `Rp. ${this.property.price.toLocaleString("id-ID")}`;
      } else {
        axios({
          url: "http://data.fixer.io/api/latest?access_key=577f18162101d2f0591fcfff8586a81e&format=1",
          method: "get",
        })
          .then(({ data }) => {
            for (const key in data.rates) {
              if (key == this.currency) {
                this.price = `${(
                  this.property.price / data.rates["IDR"]
                ).toFixed(2)} ${key}`;
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
#like {
  margin-left: 100px;
}
#detail {
  margin-left: 5px;
}
</style>
