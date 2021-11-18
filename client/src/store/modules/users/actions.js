import axios from "@/axios-config/axios.js";
export default {
  loginAction: async function ({ commit }, { email, password }) {
    try {
      commit("HANDLE_LOADING", true);
      let response = await axios({
        method: "post",
        url: "/user/login",
        data: {
          email,
          password,
        },
      });
      commit("HANDLE_LOADING", false);
      commit("HANDLE_LOGIN_ACTION", response.data);
    } catch (error) {
      commit("HANDLE_LOADING", false);
      commit("HANDLE_ERROR_ACTION", error);
    }
  },
  registerAction: async function ({ commit }, data) {
    try {
      commit("HANDLE_LOADING", true);
      await axios({
        method: "post",
        url: "/user/register",
        data,
      });
      commit("HANDLE_LOADING", false);

      commit("HANDLE_REGISTER_ACTION", true);
    } catch (error) {
      commit("HANDLE_LOADING", false);

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
  fetchAllPropertyUsers: async function ({ commit }) {
    try {
      let response = await axios({
        method: "get",
        url: `/home/product`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      commit("HANDLE_PROPERTY_FOR_USER", response.data);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },

  createBookMarkUser: async function ({ commit }, id) {
    try {
      commit("HANDLE_LOADING", true);

      let response = await axios({
        method: "post",
        url: `/home/bookmark/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      commit("HANDLE_LOADING", false);

      commit("HANDLE_BOOKMARK", response.status);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },

  getAllBookMarksUsers: async function ({ commit }) {
    try {
      let response = await axios({
        method: "get",
        url: `/home/bookmark`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      commit("HANDLE_ACTION_GET_ALL_BOOKMARKS", response.data);
    } catch (error) {
      commit("HANDLE_ERROR_ACTION", error);
    }
  },

  getAllOpenAccessBank: function () {
    return new Promise((res, rej) => {
      axios({
        method: "get",
        url: "/home/product/list_bank",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          res(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  },

  createVirtualAccPayment: function ({ commit }, { name, bank_code, id }) {
    return new Promise((res, rej) => {
      commit("HANDLE_LOADING", true);

      axios({
        method: "post",
        url: `/home/product/${id}/virtual_account`,
        data: {
          name,
          bank_code,
        },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  },

  createInvoiceVirtualAccount: function ({ commit }, id) {
    return new Promise((res, rej) => {
      commit("HANDLE_LOADING", true);

      axios({
        method: "post",
        url: `/home/product/${id}/invoice`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  },
};
