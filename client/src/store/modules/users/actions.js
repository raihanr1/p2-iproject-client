import axios from "@/axios-config/axios.js";
export default {
  loginAction: async function ({ commit }, { email, password }) {
    try {
      let response = await axios({
        method: "post",
        url: "/user/login",
        data: {
          email,
          password,
        },
      });
      commit("HANDLE_LOGIN_ACTION", response.data);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },
  registerAction: async function ({ commit }, data) {
    try {
      await axios({
        method: "post",
        url: "/user/register",
        data,
      });
      commit("HANDLE_REGISTER_ACTION", true);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },
  requestTokenAuthUser: async function ({ commit }, id) {
    try {
      let response = await axios({
        method: "patch",
        url: `user/login/${id}`,
      });
      commit("HANDLE_GET_TOKEN_USER", response.data);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },
  checkValidToken: async function ({ commit }, { UserId, payload }) {
    try {
      let response = await axios({
        method: "patch",
        url: "/user/login/token",
        data: {
          id: UserId,
          payload,
        },
      });
      commit("HANDLE_LOGIN_ACTION", response.data);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },
  productionProperty: async function ({ commit }, data) {
    try {
      let response = await axios({
        method: "post",
        url: "/admin/property",
        data,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      commit("HANDLE_CREATE_NEW_PROPERTY", response.data);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },
  fetchAllProperty: async function ({ commit }) {
    try {
      let response = await axios({
        method: "get",
        url: "/admin/property",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      commit("HANDLE_DATA_PROPERTIES", response.data);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },
  changeStatus: async function ({ commit, dispatch }, { status, id }) {
    try {
      await axios({
        method: "patch",
        url: `/admin/property/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          status,
        },
      });
      dispatch("fetchAllProperty");
      commit("HANDLE_CHANGE_STATUS", true);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },
  updatePropertyByAdmin: async function ({ commit }, { data, id }) {
    try {
      await axios({
        method: "put",
        url: `/admin/property/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data,
      });
      commit("HANDLE_UPDATE_PROPERTY", true);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },
  fetchAllPropertyUsers: function ({ commit }) {},
};
