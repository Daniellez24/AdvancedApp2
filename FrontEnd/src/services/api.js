import axios from "axios";

const baseURL = "http://localhost:8081/";

export const Api = axios.create({
  baseURL,
});
