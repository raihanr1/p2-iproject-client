import axios from "axios";

const instance = axios.create({
  baseURL: "https://7210-182-253-127-194.ngrok.io",
});

export default instance;
