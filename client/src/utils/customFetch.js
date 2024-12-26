import axios from "axios";

export const mainFetch = axios.create({
  baseURL: "/api/v1",
});
