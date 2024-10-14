import axios from "axios";

const api = axios.create({
  baseURL: "https://react-native-mini-project-items.eapi.joincoded.com/",
});

export default api;
