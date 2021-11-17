<template>
  <div id="app">
    <Navbar v-if="isLogin" />
    <router-view />
  </div>
</template>

<script>
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
      let data = {
        access_token: localStorage.getItem("access_token"),
      };
      this.$store.commit("users/HANDLE_LOGIN_ACTION", data);
    }
  },
};
</script>

<style></style>
<style></style>
