import axios from "axios";

const instance = axios.create({
  baseURL: "https://maulana-property.herokuapp.com",
});

export default instance;
