<template>
  <div id="app">
    <Navbar v-if="isLogin" />
    <router-view />
  </div>
</template>

<script>
import axios from "./axios-config/axios";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    isLogin: function () {
      return this.$store.state.users.isLogin;
    },
  },
  created: function () {
    if (localStorage.getItem("access_token")) {
      axios({
        method: "GET",
        url: "/home/user",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          if (data.role === "Admin") {
            this.$store.commit("users/HANDLE_LOGIN_ACTION", {
              access_token: localStorage.getItem("access_token"),
            });
            this.$store.commit("users/HANDLE_UI_ADMIN", true);
          } else {
            this.$store.commit("users/HANDLE_LOGIN_ACTION", {
              access_token: localStorage.getItem("access_token"),
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style></style>
<style></style>
