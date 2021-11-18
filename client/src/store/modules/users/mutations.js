export default {
  HANDLE_LOGIN_ACTION: function (state, payload) {
    if (payload === "Logout") {
      state.isLogin = false;
      state.isAdmin = false;
    } else if (payload.access_token) {
      localStorage.setItem("access_token", payload.access_token);
      state.isLogin = true;
    } else {
      state.token = payload;
    }
  },
  HANDLE_UI_ADMIN: function (state, data) {
    state.isAdmin = data;
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
  HANDLE_CREATE_NEW_PROPERTY: function (state, data) {
    state.newProperty = data;
  },
  HANDLE_DATA_PROPERTIES: function (state, data) {
    state.properties = data;
  },
  HANDLE_CHANGE_STATUS: function (state, data) {
    state.status = data;
  },
  HANDLE_UPDATE_PROPERTY: function (state, data) {
    state.update = data;
  },
  HANDLE_PROPERTY_FOR_USER: function (state, data) {
    state.userProperties = data;
  },
  HANDLE_BOOKMARK: function (state, data) {
    state.createBookMark = data;
  },
  HANDLE_ACTION_GET_ALL_BOOKMARKS: function (state, data) {
    state.bookMarks = data;
  },
  HANDLE_LOADING: function (state, data) {
    state.loading = data;
  },
};
