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
      console.log(error);
      commit("HANDLE_ERROR_ACTION", error);
    }
  },
};
