<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div
          class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden"
        >
          <div class="card-img-left d-none d-md-flex"></div>
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
            <form @submit.prevent="userRegister">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputUsername"
                  placeholder="myusername"
                  autofocus
                  v-model="given_name"
                />
                <label for="floatingInputUsername">User Name</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                  v-model="email"
                />
                <label for="floatingInputEmail">Email address</label>
              </div>

              <hr />

              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingMobileNumberConfirm"
                  placeholder="+62"
                  v-model="mobile_num"
                />
                <label for="floatingPasswordConfirm">Mobile Number</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingAddressConfirm"
                  placeholder="st..."
                  v-model="address"
                />
                <label for="floatingPasswordConfirm">Address</label>
              </div>
              <div v-if="loading" class="text-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>
              <div class="d-grid mb-2">
                <button
                  v-if="!loading"
                  class="
                    btn btn-lg btn-primary btn-login
                    fw-bold
                    text-uppercase
                  "
                  type="submit"
                >
                  Register
                </button>
              </div>

              <a
                class="d-block text-center mt-2 small"
                @click.prevent="loginPage"
                >Have an account? Sign In</a
              >

              <hr class="my-4" />
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
  name: "RegisterPage",
  data: function () {
    return {
      email: null,
      password: null,
      given_name: null,
      mobile_num: null,
      address: null,
      loading: false,
    };
  },
  methods: {
    loginPage: function () {
      this.$router.push("/login");
    },
    userRegister: function () {
      let data = {
        email: this.email,
        password: this.password,
        given_name: this.given_name,
        mobile_num: this.mobile_num,
        address: this.address,
      };
      this.$store.dispatch("users/registerAction", data);
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
    "$store.state.users.isRegister": function () {
      if (this.$store.state.users.isRegister) {
        Swal.fire(
          "Your account has been saved. Please sign in!",
          "",
          "success"
        );
        this.$store.commit("users/HANDLE_REGISTER_ACTION", false);
      }
    },
    "$store.state.users.error": function () {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: this.$store.state.users.error.response.data.message,
      });
    },
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
