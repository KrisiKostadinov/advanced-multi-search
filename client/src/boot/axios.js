import axios from "axios";

// localhost -> http://localhost:3000
const api = axios.create({ baseURL: "http://localhost:3000" });

export { api };