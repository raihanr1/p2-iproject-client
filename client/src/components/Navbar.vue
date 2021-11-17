<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" id="image-nav">
      <img
        src="../assets/1636776478402.jpg"
        width="60"
        height="60"
        class="d-inline-block align-top"
        alt=""
      />
    </a>
    <p id="text-nav">Maulana Group Property</p>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li
          @click.prevent="changePage('/home')"
          v-if="!isAdmin"
          class="nav-item active"
        >
          <a class="nav-link">Home</a>
        </li>
        <li
          v-if="!isAdmin"
          class="nav-item"
          @click.prevent="changePage('/bookmark')"
        >
          <a class="nav-link">My BookMark</a>
        </li>
        <li
          v-if="isAdmin"
          class="nav-item"
          @click.prevent="changePage('/cms/property')"
        >
          <a class="nav-link">Property</a>
        </li>
        <li
          v-if="isAdmin"
          class="nav-item"
          @click.prevent="changePage('/cms/production')"
        >
          <a class="nav-link">Production</a>
        </li>
        <li
          v-if="!isAdmin"
          class="nav-item"
          @click.prevent="changePage('/about')"
        >
          <a class="nav-link">About</a>
        </li>
        <li
          v-if="isAdmin"
          class="nav-item"
          @click.prevent="changePage('/cms/transaction')"
        >
          <a class="nav-link">Transaction</a>
        </li>
        <li v-if="!isAdmin" class="nav-item">
          <a class="nav-link">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navvar",
  computed: {
    isAdmin: function () {
      return this.$store.state.users.isAdmin;
    },
  },
  methods: {
    changePage: function (path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
nav {
  border-top: 10px solid;
  color: rgb(89, 133, 199);
  background-color: rgb(248, 248, 248);
}

#text-nav {
  margin-top: 40px;
}

#image-nav {
  margin-left: 20px;
}
img {
  border-radius: 50%;
}
ul {
  margin-left: 20%;
}
</style>
