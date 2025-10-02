import axios from "axios";

let BASE_URL = "https://vcare.integration25.com/api";
let BASE_URL_PRODUCTS = "https://api.escuelajs.co/api/v1/products";

export async function handleLogin(data) {
  let response = await axios.post(`${BASE_URL}/auth/login`, data);
  return response.data;
}

export async function handleRegister(data) {
  let response = await axios.post(`${BASE_URL}/auth/register`, data);
  return response.data;
}
export async function getAllProducts() {
  let response = await axios.get(`${BASE_URL_PRODUCTS}`);
  return response.data;
}
