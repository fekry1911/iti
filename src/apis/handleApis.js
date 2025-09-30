import axios from "axios";

let BASE_URL = "https://vcare.integration25.com/api";

export async function handleLogin(data) {
  let response = await axios.post(`${BASE_URL}/auth/login`, data);
  return response.data;
}

export async function handleRegister(data) {
  let response = await axios.post(`${BASE_URL}/auth/register`, data);
  return response.data;
}
