import axios from "axios";

// localhost -> http://localhost:3000
const api = axios.create({ baseURL: "https://advanced-multi-search.onrender.com" });

export { api };
