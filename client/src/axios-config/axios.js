import axios from "axios";

const instance = axios.create({
  baseURL: "https://7e42-182-253-127-194.ngrok.io",
});

export default instance;
