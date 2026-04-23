// src/API/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://173.212.193.239:8004/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default API;

