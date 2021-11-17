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
            <form>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputUsername"
                  placeholder="myusername"
                  required
                  autofocus
                />
                <label for="floatingInputUsername">Username</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
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
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingMobileNumberConfirm"
                  placeholder="+62"
                />
                <label for="floatingPasswordConfirm">Mobile Number</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingAddressConfirm"
                  placeholder="st..."
                />
                <label for="floatingPasswordConfirm">Address</label>
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
                  Register
                </button>
              </div>

              <a class="d-block text-center mt-2 small" href="#"
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
export default {
  name: "RegisterPage",
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
