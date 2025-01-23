import axios from "axios";

// Configure the base URL for your backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:7000/api";


// Create an instance of Axios with default configurations
const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;

