export default {
  HANDLE_LOGIN_ACTION: function (state, payload) {
    if (payload.access_token) {
      localStorage.setItem("access_token", payload.access_token);
      state.isLogin = true;
    } else {
      state.token = payload;
    }
  },
  HANDLE_REGISTER_ACTION: function (state, status) {
    state.isRegister = status;
  },
  HANDLE_GET_TOKEN_USER: function (state, data) {
    state.successSend = data;
  },
  HANDLE_ERROR_ACTION: function (state, error) {
    state.error = error;
  },
};
