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
      console.log(error);
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
};
