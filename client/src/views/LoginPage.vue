<template>
  <div class="container-fluid ps-md-0">
    <div class="row g-0">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4">Maulana Group Property</h3>
                <form v-if="!authentication" @submit.prevent="loginAccount">
                  <div class="form-floating mb-3">
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="d-grid">
                    <div v-if="loading" class="text-center">
                      <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                      </div>
                    </div>
                    <button
                      v-if="!loading"
                      class="
                        btn btn-lg btn-primary btn-login
                        text-uppercase
                        fw-bold
                        mb-2
                      "
                      type="submit"
                    >
                      Sign in
                    </button>
                    <div class="text-center">
                      <a class="small" @click.prevent="registerPage"
                        >Can't get access? Register here!</a
                      >
                    </div>
                  </div>
                </form>
                <form v-if="authentication" @submit.prevent="checkValidToken">
                  <div class="form-floating mb-3">
                    <input
                      v-model="token"
                      type="number"
                      class="form-control"
                      id="tokenInput"
                      placeholder="token"
                    />
                    <label for="floatingInput">Access Token</label>
                  </div>
                  <div class="d-grid">
                    <button
                      class="
                        btn btn-lg btn-primary btn-login
                        text-uppercase
                        fw-bold
                        mb-2
                      "
                      type="submit"
                    >
                      Verification
                    </button>
                  </div>
                  <div class="text-center">
                    <a class="small" @click.prevent="sendValidToken(user)"
                      >Send request token with gmail</a
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data: function () {
    return {
      email: null,
      password: null,
      token: null,
      authentication: null,
      user: null,
      loading: false,
    };
  },
  methods: {
    loginAccount: function () {
      this.$store.dispatch("users/loginAction", {
        email: this.email,
        password: this.password,
      });
    },
    registerPage: function () {
      this.$router.push("/register");
    },
    sendValidToken: function (UserId) {
      this.$store.dispatch("users/requestTokenAuthUser", UserId);
    },
    checkValidToken: function () {
      this.$store.dispatch("users/checkValidToken", {
        UserId: this.user,
        payload: this.token,
      });
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
    "$store.state.users.isLogin": function () {
      this.$router.push("/home");
    },
    "$store.state.users.token": function () {
      Swal.fire(
        "Please check your email for verification token!",
        "",
        "success"
      );
      this.authentication = true;
      this.user = this.$store.state.users.token.id;
    },
    "$store.state.users.successSend": function () {
      if (this.$store.state.users.successSend !== null) {
        Swal.fire(
          "Please check your email for verification token!",
          "",
          "success"
        );
        this.authentication = true;
        this.user = this.$store.state.users.successSend.id;
        "users/HANDLE_GET_TOKEN_USER", null;
      }
    },
    "$store.state.users.error": function () {
      if (
        this.$store.state.users.error.response.data.message ===
        "Verification token user"
      ) {
        this.user = this.$store.state.users.error.response.data.id;
        this.authentication = true;
      } else if (
        this.$store.state.users.error.response.data.message === "User not found"
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please login first",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: this.$store.state.users.error.response.data.message,
        });
      }
    },
  },
};
</script>

<style scoped>
.login {
  min-height: 100vh;
}

.bg-image {
  background-image: url("https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=410&q=80");
  background-size: cover;
  background-position: center;
  background-position: 0 -180px;
}

.login-heading {
  font-weight: 300;
}

h3 {
  text-align: center;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>
