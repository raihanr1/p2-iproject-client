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
              Transaction Property
            </h5>
            <form @submit.prevent="transactionProperty">
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
              <label for="floatingInputV_A"
                >List Virtual Account Available</label
              >
              <div class="form-floating mb-3 mt-2">
                <select v-model="bank_code" id="select" class="custom-select">
                  <option
                    v-for="(VA, i) in VA_Available"
                    :key="i"
                    :value="VA.code"
                  >
                    {{ VA.name }}
                  </option>
                </select>
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
                  Initialization
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
  name: "TransactionPage",
  data: function () {
    return {
      name: null,
      bank_code: null,
      VA_Available: [],
      loading: false,
    };
  },
  methods: {
    transactionProperty: function () {
      if (!this.name) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Name is required",
        });
      } else {
        this.$store
          .dispatch("users/createVirtualAccPayment", {
            name: this.name,
            bank_code: this.bank_code,
            id: this.$route.params.id,
          })
          .then(() => {
            this.$store.commit("users/HANDLE_LOADING", false);

            let timerInterval;
            Swal.fire({
              title: "Auto close alert!",
              html: "I will close in <b></b> milliseconds.",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector("b");
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft();
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
            return this.$store.dispatch(
              "users/createInvoiceVirtualAccount",
              this.$route.params.id
            );
          })
          .then(({ data }) => {
            this.$store.commit("users/HANDLE_LOADING", false);

            window.location.href = data.invoice_url;
          })
          .catch((err) => {
            console.log(err);
          });
      }
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
  },
  created: function () {
    this.$store
      .dispatch("users/getAllOpenAccessBank")
      .then((data) => {
        this.bank_code = data[0].code;
        this.VA_Available = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
