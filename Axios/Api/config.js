import axios from "axios";

  export const api = axios.create({
    baseURL: "http://10.0.1.43",
   /// baseURL: "http://10.0.1.12:4010/api",
});
//export default api;

