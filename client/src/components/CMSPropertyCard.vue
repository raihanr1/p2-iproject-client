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
        <a
          class="btn btn-outline-success btn-sm mr-7"
          @click.prevent="updateProperty"
          >Update</a
        >
        <label id="status">Status</label>
        <select
          @change.prevent="changeStatus"
          v-model="status"
          id="select"
          class="custom-select"
        >
          <option value="Active">Active</option>
          <option value="Deactive">Deactive</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "CMSPropertyCard",
  props: ["property"],
  data: function () {
    return {
      status: this.property.status,
    };
  },
  methods: {
    changeStatus: function () {
      console.log(this.property.id, "ada ga");
      this.$store.dispatch("users/changeStatus", {
        status: this.status,
        id: this.property.id,
      });
    },
    updateProperty: function () {
      this.$router.push({
        path: "/cms/production",
        query: { id: this.property.id },
      });
    },
  },
  created: function () {},

  watch: {
    "$store.state.users.status": function () {
      console.log(this.$store.state.users.status, "asupppppppp");
      Swal.fire("Change status complete!", "", "success");
      this.$store.commit("users/HANDLE_CHANGE_STATUS", false);
    },
  },
};
</script>

<style>
#status {
  margin-left: 10px;
}

#select {
  margin-left: 10px;
}
</style>
