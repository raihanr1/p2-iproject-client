<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div
          class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden"
        >
          <div class="card-img-left d-none d-md-flex"></div>
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">
              Production Property
            </h5>
            <form @submit.prevent="property">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputName"
                  placeholder="name"
                  v-model="name"
                />
                <label for="floatingInputName">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputDescribe"
                  placeholder="describe"
                  v-model="describe"
                />
                <label for="floatingInputName">Describe</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInputPrice"
                  placeholder="price"
                  v-model="price"
                />
                <label for="floatingInputName">Price</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputImage"
                  placeholder="image"
                  v-model="image_url"
                />
                <label for="floatingInputName">Image URL</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputAddress"
                  placeholder="address"
                  v-model="address"
                />
                <label for="floatingInputName">Address</label>
              </div>
              <div class="d-grid mb-2">
                <button
                  class="
                    btn btn-lg btn-primary btn-login
                    fw-bold
                    text-uppercase
                  "
                  type="submit"
                >
                  {{ status }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "CMSProduction",
  data: function () {
    return {
      name: null,
      describe: null,
      price: null,
      image_url: null,
      address: null,
      status: "Add",
    };
  },
  methods: {
    property: function () {
      let data = {
        name: this.name,
        describe: this.describe,
        price: this.price,
        image_url: this.image_url,
        address: this.address,
      };
      if (!this.$route.query.id) {
        this.$store.dispatch("users/productionProperty", data);
      } else {
        this.$store.dispatch("users/updatePropertyByAdmin", {
          data,
          id: this.$route.query.id,
        });
      }
    },
  },
  watch: {
    "$store.state.users.error": function () {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: this.$store.state.users.error.response.data.message,
      });
    },
    "$store.state.users.newProperty": function () {
      if (this.$store.state.users.newProperty !== null) {
        Swal.fire("New Property has been saved!", "", "success");
        this.name = null;
        this.describe = null;
        this.price = null;
        this.image_url = null;
        this.address = null;
        this.$store.commit("users/HANDLE_CREATE_NEW_PROPERTY", null);
      }
    },
    "$store.state.users.properties": function () {
      if (this.$route.query.id) {
        this.status = "Update";
        let index = this.$store.state.users.properties.findIndex(
          (el) => el.id == this.$route.query.id
        );
        let el = this.$store.state.users.properties[index];
        this.name = el.name;
        this.describe = el.describe;
        this.price = el.price;
        this.image_url = el.image_url;
        this.address = el.address;
      }
    },
    "$store.state.users.update": function () {
      if (this.$store.state.users.update) {
        Swal.fire("Property has been updated!", "", "success");
        this.$store.commit("users/HANDLE_UPDATE_PROPERTY", false);
        this.$router.push("/cms/property");
      }
    },
  },
  created: function () {
    if (this.$route.query.id) {
      this.$store.dispatch("users/fetchAllProperty");
    }
  },
};
</script>

<style scoped>
.card-img-left {
  width: 70%;
  /* Link to your background image using in the property below! */
  background: scroll center
    url("https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=410&q=80");
  background-size: cover;
}

.card-body {
  width: 60%;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>
