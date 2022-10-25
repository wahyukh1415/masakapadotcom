import axios from "axios";

const axiosInstances = axios.create({
  baseURL: "https://masak-apa-tomorisakura.vercel.app/api",
});

export default axiosInstances;
